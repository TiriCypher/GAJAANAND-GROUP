import {
  useEffect,
  useState,
} from "react";

import {
  useSelector,
} from "react-redux";

import UserTable from "../components/UserTable";

import {
  getUsers,
} from "../services/adminUser.service";

function Users() {
  const { accessToken } =
    useSelector(
      state => state.auth
    );

  const [users, setUsers] =
    useState([]);

  useEffect(() => {
    const fetchUsers =
      async () => {
        try {
          const response =
            await getUsers(
              accessToken
            );

          setUsers(
            response.data.data
          );
        } catch (err) {
          console.log(err);
        }
      };

    if (accessToken) {
      fetchUsers();
    }
  }, [accessToken]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Users
      </h1>

      <UserTable
        users={users}
      />
    </div>
  );
}

export default Users;