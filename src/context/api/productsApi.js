import { api } from "./api";

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        // Get request
        getProducts: build.query({
            query: (params) => ({
                url: '/products',
                params,
            }),
            providesTags: ["Product"],
        }),
        // Search product
        searchProducts: build.query({
            query: (search) => ({
                url: `/products`,
                params: { search },
            }),
            invalidatesTags: ["Product"],
        }),
        //Single product
        singleProduct: build.query({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            invalidatesTags: ["Product"]
        }),
        //Delete product
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"]
        }),
        //Create product
        createProduct: build.mutation({
            query: (body)=>({
                url: `/products`,
                method:"POST",
                body
            }),
            invalidatesTags:["Product"]
        })
    }),
});

export const {
    useGetProductsQuery,
    useSearchProductsQuery,
    useSingleProductQuery,
    useDeleteProductMutation,
    useCreateProductMutation,
} = productApi;
