export async function fetchingComment(id) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return data.json();
  } catch (e) {
    console.log("> Server side error.");
  }
}
