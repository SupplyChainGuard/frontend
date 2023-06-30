import { useState } from "react";
import CreateShipment from "../../../../models/shipment/CreateShipment.model";
import ShipmentService from "../../../../services/Shipment.service";

interface CreateShipmentProps {
  shipment?: CreateShipment;
}

function useCreateShipment() {
  const [loadingCreateShipment, setLoadingCreateShipment] = useState<boolean>(false);
  const [errorCreateShipment, setErrorCreateShipment] = useState<string | null>(null);

  const createShipment = async (shipment: CreateShipment) => {
    setLoadingCreateShipment(true);
    if (shipment) {
      await ShipmentService.create(shipment)
        .then()
        .catch((error) => {
          setErrorCreateShipment(error.message);
        });
    }
    setLoadingCreateShipment(false);
  };

  return { loadingCreateShipment, errorCreateShipment, createShipment };
}

export default useCreateShipment;
