import { useState } from "react";
import UpdateProvider from "../../../../models/provider/UpdateProvider.model";
import ProviderService from "../../../../services/Provider.service";

function useUpdateProvider() {
  const [loadingUpdateProvider, setLoadingUpdateProvider] = useState(false);
  const [errorUpdateProvider, setErrorUpdateProvider] = useState<string | null>(null);

  const updateProvider = async (id: number, Provider: UpdateProvider) => {
    setLoadingUpdateProvider(true);
    if (Provider) {
      await ProviderService.update(id, Provider)
        .then()
        .catch((error) => {
          setErrorUpdateProvider(error.message);
        });
    }
    setLoadingUpdateProvider(false);
  }

  return { loadingUpdateProvider, errorUpdateProvider, updateProvider };
}

export default useUpdateProvider;