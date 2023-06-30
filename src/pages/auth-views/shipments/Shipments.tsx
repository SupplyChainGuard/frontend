import { useNavigate } from "react-router";
import AddButton from "../shared/components/AddButton";
import Table from "../shared/components/Table";
import useFetchShipments from "./hooks/useGetShipments";

function Shipments() {
  const navigate = useNavigate();
  const { shipments } = useFetchShipments();

  const tableProps = {
    headers: ["ID", "Product (SKU)", "Quantity", "Date", "Action"],
    data: shipments?.map((shipment) => ({
      id: shipment.id,
      values: [
        shipment.id.toString(),
        shipment.productSKU.toString(),
        shipment.quantity.toString(),
        shipment.date.toString(),
      ],
    })) || [],
    action: () => {},
  }

  return (
    <div>
      <header className="my-2 mx-6 flex justify-end">
        <AddButton action={() => { navigate("/auth/shipments/new") }} title="Add Shipment" />
      </header>
      <main className="flex justify-center mx-4">
        <Table headers={tableProps.headers} data={tableProps.data} action={tableProps.action} />
      </main>
    </div>
  );
}

export default Shipments;