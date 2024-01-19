export default function Panel({ title, children, isActive, onClickHandler }) {
  return (
    <section className="panel border-2 p-2">
      <h3 className="text-2xl">{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          className="bg-teal-400 text-black py-2 px-4 mt-2"
          onClick={onClickHandler}
        >
          Show
        </button>
      )}
    </section>
  );
}
