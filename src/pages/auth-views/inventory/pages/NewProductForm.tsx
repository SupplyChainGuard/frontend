import { useState } from "react";
import CreateShipment from "../../../../models/shipment/CreateShipment.model";
import useCreateShipment from "../hooks/useCreateShipment";
import Input from "../../../shared/components/Input";
import { useNavigate } from "react-router";

function NewShipment() {
  const navigate = useNavigate();
  const [shipment, setShipment] = useState<CreateShipment>(
    {} as CreateShipment
  );
  const { loadingCreateShipment, errorCreateShipment, createShipment } =
    useCreateShipment();

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createShipment({ ...shipment, date: new Date() });
    if (!errorCreateShipment) {
      alert("Shipment created successfully");
      navigate("/auth/shipments");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">New Shipment</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Input
            name="product"
            labelName="Product SKU"
            value={shipment.productSKU || ""}
            onChange={(e) => {
              setShipment({
                ...shipment,
                productSKU: +e.target.value,
              });
            }}
          />
          <Input
            name="quantity"
            labelName="Quantity"
            value={shipment.quantity || ""}
            onChange={(e) => {
              setShipment({
                ...shipment,
                quantity: +e.target.value,
              });
            }}
          />
        </div>
        <div className="flex mt-6">
          <button className="btn-secondary mr-4 ml-auto" type="submit"
                  onClick={() => navigate("/auth/shipments")}>
            Back
          </button>
          <button className="btn-primary mr-auto" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewShipment;
