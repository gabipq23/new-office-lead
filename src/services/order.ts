import { api } from "../configs/api";
import type { CreateOrderData } from "../interfaces/order";

export class GetOfficePlanService {
  async createOrder(data: CreateOrderData) {
    const response = await api.post(`/pedidos-office`, data);
    return response.data;
  }
  async updateOrder(id: number, data: any): Promise<any> {
    const response = await api.put(`/pedidos-office/${id}`, data);
    return response.data;
  }

  async changeOrderStatus(id: number, data: { status: string }) {
    await api.patch(`/pedidos-office/${id}/status`, data);
  }

  async getOrderById(id: number | number) {
    const response = await api.get(`/pedidos-office/${id}`);
    return response.data;
  }
}
