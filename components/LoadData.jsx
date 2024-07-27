async function fetchData() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  return "Data from promise";
}

export default async function LoadData() {
  const data = await fetchData();
  return <h1>{data}</h1>;
}
