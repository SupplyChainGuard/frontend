import { useState } from "react";
import CreateOrder from "../../../../models/order/CreateOrder.model";
import OrderService from "../../../../services/Orders.service";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface CreateOrderProps {
    order?: CreateOrder;
}

function useCreateOrder() {
    const [loadingCreateOrder, setLoadingCreateOrder]=useState<boolean>(false);
    const [errorCreateOrder, setErrorCreateOrder]=useState<string|null>(null);

    const createOrder=async (order:CreateOrder)=>{
        setLoadingCreateOrder(true);
        if(order){
            await  OrderService.create(order)
                .then()
                .catch((error)=> {
                    setErrorCreateOrder(error.message);
                });
        }
        setLoadingCreateOrder(false);
    };
    return {loadingCreateOrder,errorCreateOrder,createOrder};
}

export default useCreateOrder;
