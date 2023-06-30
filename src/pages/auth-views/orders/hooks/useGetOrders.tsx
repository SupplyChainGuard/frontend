import { useEffect, useState } from "react";
import Order from "../../../../models/order/Order.model";
import OrdersService from "../../../../services/Orders.service";

function useFetchOrders() {
  //write fetchOrders function here
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loadingGetOrders, setLoadingGetOrders] = useState<boolean>(false);
  const [errorGetOrders, setErrorGetOrders] = useState<string | null>(null);

  const fetchOrders = async () => {
    setLoadingGetOrders(true);
    await OrdersService.getAll()
      .then((response) => {
        const orders = response.data.map((order: { date: string }) => {
          return {
            ...order,
            date: new Date(+order.date).toLocaleString(),
          };
        });
        setOrders(orders);
      })
      .catch((error) => {
        setErrorGetOrders(error.message);
      });
    setLoadingGetOrders(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders, loadingGetOrders, errorGetOrders, fetchOrders };
}

export default useFetchOrders;
