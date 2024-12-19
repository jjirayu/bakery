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
  const [selectedType, setSelectedType] = useState('');


  useEffect(() => {
    const debouncedSearch = debounce(() => {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedType ? product.type === selectedType : true)
      );
      setFilteredProducts(filtered);
    }, 300);

    debouncedSearch();
    return () => debouncedSearch.cancel();
  }, [searchTerm, selectedType, products]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleQuantityChange = (productName, delta) => {
    setProducts(products.map(product =>
      product.name === productName
        ? { ...product, quantity: Math.max(0, product.quantity + delta) }
        : product
    ));
  };

  const handleAddToBasket = (product) => {
    const updatedBasket = basket.map(item =>
      item.name === product.name
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
    );
    if (!updatedBasket.find(item => item.name === product.name)) {
      updatedBasket.push({ ...product });
    }
    setBasket(updatedBasket);
    setProducts(products.map(p =>
      p.name === product.name ? { ...p, quantity: 1 } : p
    ));
  };

  const handleFilterType = (type) => setSelectedType(type);

  const handleUpdateQuantity = (productName, delta) => {
    setBasket(basket
      .map(item =>
        item.name === productName
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };
 
  return (
    <div className={styles.container}>
   
      <Head>
        <title>รายการสินค้า</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <header className={styles.header}>
        <Image
          src="/images/logo2.png"
          alt="Logo"
          width={150}
          height={150}
          className={styles.logo}
          quality={100}
        />
        <div className={styles.titleSearchContainer}>
          <h1 className={styles.title}>ค้นหาสินค้า</h1>
          <input
            type="text"
            placeholder="ค้นหาชื่อสินค้า, ยี่ห้อสินค้า..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchBox}
          />
        </div>
      </header>

      <nav className={styles.nav}>
        <button
          className={activeTab === 'products' ? styles.activeTab : styles.largeTab}
          onClick={() => setActiveTab('products')}
        >
          รายการสินค้า
        </button>
        <button
          className={activeTab === 'basket' ? styles.activeTab : styles.largeTab}
          onClick={() => setActiveTab('basket')}
        >
          ตะกร้าสินค้า
        </button>
      </nav>

      <div className={styles.content}>
        {activeTab === 'products' && (
          <>
            <div className={styles.filterSection}>
              {['', 'บรรจุภัณฑ์', 'ของใช้', 'เครื่องครัว', 'วัตถุดิบ'].map(type => (
                <button
                  key={type}
                  className={styles.filterButton}
                  onClick={() => handleFilterType(type)}
                >
                  {type || 'All'}
                </button>
              ))}
            </div>
            <div className={styles.productList}>
              {filteredProducts.map((product, index) => (
                <div className={styles.productCard} key={index}>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                  <p className={styles.productPrice}>ราคา: {product.price}</p>
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
          </>
        )}
        {activeTab === 'basket' && <Basket basket={basket} updateQuantity={handleUpdateQuantity} />}
      </div>
    </div>
  );
};

export default ProductsPage;
