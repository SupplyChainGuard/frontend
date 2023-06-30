import { useEffect, useState } from "react";
import Product from "../../../../models/product/Product.model";
import ProductService from "../../../../services/Product.service";

function useGetProduct() {
  //write fetchOrders function here
  const [product, setProduct] = useState<Product | null>(null);
  const [loadingGetProduct, setLoadingGetProduct] = useState<boolean>(false);
  const [errorGetProduct, setErrorGetProduct] = useState<string | null>(null);

  const getProduct = async (id: number) => {
    setLoadingGetProduct(true);
    await ProductService.getById(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setErrorGetProduct(error.message);
      });
    setLoadingGetProduct(false);
  };

  return { product, loadingGetProduct, errorGetProduct, getProduct };
}

export default useGetProduct;
