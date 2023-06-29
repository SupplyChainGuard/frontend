import axios from "axios";
import getRandomId from "../utils/IdGenerator";
import CreateShipment from "../models/shipment/CreateShipment.model";
import UpdateShipment from "../models/shipment/UpdateShipment.model";

class ShipmentService {
  private BASE_URL = "/shipments";

  public getAll() {
    return axios.get(this.BASE_URL);
  }

  public getById(id: number) {
    return axios.get(`${this.BASE_URL}/${id}`);
  }

  public create(data: CreateShipment) {
    return axios.post(this.BASE_URL, { id: getRandomId, ...data });
  }

  public update(id: number, data: UpdateShipment) {
    return axios.post(`${this.BASE_URL}/${id}}`, data);
  }

  public delete(id: number) {
    return axios.post(`${this.BASE_URL}/${id}}`);
  }
}

export default new ShipmentService();