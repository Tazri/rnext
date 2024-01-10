/* eslint-disable react/jsx-key */
const items = [
  {
    name: "Mouse",
    price: "$22",
    id: 0,
  },
  {
    name: "Keyboard",
    price: "$12",
    id: 1,
  },
  {
    name: "Monitor",
    price: "$50",
    id: 2,
  },
];

export default function List() {
  let itemsTag = items.map(({ name, price, id }) => {
    return (
      <li key={id}>
        {name}({price})
      </li>
    );
  });
  return (
    <>
      <ul>{itemsTag}</ul>
    </>
  );
}
