import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addToCart } from '../../components/Cart/cartSlice';
import { calcNewPrice } from '../../utils';
import Review from './Review';
import './style.scss';

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [currentImage, setCurrentImage] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `https://h-style-data.herokuapp.com/products/${productId}`
            );
            setProduct(response.data);
        })();
    }, [productId]);
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: productId,
                product,
                quantity: 1,
            })
        );
    };
    return (
        <div className="product">
            <div className="product__back">
                <Link className="product__back__link" to="/">
                    Back To Shopping
                </Link>
            </div>
            <div className="product__container">
                <div className="product__image">
                    <div className="product__thumb">
                        {product.image?.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className="product__thumb__item"
                            >
                                <img src={item} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="product__image__main">
                        <img src={product.image ? product.image[currentImage] : ''} alt="" />
                    </div>
                </div>
                <div className="product__info">
                    <div>
                        <h3 className="product__name">{product.name}</h3>
                        <p className="product__collection">{product.collection}</p>
                    </div>
                    <div>
                        <p className="product__title">Information</p>
                        <p className="product__des">{product.desc}</p>
                    </div>
                    <div>
                        <p className="product__price">￥{product.price}</p>
                        <div className="product__link">
                            <Link to="/">Buy It Now</Link>
                            <div onClick={handleAddToCart} to="/">
                                Add To Cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Review />
        </div>
    );
};

export default Product;
