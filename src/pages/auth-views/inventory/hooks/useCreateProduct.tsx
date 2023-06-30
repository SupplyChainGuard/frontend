import CreateProduct from "../../../../models/product/CreateProduct.model";
import {useState} from "react";
import ProductService from "../../../../services/Product.service";

interface CreateProductProps {
    product?:CreateProduct;
}

function useCreateProduct(){
    const [loadingCreateProduct, setLoadingCreateProduct]=useState<boolean>(false)
    const [errorCreateProduct, setErrorCreateProduct]=useState<string|null>(null)

    const createProduct = async (product:CreateProduct)=>{
        setLoadingCreateProduct(true);
        if(product){
            await ProductService.create(product)
                .then()
                .catch((error)=>{
                    setErrorCreateProduct(error.message);
                });
        }
        setLoadingCreateProduct(false);
    };
    return {loadingCreateProduct,errorCreateProduct,createProduct};
}

export default useCreateProduct;
