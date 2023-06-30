import { useState } from "react";
import CreateOrder from "../../../../models/order/CreateOrder.model";
import Input from "../../../shared/components/Input";
import { useNavigate } from "react-router";
import useCreateOrder from "../hooks/useCreateOrders";



function NewOrders() {
    const navigate = useNavigate();
    const [order, setOrder] = useState<CreateOrder>(
        {} as CreateOrder
    );
    const {loadingCreateOrder, errorCreateOrder, createOrder} =
        useCreateOrder();

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createOrder({...order, date: new Date()});
        if (!errorCreateOrder) {
            alert("Order created successfully");
            navigate("/auth/orders");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">New Order</h1>
            <form onSubmit={handleOnSubmit}>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <Input
                        name="provider"
                        labelName="Provider"
                        value={order.providerId || ""}
                        onChange={(e) => {
                            setOrder({
                                ...order,
                                providerId: +e.target.value,
                            });
                        }}
                    />
                    <Input
                        name="product"
                        labelName="Product SKU"
                        value={order.productSKU || ""}
                        onChange={(e) => {
                            setOrder({
                                ...order,
                                productSKU: +e.target.value,
                            });
                        }}
                    />
                    <Input
                        name="quantity"
                        labelName="Quantity"
                        value={order.quantity || ""}
                        onChange={(e) => {
                            setOrder({
                                ...order,
                                quantity: +e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="flex mt-6">
                    <button className="btn-secondary mr-4 ml-auto" type="submit"
                            onClick={() => navigate("/auth/orders")}>
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

export default NewOrders;
