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
  updateProduct: async (data, productId) => {
    const res = await fetch(`/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    set((state) => ({
      products: state.products.map((product) => {
        product._id === productId ? { ...product, ...data } : product;
      }),
    }));
  },
}));
