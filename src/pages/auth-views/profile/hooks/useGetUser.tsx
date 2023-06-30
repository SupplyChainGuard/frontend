import { useEffect, useState } from "react";
import User from "../../../../models/user/User.model";
import AuthService from "../../../../services/Auth.service";

function useFetchUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loadingGetUser, setLoadingGetUser] = useState<boolean>(false);
  const [errorGetUser, setErrorGetUser] = useState<string | null>(null);

  const fetchUser = async () => {
    setLoadingGetUser(true);
    await AuthService.get()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setErrorGetUser(error.message);
      });
    setLoadingGetUser(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loadingGetUser, errorGetUser, fetchUser };
}

export default useFetchUser;
