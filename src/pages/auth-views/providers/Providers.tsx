import AddButton from "../shared/components/AddButton";
import Table from "../shared/components/Table";

function Providers() {
  return (
    <div>
      <header>
        <AddButton title="Add Provider" />
      </header>
      <main>
        <Table />
      </main>
    </div>
  );
}

export default Providers;
