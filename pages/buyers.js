import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Buyers.module.css'; // Import your CSS module for styling

export default function Buyers() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    // Fetch buyers from the API
    const fetchBuyers = async () => {
      try {
        const response = await fetch('/api/getBuyers');
        const data = await response.json();
        
        // Calculate grand total for each buyer
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
  }, []);

  return (
    <div>
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
    </div>
  );
}
