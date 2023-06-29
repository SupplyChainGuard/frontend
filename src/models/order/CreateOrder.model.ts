export default interface CreateOrder {
  providerId: number;
  productSKU: number;
  quantity: number;
  date: Date;
}