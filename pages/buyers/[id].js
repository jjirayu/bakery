// pages/buyers/[id].js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function BuyerDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [buyer, setBuyer] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch buyer data by ID
      const fetchBuyerDetails = async () => {
        try {
          const response = await fetch(`/api/getBuyers/${id}`);
          const data = await response.json();
          setBuyer(data);
        } catch (error) {
          console.error('Error fetching buyer details:', error);
        }
      };

      fetchBuyerDetails();
    }
  }, [id]);

  if (!buyer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{buyer.name}'s Purchased Items</h1>
      <ul>
        {buyer.items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity} - Price: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
