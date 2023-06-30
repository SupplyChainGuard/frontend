import CreateOrder from "../models/order/CreateOrder.model";
import UpdateOrder from "../models/order/UpdateOrder.model";
import getRandomId from "../utils/IdGenerator";
import http from "./http-common";

class OrdersService {
  private BASE_URL = "/orders";

  public getAll() {
    return http.get(this.BASE_URL);
  }

  public getById(id: number) {
    return http.get(`${this.BASE_URL}/${id}`);
  }

  public create(data: CreateOrder) {
    return http.post(this.BASE_URL, { id: getRandomId(), ...data });
  }

  public update(id: number, data: UpdateOrder) {
    return http.put(`${this.BASE_URL}/${id}`, data);
  }

  public delete(id: number) {
    return http.delete(`${this.BASE_URL}/${id}`);
  }
}

export default new OrdersService();