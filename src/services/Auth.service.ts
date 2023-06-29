import axios from "axios";
import CreateUser from "../models/user/CreateUser.model";
import UpdateUser from "../models/user/UpdatUser.model";
import getRandomId from "../utils/IdGenerator";

class AuthService {
  private BASE_URL = "/users";

  public get() {
    return axios.get(this.BASE_URL);
  }

  public create(data: CreateUser) {
    return axios.post(this.BASE_URL, { id: getRandomId, ...data });
  }

  public update(id: number, data: UpdateUser) {
    return axios.put(`${this.BASE_URL}/${id}`, data);
  }

  public delete(id: number) {
    return axios.delete(`${this.BASE_URL}/${id}`);
  }
}

export default new AuthService();