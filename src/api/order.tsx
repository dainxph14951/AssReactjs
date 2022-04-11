import { OrderType } from "../types/order";
import instance from "./instance";

export const listOrder = () => {
    const url = `orders`;
    return instance.get(url); 
}
export const removeOrder = (id: any) => {
    const url = `orders/${id}`;
    return instance.delete(url); 
}
export const addOrder= (order : OrderType) =>{
    const url = "/orders";
    return instance.post(url,order)
};
export const updateOrder = (order: OrderType) => {
    const url = `/orders/${order._id}`;
    return instance.put(url, order);
}