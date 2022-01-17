import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { IProduct } from "../../types/types";
import { AppStateType } from "../reducers";
import { InferActionsTypes } from "../store";

const productsActions = {
    fetchProducts: () => ({
        type: "FETCH_PRODUCTS",
    } as const),
    fetchProductsSuccess: (product: IProduct[]) => ({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: product,
    } as const),
    fetchProductsError: (error: any) => ({
        type: "FETCH_PRODUCTS_ERROR",
        error,
    } as const),
}  

export const fetchProducts = () => async (dispatch: ThunkDispatch<AppStateType, {}, any>) => {
    dispatch(productsActions.fetchProducts())
    try {
        await axios.get("https://fakestoreapi.com/products").then(products => dispatch(productsActions.fetchProductsSuccess(products.data)))
    } catch (error) {
        dispatch(productsActions.fetchProductsError(error))
    }
}

export type ProductsActionsType = InferActionsTypes<typeof productsActions>

export default productsActions