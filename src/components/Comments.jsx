import use from "../hooks/use";
import { fetchData } from "../utils/data";

function getUrl(id) {
  return `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
}

export default function Comments({ postId }) {
  const comments = use(fetchData(getUrl(postId)));
  return (
    <div className="flex flex-col">
      <ul className="py-2 px-4 cursor-pointer bg-green-900 text-white text-lg mx-auto flex flex-col gap-y-4">
        {comments &&
          comments.map((comment) => {
            return (
              <li className="p-2 text-white bg-rose-800" key={comment.id}>
                value={comment.id}
                {comment.name}
              </li>
            );
          })}
      </ul>
      <hr className="bg-slate-400 h-0.5 mt-3" />
    </div>
  );
}
