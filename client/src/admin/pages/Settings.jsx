function Settings() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-white rounded-3xl p-8 shadow">

        <div className="mb-6">
          <label className="block mb-2">
            Company Name
          </label>

          <input
            className="w-full border rounded-xl p-3"
            defaultValue="GAJAANAND GROUP"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Email
          </label>

          <input
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Phone
          </label>

          <input
            className="w-full border rounded-xl p-3"
          />
        </div>

        <button
          className="
          bg-[#071B3B]
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;