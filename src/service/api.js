import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// Category APIs
export const getCategories = () => api.get('/categories');
export const getCategoryById = (id: string) => api.get(`/categories/${id}`);
export const createCategory = (data: any) => api.post('/categories', data);
export const updateCategory = (id: string, data: any) => api.put(`/categories/${id}`, data);
export const deleteCategory = (id: string) => api.delete(`/categories/${id}`);
export const getProductsByCategory = (id: string) => api.get(`/categories/${id}/products`);
export const addProductToCategory = (id: string, data: any) => api.post(`/categories/${id}/products`, data);
export const updateProductToCategory = (categoryId: string, productId: string, data: any) => api.put(`/categories/${categoryId}/products/${productId}`, data);
export const removeProductFromCategory = (categoryId: string, productId: string) => api.delete(`/categories/${categoryId}/products/${productId}`);

// Product APIs
export const getProducts = () => api.get('/product');
export const getProductById = (id: string) => api.get(`/product/${id}`);
export const createProduct = (data: any) => api.post('/product', data);
export const updateProduct = (id: string, data: any) => api.put(`/products/${id}`, data);
export const deleteProduct = (id: string) => api.delete(`/products/${id}`);
export const getSubcategoriesByProduct = (id: string) => api.get(`/products/${id}/subcategories`);
export const addSubcategoryToProduct = (id: string, data: any) => api.post(`/products/${id}/subcategories`, data);
export const removeSubcategoryFromProduct = (productId: string, subcategoryId: string) => api.delete(`/products/${productId}/subcategories/${subcategoryId}`);

// Raw Material APIs
export const getRawMaterials = () => api.get('/rawmaterials');
export const getRawMaterialById = (id: string) => api.get(`/rawmaterials/${id}`);
export const createRawMaterial = (data: any) => api.post('/rawmaterials', data);
export const updateRawMaterial = (id: string, data: any) => api.put(`/rawmaterials/${id}`, data);
export const deleteRawMaterial = (id: string) => api.delete(`/rawmaterials/${id}`);

// Subcategory APIs
export const getSubcategories = () => api.get('/subcategories');
export const getSubcategoryById = (id: string) => api.get(`/subcategories/${id}`);
export const createSubcategory = (data: any) => api.post('/subcategories', data);
export const updateSubcategory = (id: string, data: any) => api.put(`/subcategories/${id}`, data);
export const deleteSubcategory = (id: string) => api.delete(`/subcategories/${id}`);
export const getMaterialsInSubcategory = (id: string) => api.get(`/subcategories/${id}/rawmaterials`);
export const addMaterialToSubcategory = (id: string, data: any) => api.post(`/subcategories/${id}/rawmaterials`, data);
export const removeMaterialFromSubcategory = (subcategoryId: string, materialId: string) => api.delete(`/subcategories/${subcategoryId}/rawmaterials/${materialId}`);

// Formulation APIs
export const getFormulations = () => api.get('/formulations');
export const getFormulationsByProductId = (productId: string) => api.get(`/formulations/product/${productId}`);
export const updateFormulations = (productId: string, data: any) => api.put(`/formulations/product/${productId}`, data);