import axios from "axios";
import CreateOrder from "../models/order/CreateOrder.model";
import UpdateOrder from "../models/order/UpdateOrder.model";
import getRandomId from "../utils/IdGenerator";

class OrdersService {
  private BASE_URL = "/orders";

  public getAll() {
    return axios.get(this.BASE_URL);
  }

  public getById(id: number) {
    return axios.get(`${this.BASE_URL}/${id}`);
  }

  public create(data: CreateOrder) {
    return axios.post(this.BASE_URL, { id: getRandomId, ...data });
  }

  public update(id: number, data: UpdateOrder) {
    return axios.post(`${this.BASE_URL}/${id}}`, data);
  }

  public delete(id: number) {
    return axios.post(`${this.BASE_URL}/${id}}`);
  }
}

export default new OrdersService();