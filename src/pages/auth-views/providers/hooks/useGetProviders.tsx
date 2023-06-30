import { useEffect, useState } from "react";
import ProviderService from "../../../../services/Provider.service";
import Provider from "../../../../models/provider/Provider.model";

function useFetchProviders() {
    //write fetchProviders function here
    const [providers, setProviders] = useState<Provider[] | null>(null);
    const [loadingGetProviders, setLoadingGetProviders] = 
      useState<boolean>(false);
    const [errorGetProviders, setErrorGetProviders] = useState<string | null>(null);
  
    const fetchProviders = async () => {
      setLoadingGetProviders(true);
      await ProviderService.getAll()
        .then((response) => {
          const providers = response.data;
          setProviders(providers);
        })
        .catch((error) => {
          setErrorGetProviders(error.message);
        });
      setLoadingGetProviders(false);
    };
  
    useEffect(() => {
      fetchProviders();
    }, []);
  
    return { providers, loadingGetProviders, errorGetProviders, fetchProviders };
  }
  
  export default useFetchProviders;