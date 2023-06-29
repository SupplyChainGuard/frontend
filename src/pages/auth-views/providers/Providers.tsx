import AddButton from "../shared/components/AddButton";
import TableProvider from "../shared/components/TableProvider";

function Providers() {
  return (
    <div>
      <header>
        <AddButton title="Add Provider" />
      </header>
      <main>
        <TableProvider />
      </main>
    </div>
  );
}

export default Providers;
