import CreateUser from "../models/user/CreateUser.model";
import UpdateUser from "../models/user/UpdatUser.model";
import getRandomId from "../utils/IdGenerator";
import http from "./http-common";

class AuthService {
  private BASE_URL = "/users";

  public get() {
    return http.get(this.BASE_URL);
  }

  public create(data: CreateUser) {
    return http.post(this.BASE_URL, { id: getRandomId, ...data });
  }

  public update(id: number, data: UpdateUser) {
    return http.put(`${this.BASE_URL}/${id}`, data);
  }

  public delete(id: number) {
    return http.delete(`${this.BASE_URL}/${id}`);
  }
}

export default new AuthService();