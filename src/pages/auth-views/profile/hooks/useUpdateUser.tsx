import { useEffect, useState } from "react";
import AuthService from "../../../../services/Auth.service";
import UpdateUser from "../../../../models/user/UpdatUser.model";

interface UpdateUserProps {
  user?: UpdateUser;
}

function useUpdateUser(props: UpdateUserProps) {
  const [loadingUpdateUser, setLoadingUpdateUser] = useState<boolean>(false);
  const [errorUpdateUser, setErrorUpdateUser] = useState<string | null>(null);

  const updateUser = async (user: UpdateUser) => {
    setLoadingUpdateUser(true);
    if (user) {
      await AuthService.update(user as UpdateUser)
        .then()
        .catch((error) => {
          setErrorUpdateUser(error.message);
        });
    }
    setLoadingUpdateUser(false);
  };

  useEffect(() => {
    if (props!.user && props!.user.firstName && props!.user.lastName) {
      updateUser(props!.user);
    }
  }, []);

  return { loadingUpdateUser, errorUpdateUser, updateUser };
}

export default useUpdateUser;
