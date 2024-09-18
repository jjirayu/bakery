import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './BuyerDetails.module.css'; // Import CSS module

export default function BuyerDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [buyer, setBuyer] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    if (id) {
      // Fetch buyer data by ID
      const fetchBuyerDetails = async () => {
        try {
          const response = await fetch(`/api/getBuyers/${id}`);

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          const data = await response.json();

          // Check if the data is in the expected format
          if (!data || !data.items) {
            throw new Error('Invalid data format');
          }

          setBuyer(data);
        } catch (error) {
          console.error('Error fetching buyer details:', error);
          setError(error.message); // Set error message
        } finally {
          setLoading(false); // Stop loading
        }
      };

      fetchBuyerDetails();
    }
  }, [id]);

  // Calculate total price for each item and grand total
  const calculateTotals = () => {
    if (!buyer || !buyer.items) return { grandTotal: 0, itemsWithTotal: [] };

    const itemsWithTotal = buyer.items.map(item => ({
      ...item,
      total: parseFloat(item.price.replace('฿', '')) * item.quantity
    }));

    const grandTotal = itemsWithTotal.reduce((acc, item) => acc + item.total, 0);

    return { itemsWithTotal, grandTotal };
  };

  const { itemsWithTotal, grandTotal } = calculateTotals();

  // Show loading state
  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Show error state
  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  // Show buyer's data
  if (!buyer) {
    return <div className={styles.noBuyer}>No buyer found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{buyer.name}'s Purchased Items</h1>
      <div className={styles.details}>
        <p><strong>Order Date:</strong> {new Date(buyer.orderDate).toLocaleString()}</p>
        <p><strong>Delivery Date:</strong> {new Date(buyer.deliveryDate).toLocaleDateString()}</p>
        <p><strong>Delivery Time:</strong> {buyer.deliveryTime}</p>
        <p><strong>Telephone Number:</strong> {buyer.phone}</p>
        <p><strong>Address:</strong> {buyer.address}</p>
      </div>
      <ul className={styles.itemsList}>
        {itemsWithTotal.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.name} - Quantity: {item.quantity} - Price: ฿{item.price} - 
            <strong> Total: ฿{item.total.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
      <div className={styles.grandTotal}>
        <strong>Grand Total: ฿{grandTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
}
