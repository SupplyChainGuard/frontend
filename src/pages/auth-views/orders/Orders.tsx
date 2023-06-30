import { useNavigate } from "react-router";
import AddButton from "../shared/components/AddButton";
import Table from "../shared/components/Table";
import useFetchOrders from "./hooks/useGetOrders";

function Orders() {
  const navigate = useNavigate();
  const { orders } = useFetchOrders();

  const tableProp = {
    headers: ["ID", "Provider ID", "Product SKU", "Amount", "Date", "Action"],
    //set data props with orders data but first convert it to Item type with map function and empty array if error
    data:
      orders?.map((order) => ({
        id: order.id,
        values: [
          order.id.toString(),
          order.providerId.toString(),
          order.productSKU.toString(),
          order.quantity.toString(),
          order.date.toString(),
        ],
      })) || [],
    action: () => {},
  };

  return (
     <>
        <div>
          <header className="my-2 mx-6 flex justify-end">
            <AddButton action={() => { navigate("/auth/orders/new") }} title="Add Order" />
          </header>
        <main className="flex justify-center mx-4">
          <Table
            headers={tableProp.headers}
            data={tableProp.data}
            action={tableProp.action}
          />
        </main>
        </div>
    </>
  );
}

export default Orders;
