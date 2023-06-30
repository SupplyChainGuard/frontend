import { useState } from "react";
import UpdateProduct from "../../../../models/product/UpdateProduct.model";
import ProductService from "../../../../services/Product.service";

function useUpdateProduct() {
  const [loadingUpdateProduct, setLoadingUpdateProduct] = useState(false);
  const [errorUpdateProduct, setErrorUpdateProduct] = useState<string | null>(null);

  const updateProduct = async (id: number, product: UpdateProduct) => {
    setLoadingUpdateProduct(true);
    if (product) {
      await ProductService.update(id, product)
        .then()
        .catch((error) => {
          setErrorUpdateProduct(error.message);
        });
    }
    setLoadingUpdateProduct(false);
  }

  return { loadingUpdateProduct, errorUpdateProduct, updateProduct };
}

export default useUpdateProduct;