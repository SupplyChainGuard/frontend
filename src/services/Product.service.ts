import axios from "axios";
import CreateProduct from "../models/product/CreateProduct.model";
import UpdateProduct from "../models/product/UpdateProduct.model";
import getRandomId from "../utils/IdGenerator";

class ProductsService {
  private BASE_URL = "/products";

  public getAll() {
    return axios.get(this.BASE_URL);
  }

  public getById(sku: number) {
    return axios.get(`${this.BASE_URL}/${sku}`);
  }

  public create(data: CreateProduct) {
    return axios.post(this.BASE_URL, { sku: getRandomId, ...data });
  }

  public update(sku: number, data: UpdateProduct) {
    return axios.post(`${this.BASE_URL}/${sku}}`, data);
  }

  public delete(sku: number) {
    return axios.post(`${this.BASE_URL}/${sku}}`);
  }
}

export default new ProductsService();