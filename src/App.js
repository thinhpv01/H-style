import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './features/Home';
import About from './features/About';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import Collections from './features/Collections';
import Contact from './features/Contact';
import Shop from './features/Shop';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';
import Product from './features/Product';
import Checkout from './features/Checkout';

function App() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await axios.get('https://h-style-data.herokuapp.com/products');
            setItems(data.data);
            console.log(items);
        })();
    }, []);

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home items={items} />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/collections">
                        <Collections />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/product/:productId">
                        <Product />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                </Switch>
                <Footer />
                <Cart />
            </Router>
        </div>
    );
}

export default App;
