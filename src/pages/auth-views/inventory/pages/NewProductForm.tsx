import React, {useState} from "react";
import CreateProduct from "../../../../models/product/CreateProduct.model";
import {useNavigate} from "react-router";
import Input from "../../../shared/components/Input";
import useCreateProduct from "../../inventory/hooks/useCreateProducts";

function NewProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState<CreateProduct>(
        {} as CreateProduct
    );
    const {loadingCreateProduct, errorCreateProduct, createProduct} =
        useCreateProduct();

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await createProduct({...product});
        if (!errorCreateProduct) {
            alert("Product created successfully");
            navigate("/auth/inventory");
        }
    };


    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">New Product</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <Input
                        name="name"
                        labelName="Product Name"
                        value={product.name || ""}
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                name: e.target.value,
                            });
                        }}
                    />
                    <Input
                        name="category"
                        labelName="Category"
                        value={product.category || ""}
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                category: e.target.value,
                            });
                        }}
                    />
                    <Input
                        name="stock"
                        labelName="Stock"
                        value={product.stock || ""}
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                stock: +e.target.value,
                            });
                        }}
                    />
                    <Input
                        name="status"
                        labelName="Status"
                        value={product.status || ""}
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                status: +e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="flex mt-6">
                    <button className="btn-secondary mr-4 ml-auto" type="submit"
                            onClick={() => navigate("/auth/inventory")}>
                        Back
                    </button>
                    <button className="btn-primary mr-auto" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}
    export default NewProduct;
