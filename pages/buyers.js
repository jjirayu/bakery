import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Buyers.module.css';

export default function Buyers() {
  const [buyers, setBuyers] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  const correctPassword = 'Bakery45'; // Change this

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setShowContent(true);
      setError('');
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  useEffect(() => {
    if (!showContent) return;

    const fetchBuyers = async () => {
      try {
        const response = await fetch('/api/getBuyers');
        const data = await response.json();

        const updatedBuyers = data.map((buyer) => {
          const grandTotal = buyer.items.reduce((acc, item) => {
            return acc + (parseFloat(item.price.replace('฿', '')) * item.quantity);
          }, 0);
          return { ...buyer, grandTotal };
        });

        setBuyers(updatedBuyers);
      } catch (error) {
        console.error('Error fetching buyers:', error);
      }
    };

    fetchBuyers();
  }, [showContent]);

  return (
    <div>
      {!showContent ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Enter Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className={styles.input}
                placeholder="Enter password"
              />
              <button type="submit" className={styles.button}>Submit</button>
              {error && <p className={styles.error}>{error}</p>}
            </form>
          </div>
        </div>
      ) : (
        <>
          <h1>Buyer List</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Delivery Time</th>
                <th>Grand Total</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((buyer) => (
                <tr key={buyer._id}>
                  <td>
                    <Link href={`/buyers/${buyer._id}`}>
                      <div className={styles.link}>{buyer.name}</div>
                    </Link>
                  </td>
                  <td>{buyer.deliveryTime}</td>
                  <td>฿{buyer.grandTotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
