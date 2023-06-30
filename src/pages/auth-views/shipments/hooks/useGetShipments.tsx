import { useEffect, useState } from "react";
import ShipmentService from "../../../../services/Shipment.service";
import Shipment from "../../../../models/shipment/Shipment.model";

function useFetchShipments() {
  //write fetchShipments function here
  const [shipments, setShipments] = useState<Shipment[] | null>(null);
  const [loadingGetShipments, setLoadingGetShipments] =
    useState<boolean>(false);
  const [errorGetShipments, setErrorGetShipments] = useState<string | null>(
    null
  );

  const fetchShipments = async () => {
    setLoadingGetShipments(true);
    await ShipmentService.getAll()
      .then((response) => {
        const shipments = response.data.map((shipment: { date: string }) => {
          return {
            ...shipment,
            date: new Date(+shipment.date).toLocaleString(),
          };
        });
        setShipments(shipments);
      })
      .catch((error) => {
        setErrorGetShipments(error.message);
      });
    setLoadingGetShipments(false);
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  return { shipments, loadingGetShipments, errorGetShipments, fetchShipments };
}

export default useFetchShipments;
