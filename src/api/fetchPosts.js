import wrapPromise from "../utils/wrapPromise";

export default function fetchPosts(url) {
  // it's promise
  const response = fetch(url).then((res) => res.json());

  // return response promise
  return wrapPromise(response);
}
