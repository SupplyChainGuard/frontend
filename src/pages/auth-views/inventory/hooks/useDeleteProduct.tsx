import { useState } from "react";
import ProductService from "../../../../services/Product.service";

function useDeleteProduct() {
  const [loadingDeleteProduct, setLoadingDeleteProduct] =
    useState<boolean>(false);
  const [errorDeleteProduct, setErrorDeleteProduct] = useState<string | null>(
    null
  );

  const deleteProduct = async (id: number) => {
    setLoadingDeleteProduct(true);
    await ProductService.delete(id)
      .then()
      .catch((error) => {
        setErrorDeleteProduct(error.message);
      });
    setLoadingDeleteProduct(false);
  };

  return { loadingDeleteProduct, errorDeleteProduct, deleteProduct };
}

export default useDeleteProduct;
