import { api } from "../configs/api";
import type { OrderData } from "../interfaces/order";

export class GetOfficePlanService {
  async createOrder(data: OrderData) {
    const response = await api.post(`/pedidos-office`, data);
    return response.data;
  }
}
