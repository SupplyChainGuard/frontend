export default interface Order {
  id: number;
  providerId: number;
  productSKU: number;
  quantity: number;
  date: Date;
}