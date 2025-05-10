import React, { useState } from 'react';
import styles from './Basket.module.css';

const Basket = ({ basket, updateQuantity }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    deliveryDate: '',
    deliveryTime: '',
  });

  const basketWithTotals = basket.map(item => ({
    ...item,
    totalValue: item.quantity * parseFloat(item.price.replace('฿', ''))
  }));

  const totalAmount = basketWithTotals.reduce((acc, item) => acc + item.totalValue, 0);
  const shippingCost = totalAmount < 100 ? 20 : 0;
  const grandTotal = totalAmount + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDateTime = new Date().toLocaleString();
    const deliveryDateTime = `${formData.deliveryDate} ${formData.deliveryTime}`;

    const dataToSave = {
      ...formData,
      orderDate: currentDateTime,
      deliveryDateTime,
      shippingCost: shippingCost.toFixed(2),
      grandTotal: grandTotal.toFixed(2),
      items: basketWithTotals.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        totalValue: item.totalValue.toFixed(2),
        barcode: item.barcode
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
      deliveryDate: '',
      deliveryTime: ''
    });
  };

  return (
    <div className={styles.basketContainer}>
      <h1>ตะกร้า</h1>
      <h3>ฟรีค่าขนส่งเมื่อยอดซื้อมากกว่า 100 บาท </h3>
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
  รวมค่าสินค้า: ฿{totalAmount.toFixed(2)}
</div>
<div className={styles.total}>
  ค่าขนส่ง: {shippingCost === 0 ? 'ฟรี' : `฿${shippingCost.toFixed(2)}`}
</div>
<div className={styles.total}>
  ยอดรวม: ฿{grandTotal.toFixed(2)}
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
                <label htmlFor="name">ชื่อ:</label>
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
                <label htmlFor="phone">เบอร์โทร:</label>
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
                <label htmlFor="address">ที่อยู่:</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">อีเมล์:</label>
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
                <label htmlFor="deliveryDate">วันที่จัดส่ง:</label>
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
                <label htmlFor="deliveryTime">เวลาจัดส่ง:</label>
                <select
                  id="deliveryTime"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">เวลาจัดส่ง</option>
                  <option value="16:00-18:00">16:00-18:00</option>
                </select>
              </div>
              <div className={styles.modalButtons}>
                <button type="submit" className={styles.submitButton}>
                  ซื้อเลย
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowModal(false)}
                >
                  ยกเลิก
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

