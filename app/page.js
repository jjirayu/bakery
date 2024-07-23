'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from "./page.module.css";
import initialProducts from './productsData';
import debounce from 'lodash.debounce';
import Basket from './components/Basket';
import Image from 'next/image';
const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [basket, setBasket] = useState([]);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      setFilteredProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 300);

    debouncedSearch();
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleQuantityChange = (productName, delta) => {
    const updatedProducts = products.map(product =>
      product.name === productName
        ? { ...product, quantity: Math.max(0, product.quantity + delta) }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleAddToBasket = (product) => {
    const updatedBasket = [...basket];
    const productIndex = updatedBasket.findIndex(item => item.name === product.name);

    if (productIndex !== -1) {
      updatedBasket[productIndex].quantity += product.quantity;
    } else {
      updatedBasket.push({ ...product });
    }

    setBasket(updatedBasket);

    // Reset the product quantity to 1 after adding to basket
    const updatedProducts = products.map(p =>
      p.name === product.name ? { ...p, quantity: 1 } : p
    );
    setProducts(updatedProducts);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setError(null);
        },
        error => {
          setError(error.message);
          setLocation(null);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>รายการสินค้า</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className={styles.logo}
          quality={100}
        />
        <h1 className={styles.title}>รายการสินค้า</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchBox}
        />
      </header>
      <nav className={styles.nav}>
        <button
          className={activeTab === 'products' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('products')}
        >
          รายการสินค้า
        </button>
        <button
          className={activeTab === 'about' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('about')}
        >
          About Us
        </button>
        <button
          className={activeTab === 'basket' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('basket')}
        >
          Basket
        </button>
      </nav>
      <div className={styles.content}>
        {activeTab === 'products' && (
          <div className={styles.productList}>
            {filteredProducts.map((product, index) => (
              <div className={styles.productCard} key={index}>
                <h2 className={styles.productName}>{product.name}</h2>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <p className={styles.productPrice}>Price: {product.price}</p>
                <div className={styles.productQuantity}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(product.name, -1)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(product.name, 1)}
                  >
                    +
                  </button>
                  <button
                    className={styles.addButton}
                    onClick={() => handleAddToBasket(product)}
                  >
                    Add to Basket
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'about' && (
          <div className={styles.aboutUs}>
            <h2>About Us</h2>
            <p>This is the About Us section. You can add more information here about your company.</p>
            <button className={styles.locationButton} onClick={handleGetLocation}>
              Get Current Location
            </button>
            {location && (
              <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
            )}
            {error && (
              <p>Error: {error}</p>
            )}
          </div>
        )}
        {activeTab === 'basket' && (
          <Basket basket={basket} />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;