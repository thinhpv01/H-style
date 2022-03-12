import React, { useRef, useState } from 'react';
import './style.scss';
const SideBar = ({ handleChange }) => {
    const [price, setPrice] = useState({ gte: 0, lte: 0 });
    const handleCategoryChange = (e) => {
        document.querySelectorAll('.sideBar__box__btn button').forEach((item) => {
            item.classList.remove('active');
        });
        const { value, classList } = e.target;
        classList.add('active');
        if (handleChange) handleChange({ category: value });
    };
    const handlePriceChange = () => {
        if (handleChange) handleChange({ price });
    };
    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setPrice((prev) => ({
            ...prev,
            [name]: Number.parseInt(value),
        }));
    };
    return (
        <div className="sideBar">
            <div className="sideBar__title">Filter what you like</div>
            <div className="sideBar__box">
                <h4 className="sideBar__box__title">Category</h4>
                <div className="sideBar__box__btn">
                    <button onClick={handleCategoryChange} value="all">
                        All
                    </button>
                    <button onClick={handleCategoryChange} value="clothes">
                        Clothes
                    </button>
                    <button onClick={handleCategoryChange} value="jewelry">
                        Jewelry
                    </button>
                    <button onClick={handleCategoryChange} value="glasses">
                        Glasses
                    </button>
                </div>
            </div>
            <div className="sideBar__box">
                <h4 className="sideBar__box__title">Price</h4>
                <div className="sideBar__box__input">
                    <div className="form">
                        <input
                            type="number"
                            onChange={handleChangeValue}
                            value={price.gte}
                            name="gte"
                        />
                        <span>-</span>
                        <input
                            type="number"
                            onChange={handleChangeValue}
                            value={price.lte}
                            name="lte"
                        />
                    </div>
                    <button onClick={handlePriceChange}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
