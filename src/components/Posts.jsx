export default function Posts({ posts, onDeletePost, onEditClick }) {
  return (
    <div>
      <h2 className="text-2xl mb-8">All Posts</h2>
      <div>
        <ul className="text-left flex flex-col gap-y-3">
          {posts.map((post) => {
            return (
              <li
                key={post.id}
                className="text-xl flex flex-col bg-slate-800 text-center p-3 gap-y-3"
              >
                <span>{post.id}</span>
                <span>{post.title}</span>
                <span>{post.body}</span>
                <div className="flex justify-between items-stretch">
                  <button
                    className="py-2 px-4 w-[48%] bg-red-700"
                    onClick={() => onDeletePost(post.id)}
                  >
                    ❌
                  </button>
                  <button
                    className="py-2 px-4 w-[48%] bg-green-700"
                    onClick={() => onEditClick(post)}
                  >
                    ✒️
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
