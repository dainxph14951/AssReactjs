
import { CategoryType } from "../types/category";
import instance from "./instance";

export const listCate = () => {
    const url = `categorys`;
    return instance.get(url); 
}
export const removeCate = (id: number) => {
    const url = `category/${id}`;
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