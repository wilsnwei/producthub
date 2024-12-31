import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: "false", messsage: "All fields required" };
    }
    const res = await fetch("/products/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data] }));
    return { success: "true", message: "Product created successfully" };
  },
  fetchProducts: async () => {
    const res = await fetch("/products");
    const data = await res.json();
    set({ products: data });
  },
  deleteProduct: async (productId) => {
    await fetch(`/products/${productId}`, {
      method: "DELETE",
    });
    set((state) => ({
      products: state.products.filter((product) => product._id !== productId),
    }));
  },
  updateProduct: async (data) => {
    const res = await fetch(`/products/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(await res.json());
    set((state) => ({
      products: state.products.map((product) => {
        return product._id === data._id ? { ...data } : product;
      }),
    }));
  },
}));
