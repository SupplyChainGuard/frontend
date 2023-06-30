import { useState } from "react";
import ProviderService from "../../../../services/Provider.service";

function useDeleteProvider() {
  const [loadingDeleteProvider, setLoadingDeleteProvider] =
    useState<boolean>(false);
  const [errorDeleteProvider, setErrorDeleteProvider] = useState<string | null>(
    null
  );

  const deleteProvider = async (id: number) => {
    setLoadingDeleteProvider(true);
    await ProviderService.delete(id)
      .then()
      .catch((error) => {
        setErrorDeleteProvider(error.message);
      });
    setLoadingDeleteProvider(false);
  };

  return { loadingDeleteProvider, errorDeleteProvider, deleteProvider };
}

export default useDeleteProvider;
