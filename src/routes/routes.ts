import { Products } from "../pages";

export const routes = [
    {
        path: '/products',
        Component: Products,
        name: "Products",
        parentElement: true
    },
    {
        path: '/products/:id',
        Component: "Product",
        name: "Product",
        parentElement: false
    },
    {
        path: '/create',
        Component: "CreateProduct",
        name: "Create Product",
        parentElement: true
    },
]