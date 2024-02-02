export const getNextId = (data) => {
  let maxId = data.reduce(
    (prevId, current) => (prevId > current.id ? prevId : current.id),
    data.length ? data[0].id : 0
  );
  return maxId + 1;
};
