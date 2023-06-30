import { useEffect, useState } from "react";
import UpdateProduct from "../../../../models/product/UpdateProduct.model";
import Input from "../../../shared/components/Input";
import { useNavigate, useParams } from "react-router";
import useGetProduct from "../hooks/useGetProduct";
import useUpdateProduct from "../hooks/useUpdateProduct";
import useDeleteProduct from "../hooks/useDeleteProduct";

function UpdateProductForm() {
  const navigate = useNavigate();
  const [auxProduct, setAuxProduct] = useState<UpdateProduct>(
    {} as UpdateProduct
  );
  const { product, loadingGetProduct, errorGetProduct, getProduct } =
    useGetProduct();
  const { loadingUpdateProduct, errorUpdateProduct, updateProduct } = useUpdateProduct();
  const { loadingDeleteProduct, errorDeleteProduct, deleteProduct } = useDeleteProduct();
  const [clickUpdate, setClickUpdate] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    getProduct((id || 0) as number);
  }, []);

  useEffect(() => {
    setAuxProduct(product as UpdateProduct);
  }, [product]);

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (clickUpdate) {
      await updateProduct((id || 0) as number, auxProduct);
      if (!loadingUpdateProduct) {
        alert("Product updated successfully");
        navigate("/auth/inventory");
        setClickUpdate(false);
      }
    }
  };

  const handleClickUpdate = () => {
    setClickUpdate(true);
  }

  const handleDeleteProduct = async () => {
    await deleteProduct((id || 0) as number);
    if (!loadingDeleteProduct) {
      alert("Product deleted successfully");
      navigate("/auth/inventory");
    }
  };

  return (
    auxProduct && (
      <div className="p-4">
        <h1 className="text-3xl font-bold">Update Product</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Input
              name="name"
              labelName="Name"
              value={auxProduct.name || ""}
              onChange={(e) => {
                setAuxProduct({
                  ...auxProduct,
                  name: e.target.value,
                });
              }}
            />
            <Input
              name="category"
              labelName="Category"
              value={auxProduct.category || ""}
              onChange={(e) => {
                setAuxProduct({
                  ...auxProduct,
                  category: e.target.value,
                });
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Input
              name="stock"
              labelName="Stock"
              value={auxProduct.stock || ""}
              onChange={(e) => {
                setAuxProduct({
                  ...auxProduct,
                  stock: +e.target.value,
                });
              }}
            />
            <Input
              name="status"
              labelName="Status"
              value={auxProduct.status || ""}
              onChange={(e) => {
                setAuxProduct({
                  ...auxProduct,
                  status: +e.target.value,
                });
              }}
            />
          </div>
          <div className="flex mt-6">
            <button
              className="btn-secondary mr-4 ml-auto"
              onClick={() => navigate("/auth/inventory")}
            >
              Back
            </button>
            <button
              className="btn-wargning mr-4"
              onClick={handleDeleteProduct}
            >
              Delete
            </button>
            <button className="btn-primary mr-auto" type="submit" onClick={handleClickUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default UpdateProductForm;
