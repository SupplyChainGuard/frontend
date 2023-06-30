import CreateProduct from "../models/product/CreateProduct.model";
import UpdateProduct from "../models/product/UpdateProduct.model";
import getRandomId from "../utils/IdGenerator";
import http from "./http-common";

class ProductsService {
  private BASE_URL = "/products";

  public getAll() {
    return http.get(this.BASE_URL);
  }

  public getById(sku: number) {
    return http.get(`${this.BASE_URL}/${sku}`);
  }

  public create(data: CreateProduct) {
    return http.post(this.BASE_URL, { sku: getRandomId(), ...data });
  }

  public update(sku: number, data: UpdateProduct) {
    return http.put(`${this.BASE_URL}/${sku}`, data);
  }

  public delete(sku: number) {
    return http.delete(`${this.BASE_URL}/${sku}`);
  }
}

export default new ProductsService();