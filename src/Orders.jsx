import React, { useContext,useEffect, useState } from "react";
import { AppContext } from "./App";
import axios from "axios";
export default function Orders() {
  const { user: currentUser } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const url = import.meta.env.VITE_API_URL + "/orders";
  const fetchOrders = async () => {
    const res = await axios.get(`${url}/get`,{
      headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
    }
  )
  setOrders(res.data.orders)
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const delivered = async (orderId) => {
    const res = await axios.patch(`${url}/update/${orderId}`);
    fetchOrders();
  };
  return (
    <div>
      Orders
      <ol>
        {orders &&
          orders.map((order) => (
            <li key={order._id}>
              {order._id}-{order.email}-{order.orderValue}-{order.orderStatus}-
              <button onClick={() => delivered(order._id)}>Delivered</button>
            </li>
          ))}
      </ol>
      <hr />
    </div>
  );
}