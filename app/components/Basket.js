import React from 'react';
import Papa from 'papaparse';
import styles from './Basket.module.css';

const Basket = ({ basket }) => {
  const calculateTotal = () => {
    return basket.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  const exportToCSV = () => {
    // BOM for UTF-8
    const bom = '\uFEFF';
    const csv = Papa.unparse({
      fields: ['Name', 'Price', 'Quantity'],
      data: basket.map(item => [item.name, item.price, item.quantity]),
    });

    // Combine BOM and CSV content
    const csvContent = bom + csv;
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'basket.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.basketContainer}>
      <h2 className={styles.title}>Basket</h2>
      {basket.length === 0 ? (
        <p className={styles.emptyMessage}>The basket is empty.</p>
      ) : (
        <div>
          <ul className={styles.basketList}>
            {basket.map((item, index) => (
              <li key={index} className={styles.basketItem}>
                <span>{item.name}</span> - {item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <strong>Total Amount: ${calculateTotal()}</strong>
          </div>
          <button onClick={exportToCSV} className={styles.exportButton}>
            Export to CSV
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
