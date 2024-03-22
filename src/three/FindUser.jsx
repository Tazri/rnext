import { useDebugValue, useState, useTransition } from "react";
import { users } from "./fakeuser";

export default function FindUser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);

  const [isLoading, updateState] = useTransition();

  useDebugValue(`searchterm is ${searchTerm}`);

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);

    updateState(() => {
      setFiltered(
        users.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        })
      );
    });
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl my-2">User Finder</h1>
      <div className="text-md my-2">
        {isLoading ? (
          <h1 className="text-3xl">Loading...</h1>
        ) : (
          <p>
            {users.length !== filtered.length
              ? `${filtered.length} matches`
              : null}
          </p>
        )}
      </div>
      <input
        onChange={handleChange}
        value={searchTerm}
        type="text"
        placeholder="Type a name"
        className="border border-slate-200 p-1 rounded-sm"
      />

      {isLoading ? (
        <div className="text-3xl text-center my-5 text-rose-700">
          Loading...
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center">
          {filtered.length > 0 ? (
            filtered.map((user) => {
              return (
                <div
                  className="flex flex-col items-center justify-center m-2 p-2 border rounded-md"
                  key={crypto.randomUUID()}
                >
                  <div className="rounded my-2">
                    <img
                      src={user.avater}
                      alt={`Avatar image of ${user.name}`}
                      className="w-32 h-32 rounded-full"
                    />
                  </div>
                  <p className="text-3xl text-center">
                    <strong>{user.name}</strong>
                  </p>
                </div>
              );
            })
          ) : (
            <h1 className="text-2x text-rose-800 my-4 text-center">
              No Matches Found
            </h1>
          )}
        </div>
      )}
    </div>
  );
}
