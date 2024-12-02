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
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, selectedType, products]);

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

    const updatedProducts = products.map(p =>
      p.name === product.name ? { ...p, quantity: 1 } : p
    );
    setProducts(updatedProducts);
  };

  const handleFilterType = (type) => {
    setSelectedType(type);
  };

  // Updated function to remove items with 0 quantity
  const handleUpdateQuantity = (productName, delta) => {
    const updatedBasket = basket
      .map(item =>
        item.name === productName
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter(item => item.quantity > 0); // Remove items with 0 quantity

    setBasket(updatedBasket);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>รายการสินค้า</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
  <div className={styles.topNav}>
    <button
      className={activeTab === 'about' ? styles.activeTab : styles.topTab}
      onClick={() => setActiveTab('about')}
    >
      About Us
    </button>
  </div>
  <Image
    src="/images/logo.png"
    alt="Logo"
    width={150}
    height={150}
    className={styles.logo}
    quality={100}
  />
  <div>
    <h1 className={styles.title}>รายการสินค้า</h1>
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
              <button className={styles.filterButton} onClick={() => handleFilterType('')}>All</button>
              <button className={styles.filterButton} onClick={() => handleFilterType('บรรจุภัณฑ์')}>บรรจุภัณฑ์</button>
              <button className={styles.filterButton} onClick={() => handleFilterType('ของสด')}>ของสด</button>
              <button className={styles.filterButton} onClick={() => handleFilterType('เครื่องครัว')}>เครื่องครัว</button>
              <button className={styles.filterButton} onClick={() => handleFilterType('วัตถุดิบ')}>วัตถุดิบ</button>
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
        {activeTab === 'about' && (
          <div className={styles.aboutUs}>
            <h2>About Us</h2>
            <p>This is the About Us section. You can add more information here about your company.</p>
          </div>
        )}
        {activeTab === 'basket' && (
          <Basket basket={basket} updateQuantity={handleUpdateQuantity} />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;