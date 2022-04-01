
import { CategoryType } from "../types/category";
import instance from "./instance";

export const list = () => {
    const url = `categorys`;
    return instance.get(url); 
}
export const remove = (id: number) => {
    const url = `categors/${id}`;
    return instance.delete(url); 
}
export const add = (category: CategoryType ) => {
    const url = `categorys`;
    return instance.post(url, category); 
}
export const update = (category: CategoryType) => {
    const url = `/categorys/${category._id}`;
    return instance.put(url, category);
}