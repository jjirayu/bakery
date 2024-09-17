import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Buyers() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    // Fetch buyers from the API
    const fetchBuyers = async () => {
      try {
        const response = await fetch('/api/getBuyers');
        const data = await response.json();
        setBuyers(data);
      } catch (error) {
        console.error('Error fetching buyers:', error);
      }
    };

    fetchBuyers();
  }, []);

  return (
    <div>
      <h1>Buyer List</h1>
      <ul>
        {buyers.map((buyer) => (
          <li key={buyer._id}>
            <Link href={`/buyers/${buyer._id}`}>
              {buyer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

