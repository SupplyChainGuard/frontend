import AddButton from "../shared/components/AddButton";
import Table from "../shared/components/Table";

function Providers() {
  return (
    <div>
      <header className="my-2 mx-6 flex justify-end">
        <AddButton title="Add Provider" />
      </header>
      <main className="flex justify-center mx-4">
        <Table />
      </main>
    </div>
  );
}

export default Providers;
