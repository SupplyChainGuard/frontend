import { useEffect, useState } from "react";
import Product from "../../../../models/product/Product.model";
import ProductService from "../../../../services/Product.service";

function useGetProducts() {
  //write fetchOrders function here
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loadingGetProducts, setLoadingGetProducts] = useState<boolean>(false);
  const [errorGetProducts, setErrorGetProducts] = useState<string | null>(null);

  const getProducts = async () => {
    setLoadingGetProducts(true);
    await ProductService.getAll()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setErrorGetProducts(error.message);
      });
      setLoadingGetProducts(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loadingGetProducts, errorGetProducts, getProducts };
}

export default useGetProducts;
