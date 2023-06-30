import { useState } from "react";
import CreateProvider from "../../../../models/provider/CreateProvider.model";
import useCreateProvider from "../hooks/useCreateProvider";
import Input from "../../../shared/components/Input";
import { useNavigate } from "react-router";

function NewProvider() {
  const navigate = useNavigate();
  const [Provider, setProvider] = useState<CreateProvider>(
    {} as CreateProvider
  );
  const { loadingCreateProvider, errorCreateProvider, createProvider } =
    useCreateProvider();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProvider({ ...Provider});
    if (!errorCreateProvider) {
      alert("Provider created successfully");
      navigate("/auth/providers");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">New Provider</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="grid grid-cols-2 gap-4 mt-6">
            <Input
            name="name"
            labelName="Name"
            value={Provider.name || ""}
            onChange={(e) => {
              setProvider({
                ...Provider,
                name: e.target.value.toString(),
                /* status: +e.target.value, */
              });
            }}
          />
          <Input
            name="category"
            labelName="Category"
            value={Provider.category || ""}
            onChange={(e) => {
              setProvider({
                ...Provider,
                category: e.target.value.toString(),
                /* status: +e.target.value, */
              });
            }}
          />
          <Input
            name="status"
            labelName="Status"
            value={Provider.status || ""}
            onChange={(e) => {
              setProvider({
                ...Provider,
                status: +e.target.value,
              });
            }}
          />
        </div>
        <div className="flex mt-6">
          <button className="btn-secondary mr-4 ml-auto" type="submit" onClick={() => navigate("/auth/Providers")}>
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

export default NewProvider;
