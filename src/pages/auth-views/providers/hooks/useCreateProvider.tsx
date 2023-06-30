import { useState } from "react";
import CreateProvider from "../../../../models/provider/CreateProvider.model";
import ProviderService from "../../../../services/Provider.service";

interface CreateProviderProps {
  Provider?: CreateProvider;
}

function useCreateProvider() {
  const [loadingCreateProvider, setLoadingCreateProvider] = useState<boolean>(false);
  const [errorCreateProvider, setErrorCreateProvider] = useState<string | null>(null);

  const createProvider = async (Provider: CreateProvider) => {
    setLoadingCreateProvider(true);
    if (Provider) {
      await ProviderService.create(Provider)
        .then()
        .catch((error) => {
          setErrorCreateProvider(error.message);
        });
    }
    setLoadingCreateProvider(false);
  };

  return { loadingCreateProvider, errorCreateProvider, createProvider };
}

export default useCreateProvider;
