import Table from "../shared/components/Table";
import {useNavigate} from "react-router";
import useFetchProducts from "../inventory/hooks/useGetProducts";
import AddButton from "../shared/components/AddButton";

function Inventory() {
  const navigate = useNavigate();
  const { products } = useFetchProducts();

  const dataAction = () => {
    console.log("hola action");
  };

  const tableProps = {
    headers: ["SKU", "Name", "Stock", "Category", "Status", "Action"],
    data:
      products?.map((product) => ({
        id: product.id,
        values: [
          product.id.toString(),
          product.name.toString(),
          product.stock.toString(),
          product.category.toString(),
          product.status.toString(),
        ],
      })) || [],
    action: () => {},
  };

  return (
    <div>
      <header className="my-2 mx-6 flex justify-end">
        <AddButton action={()=>{navigate("/auth/inventory/new")}} title={"Add Product"}/>
      </header>
      <main className="flex justify-center mx-4">
        <Table headers={tableProps.headers} data={tableProps.data} action={dataAction} />
      </main>
    </div>
  );
}

export default Inventory;
