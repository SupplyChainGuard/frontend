import AddButton from "../shared/components/AddButton";
import Table from "../shared/components/Table";

function Providers() {
  const headers = ["ID", "Name", "Category", "Status", "Action"];
  const data = [
    { id: 1, values: ["1", "Item 1", "Category A", "Active"] },
    { id: 2, values: ["2", "Item 2", "Category B", "Inactive"] },
    { id: 3, values: ["3", "Item 3", "Category C", "Active"] },
  ]
  const dataAction = () => {
    console.log("hola action");
  }

  return (
    <div>
      <header className="my-2 mx-6 flex justify-end">
        <AddButton title="Add Provider" />
      </header>
      <main className="flex justify-center mx-4">
        <Table headers={headers} data={data} action={dataAction} />
      </main>
    </div>
  );
}

export default Providers;
