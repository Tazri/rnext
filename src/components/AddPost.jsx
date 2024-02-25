import { useState } from "react";

export default function AddPost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
    };

    onAddPost(newPost);

    // reset form
    setTitle("");
    setBody("");
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl my-4">Add New Post</h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-2">
        <p>
          <input
            type="text"
            placeholder="Post Title"
            className="w-full text-xl p-2 text-slate-900"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <textarea
            type="text"
            placeholder="Post Body"
            className="w-full text-xl p-2 text-slate-900"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </p>

        <button className="w-full p-2 bg-green-700" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
