import { useState } from "react";

export default function EditPost({ post, onEditPost }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: post.id,
      title,
      body,
    };

    onEditPost(updatedPost);

    // reset form
    setTitle("");
    setBody("");
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl mb-3">Edit Post</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <p>
          <input
            type="text"
            className="text-xl p-2 text-slate-900 w-full"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <textarea
            type="text"
            placeholder="Post Body"
            value={body}
            className="text-2xl p-2 text-slate-900 w-full"
            onChange={(e) => setBody(e.target.value)}
          />
        </p>

        <button type="submit" className="py-2 px-4 w-full bg-green-700">
          Save
        </button>
      </form>
    </div>
  );
}
