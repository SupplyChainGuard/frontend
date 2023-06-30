import getRandomId from "../utils/IdGenerator";
import CreateShipment from "../models/shipment/CreateShipment.model";
import UpdateShipment from "../models/shipment/UpdateShipment.model";
import http from "./http-common";

class ShipmentService {
  private BASE_URL = "/shipments";

  public getAll() {
    return http.get(this.BASE_URL);
  }

  public getById(id: number) {
    return http.get(`${this.BASE_URL}/${id}`);
  }

  public create(data: CreateShipment) {
    return http.post(this.BASE_URL, { id: getRandomId(), ...data });
  }

  public update(id: number, data: UpdateShipment) {
    return http.put(`${this.BASE_URL}/${id}`, data);
  }

  public delete(id: number) {
    return http.delete(`${this.BASE_URL}/${id}`);
  }
}

export default new ShipmentService();