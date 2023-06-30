import { useEffect, useState } from "react";
import User from "../../../models/user/User.model";
import Input from "../../shared/components/Input";
import useUpdateUser from "./hooks/useUpdateUser";
import UpdateUser from "../../../models/user/UpdatUser.model";
import useFetchUser from "./hooks/useGetUser";
import { Link } from "react-router-dom";

function Profile() {
  const { user, loadingGetUser, errorGetUser, fetchUser } = useFetchUser();
  const [auxUser, setAuxUser] = useState<User>({} as User);
  const { loadingUpdateUser, errorUpdateUser, updateUser } = useUpdateUser({
    user: {} as UpdateUser,
  });

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateUser(auxUser);
    if (!loadingUpdateUser) {
      fetchUser();
    }
  };

  useEffect(() => {
    setAuxUser(Object.assign({}, user as User));
  }, [user]);

  return (
    <div className="p-4">
      <div>
        <Link to={"/auth"} className="btn-secondary">
          Back
        </Link>
      </div>
      {loadingGetUser || !auxUser ? (
        <p>Loading...</p>
      ) : (
        <div className="my-4">
          <div>
            <h1 className="text-4xl font-bold">{user?.firstName || ""}</h1>
            <h2 className="text-xl underline my-3">Information</h2>
          </div>
          <form onSubmit={handleOnSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="firstName"
                labelName="First name"
                value={auxUser.firstName || ""}
                onChange={(e) => {
                  setAuxUser({
                    ...auxUser,
                    firstName: e.target.value,
                  });
                }}
              />
              <Input
                name="lastName"
                labelName="Last name"
                value={auxUser.lastName || ""}
                onChange={(e) => {
                  setAuxUser({
                    ...auxUser,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input
                name="email"
                labelName="Email"
                value={auxUser.email || ""}
                onChange={(e) => {
                  setAuxUser({
                    ...auxUser,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="grid justify-items-center mt-4">
              <button className="btn-primary">Update</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
