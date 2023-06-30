import getRandomId from "../utils/IdGenerator";
import CreateProvider from "../models/provider/CreateProvider.model";
import UpdateProvider from "../models/provider/UpdateProvider.model";
import http from "./http-common";

class ProvidersService {
  private BASE_URL = "/providers";

  public getAll() {
    return http.get(this.BASE_URL);
  }

  public getById(id: number) {
    return http.get(`${this.BASE_URL}/${id}`);
  }

  public create(data: CreateProvider) {
    return http.post(this.BASE_URL, { id: getRandomId(), ...data });
  }

  public update(id: number, data: UpdateProvider) {
    return http.put(`${this.BASE_URL}/${id}`, data);
  }

  public delete(id: number) {
    return http.delete(`${this.BASE_URL}/${id}`);
  }
}

export default new ProvidersService();