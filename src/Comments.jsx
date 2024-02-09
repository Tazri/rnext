import { useEffect, useState } from "react";
import { fetchingComment } from "./fetchingComments";

export default function Comments() {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function startFetchingData() {
      const data = await fetchingComment("1");

      if (!ignore) {
        setComments(data);
        console.log(data);
      }
    }

    startFetchingData();

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <ul className="p-4 bg-white flex flex-col gap-y-2">
      {comments ? (
        comments.map((comment) => {
          return (
            <li key={crypto.randomUUID()} className="text-lg bg-rose-600 p-1">
              {comment.body}
            </li>
          );
        })
      ) : (
        <li className="text-4xl">Comments Not Found</li>
      )}
    </ul>
  );
}
