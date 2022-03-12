import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { calcNewPrice } from '../../utils';
import Card from '../Home/New/Card';
import SideBar from './SideBar';
import './style.scss';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState({ category: 'all', price: { gte: 0, lte: Infinity } });
    useEffect(() => {
        (async () => {
            const data = await axios.get('https://h-style-data.herokuapp.com/products');
            setItems(data.data);
            console.log(items);
        })();
    }, []);
    const renderProducts = useMemo(() => {
        return items.filter(
            (x) =>
                (filter.category === 'all' || x.category === filter.category) &&
                calcNewPrice(x.price, x.sale) >= filter.price.gte &&
                calcNewPrice(x.price, x.sale) <= filter.price.lte
        );
    }, [items, filter]);
    const handleFilterChange = (value) => {
        setFilter((prev) => ({
            ...prev,
            ...value,
        }));
    };
    return (
        <div className="shop">
            <div className="shop__container">
                <SideBar handleChange={handleFilterChange} />
                <div className="shop__list">
                    {renderProducts.map((product, index) => (
                        <Card item={product} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
