import { useNavigate } from "react-router";
import AddButton from "../shared/components/AddButton";
import Table from "../shared/components/Table";
import useFetchProviders from "./hooks/useGetProviders";

function Providers() {
  const navigate = useNavigate();
  const { providers } = useFetchProviders();

  const tableProps = {
    headers: ["ID", "Name", "Category", "Status", "Action"],
    data: providers?.map((provider) => ({
      id: provider.id,
      values: [
        provider.id.toString(),
        provider.name.toString(),
        provider.category.toString(),
        provider.status.toString(),
      ],
    })) || [],
    action: (id: number) => {
      navigate(`/auth/providers/${id}/update`);
    },
  }

  return (
    <div>
      <header className="my-2 mx-6 flex justify-end">
      <AddButton action={() => { navigate("/auth/providers/new") }} title="Add Provider" />
      </header>
      <main className="flex justify-center mx-4">
        <Table headers={tableProps.headers} data={tableProps.data} action={tableProps.action} />
      </main>
    </div>

  );
}

export default Providers;
