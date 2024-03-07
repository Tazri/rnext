import fetchPosts from "../api/fetchPosts";

const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

const resource = fetchPosts(url);

export default function PostsSelector({ onSelectPost }) {
  const posts = resource.read();

  return (
    <div className="flex flex-col">
      <select
        className="py-2 px-4 cursor-pointer bg-green-900 text-white text-lg mx-auto"
        onChange={onSelectPost}
      >
        <option value="">Select Post</option>
        {posts.map((post) => {
          return (
            <option key={post.id} value={post.id}>
              {post.title}
            </option>
          );
        })}
      </select>
      <hr className="bg-slate-400 h-0.5 mt-3" />
    </div>
  );
}
