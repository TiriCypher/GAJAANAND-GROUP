function UserTable({
  users,
}) {
  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden">

      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">
          Registered Users
        </h2>
      </div>
      <div className="hidden lg:block">
        <table className="w-full">

          <thead className="bg-[#08172F] text-white">
            <tr>
              <th className="p-4 text-left">
                User
              </th>

              <th className="text-left">
                Email
              </th>

              <th className="text-left">
                Role
              </th>

              <th className="text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-5">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                    h-10
                    w-10
                    rounded-full
                    bg-[#D4AF6A]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                    >
                      {user.firstName?.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {user.firstName}
                        {" "}
                        {user.lastName}
                      </h3>
                    </div>

                  </div>

                </td>

                <td>{user.email}</td>

                <td>
                  <span
                    className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  text-sm
                "
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  <span
                    className="
                  px-3
                  py-1
                  rounded-full
                  bg-green-100
                  text-green-600
                  text-sm
                "
                  >
                    Active
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>

      <div className="lg:hidden p-4 space-y-4">

        {users.map((user) => (
          <div
            key={user._id}
            className="
      rounded-2xl
      border
      p-4
      shadow-sm
      "
          >
            <div className="flex items-center gap-3">

              <div
                className="
          h-12
          w-12
          rounded-full
          bg-[#D4AF6A]
          flex
          items-center
          justify-center
          font-bold
          "
              >
                {user.firstName?.charAt(0)}
              </div>

              <div className="min-w-0">
                <h3 className="font-bold">
                  {user.firstName} {user.lastName}
                </h3>

                <p className="text-sm text-gray-500 break-all">
                  {user.email}
                </p>
              </div>

            </div>

            <div className="flex justify-between mt-4">

              <span
                className="
          px-3
          py-1
          rounded-full
          bg-blue-100
          text-blue-600
          text-sm
          "
              >
                {user.role}
              </span>

              <span
                className="
          px-3
          py-1
          rounded-full
          bg-green-100
          text-green-600
          text-sm
          "
              >
                Active
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default UserTable;