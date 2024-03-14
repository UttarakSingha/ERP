import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { Calendar, momentLocalizer } from 'react-big-calendar'; // Date picker library
import 'react-big-calendar/lib/css/react-big-calendar.css'; // CSS styles

// Import necessary libraries for data fetching (e.g., axios, fetch API)

const OrdersCalendar = () => {
  const [orders, setOrders] = useState([]); // Store fetched orders
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date

  // Fetch order data (mock or API call)
const fetchOrders = async () => {
    try {
        const response = await fetch('your-api-endpoint'); // Replace 'your-api-endpoint' with the actual API endpoint
        const data = await response.json();
        setOrders(data);
    } catch (error) {
        console.error('Error fetching orders:', error);
        // Handle errors gracefully (e.g., display error message)
    }
};

useEffect(() => {
    fetchOrders();
}, []); // Fetch orders on component mount

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const filterOrdersForDate = (date) => {
    // Filter orders based on selected date
    return orders.filter((order) => {
      const orderDate = new Date(order.expectedDeliveryDate); // Assuming expectedDeliveryDate is a Date object
      return (
        orderDate.getFullYear() === date.getFullYear() &&
        orderDate.getMonth() === date.getMonth() &&
        orderDate.getDate() === date.getDate()
      );
    });
  };

  return (
    <div>
      <h2>Orders Calendar</h2>
      <Calendar
        localizer={momentLocalizer} // Use moment.js for date formatting
        events={filterOrdersForDate(selectedDate) || []} // Filter orders based on selected date
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.status === 'Completed' ? 'green' : 'yellow', // Basic color coding
          },
        })}
        onSelectSlot={(date) => handleDateSelect(date)}
        defaultView="month"
      />
      {selectedDate && (
        <div>
          <h3>Orders for {selectedDate.toLocaleDateString()}</h3>
          <ul>
            {filterOrdersForDate(selectedDate).map((order) => (
              <li key={order.id}>
                <Link to={`/orders/${order.id}`}>
                  {order.customerName} - Order #{order.id} ({order.status})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrdersCalendar;
