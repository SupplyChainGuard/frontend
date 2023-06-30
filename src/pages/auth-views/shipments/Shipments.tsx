import AddButton from "../shared/components/AddButton";
import Table from "../shared/components/Table";
import useFetchShipments from "./hooks/useGetShipments";

function Shipments() {

  const { shipments } = useFetchShipments();

  const dataAction = () => {
    console.log("hola action");
  };

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
  }

  return (
    <div>
      <header className="my-2 mx-6 flex justify-end">
        <AddButton action={dataAction} title="Add Shipment" />
      </header>
      <main className="flex justify-center mx-4">
        <Table headers={tableProps.headers} data={tableProps.data} action={dataAction} />
      </main>
    </div>
  );
}

export default Shipments;