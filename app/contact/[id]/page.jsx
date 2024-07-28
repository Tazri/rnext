import data from "@/data/data.json";

export function generateStaticParams() {
  return data.map((user) => {
    return {
      id: user.id + "",
    };
  });
}

export default function SingleContactPage({ params }) {
  const { id } = params;

  const user = data.find((u) => u.id + "" === id);

  return (
    <div className="border mx-auto container p-4">
      {user ? (
        <h1 className="text-sky-600 text-4xl">
          {user?.name} (<span className="text-orange-600">{user?.number}</span>)
        </h1>
      ) : (
        <h1 className="text-rose-700 text-4xl">User not found</h1>
      )}
    </div>
  );
}
