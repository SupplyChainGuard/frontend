import axios from "axios";
import getRandomId from "../utils/IdGenerator";
import CreateProvider from "../models/provider/CreateProvider.model";
import UpdateProvider from "../models/provider/UpdateProvider.model";

class ProvidersService {
  private BASE_URL = "/providers";

  public getAll() {
    return axios.get(this.BASE_URL);
  }

  public getById(id: number) {
    return axios.get(`${this.BASE_URL}/${id}`);
  }

  public create(data: CreateProvider) {
    return axios.post(this.BASE_URL, { id: getRandomId, ...data });
  }

  public update(id: number, data: UpdateProvider) {
    return axios.post(`${this.BASE_URL}/${id}}`, data);
  }

  public delete(id: number) {
    return axios.post(`${this.BASE_URL}/${id}}`);
  }
}

export default new ProvidersService();