import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:80"
      : "https://supply-guard-chain-backend.azurewebsites.net",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
});

export default instance;