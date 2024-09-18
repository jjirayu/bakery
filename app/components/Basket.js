import React, { useState } from 'react';
import styles from './Basket.module.css';

const Basket = ({ basket, updateQuantity }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    deliveryDate: '', // New state for delivery date
    deliveryTime: ''  // New state for delivery time slot
  });

  // Calculate total value for each item and total basket amount
  const basketWithTotals = basket.map(item => ({
    ...item,
    totalValue: item.quantity * parseFloat(item.price.replace('฿', ''))
  }));

  const totalAmount = basketWithTotals.reduce((acc, item) => acc + item.totalValue, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get current date and time for order submission
    const currentDateTime = new Date().toLocaleString();

    // Combine delivery date and time into a single field
    const deliveryDateTime = `${formData.deliveryDate} ${formData.deliveryTime}`;

    const dataToSave = {
      ...formData,
      orderDate: currentDateTime, // Add the current date and time to the order
      deliveryDateTime,           // Save combined delivery date and time
      items: basketWithTotals.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        totalValue: item.totalValue.toFixed(2)
      }))
    };

    try {
      const response = await fetch('/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSave)
      });

      const result = await response.json();
      console.log('Response from server:', result);

      if (response.ok) {
        console.log('Data saved successfully:', dataToSave);
      } else {
        console.error('Failed to save data:', result);
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }

    setShowModal(false);
    setFormData({
      name: '',
      phone: '',
      address: '',
      email: '',
      deliveryDate: '', // Reset delivery date
      deliveryTime: ''  // Reset delivery time
    });
  };

  return (
    <div className={styles.basketContainer}>
      <h2>Basket</h2>
      <ul className={styles.basketList}>
        {basketWithTotals.map((item, index) => (
          <li key={index} className={styles.basketItem}>
            <div className={styles.basketItemInfo}>
              {item.name} จำนวน: {item.quantity} ชิ้น x ราคา {item.price} = ฿{item.totalValue.toFixed(2)}
            </div>
            <div className={styles.quantityButtons}>
              <button onClick={() => updateQuantity(item.name, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.name, 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        Total Amount: ฿{totalAmount.toFixed(2)}
      </div>
      <button className={styles.buyButton} onClick={() => setShowModal(true)}>
        ซื้อเลย
      </button>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>กรอกรายละเอียดสำหรับการจัดส่ง</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Telephone number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="deliveryDate">Delivery Date:</label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="deliveryTime">Delivery Time:</label>
                <select
                  id="deliveryTime"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="8:00-12:00">8:00-12:00</option>
                  <option value="12:00-16:00">12:00-16:00</option>
                  <option value="16:00-20:00">16:00-20:00</option>
                </select>
              </div>
              <div className={styles.modalButtons}>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;

