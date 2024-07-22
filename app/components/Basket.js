'use client';

import React from 'react';
import styles from './Basket.module.css';

const Basket = ({ basket }) => {
  // Calculate total value for each item and total basket amount
  const basketWithTotals = basket.map(item => ({
    ...item,
    totalValue: item.quantity * parseFloat(item.price.replace('฿', ''))
  }));

  const totalAmount = basketWithTotals.reduce((acc, item) => acc + item.totalValue, 0);

  return (
    <div className={styles.basketContainer}>
      <h2>Basket</h2>
      <ul className={styles.basketList}>
        {basketWithTotals.map((item, index) => (
          <li key={index} className={styles.basketItem}>
            <div className={styles.basketItemInfo}>
              {item.name} จำนวน: {item.quantity} ชิ้น x ราคา {item.price} = ฿{item.totalValue.toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        Total Amount: ฿{totalAmount.toFixed(2)}
      </div>
      <button className={styles.exportButton} onClick={() => exportToCSV(basketWithTotals)}>
        Export to CSV
      </button>
    </div>
  );
};

// Function to export basket data to CSV
const exportToCSV = (basket) => {
  const header = ['Name', 'Quantity', 'Price', 'Total'];
  const rows = basket.map(item => [
    item.name,
    item.quantity,
    item.price,
    `฿${item.totalValue.toFixed(2)}`
  ]);

  const csvContent = [
    header.join(','),
    ...rows.map(e => e.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'basket.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default Basket;
