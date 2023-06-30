import { useEffect, useState } from "react";
import UpdateProvider from "../../../../models/provider/UpdateProvider.model";
import Input from "../../../shared/components/Input";
import { useNavigate, useParams } from "react-router";
import useGetProvider from "../hooks/useGetProvider";
import useUpdateProvider from "../hooks/useUpdateProvider";
import useDeleteProvider from "../hooks/useDeleteProvider";

function UpdateProviderForm() {
  const navigate = useNavigate();
  const [auxProvider, setAuxProvider] = useState<UpdateProvider>(
    {} as UpdateProvider
  );
  const { Provider, loadingGetProvider, errorGetProvider, getProvider } =
    useGetProvider();
  const { loadingUpdateProvider, errorUpdateProvider, updateProvider } = useUpdateProvider();
  const { loadingDeleteProvider, errorDeleteProvider, deleteProvider } = useDeleteProvider();
  const [clickUpdate, setClickUpdate] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    getProvider((id || 0) as number);
  }, []);

  useEffect(() => {
    setAuxProvider(Provider as UpdateProvider);
  }, [Provider]);

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (clickUpdate) {
      await updateProvider((id || 0) as number, auxProvider);
      if (!loadingUpdateProvider) {
        alert("Provider updated successfully");
        navigate("/auth/providers");
        setClickUpdate(false);
      }
    }
  };

  const handleClickUpdate = () => {
    setClickUpdate(true);
  }

  const handleDeleteProvider = async () => {
    await deleteProvider((id || 0) as number);
    if (!loadingDeleteProvider) {
      alert("Provider deleted successfully");
      navigate("/auth/providers");
    }
  };

  return (
    auxProvider && (
      <div className="p-4">
        <h1 className="text-3xl font-bold">Update Provider</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Input
              name="name"
              labelName="Name"
              value={auxProvider.name || ""}
              onChange={(e) => {
                setAuxProvider({
                  ...auxProvider,
                  name: e.target.value,
                });
              }}
            />
            <Input
              name="category"
              labelName="Category"
              value={auxProvider.category || ""}
              onChange={(e) => {
                setAuxProvider({
                  ...auxProvider,
                  category: e.target.value,
                });
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Input
              name="status"
              labelName="Status"
              value={auxProvider.status || ""}
              onChange={(e) => {
                setAuxProvider({
                  ...auxProvider,
                  status: +e.target.value,
                });
              }}
            />
          </div>
          <div className="flex mt-6">
            <button
              className="btn-secondary mr-4 ml-auto"
              onClick={() => navigate("/auth/providers")}
            >
              Back
            </button>
            <button
              className="btn-wargning mr-4"
              onClick={handleDeleteProvider}
            >
              Delete
            </button>
            <button className="btn-primary mr-auto" type="submit" onClick={handleClickUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default UpdateProviderForm;
