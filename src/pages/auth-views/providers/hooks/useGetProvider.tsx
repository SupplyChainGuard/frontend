import { useEffect, useState } from "react";
import Provider from "../../../../models/provider/Provider.model";
import ProviderService from "../../../../services/Provider.service";

function useGetProvider() {
  //write fetchOrders function here
  const [Provider, setProvider] = useState<Provider | null>(null);
  const [loadingGetProvider, setLoadingGetProvider] = useState<boolean>(false);
  const [errorGetProvider, setErrorGetProvider] = useState<string | null>(null);

  const getProvider = async (id: number) => {
    setLoadingGetProvider(true);
    await ProviderService.getById(id)
      .then((response) => {
        setProvider(response.data);
      })
      .catch((error) => {
        setErrorGetProvider(error.message);
      });
    setLoadingGetProvider(false);
  };

  return { Provider, loadingGetProvider, errorGetProvider, getProvider };
}

export default useGetProvider;
