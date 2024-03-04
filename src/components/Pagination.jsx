export default function Pagination({
  onNext,
  onPrev,
  onLast,
  onFirst,
  page,
  lastPage,
}) {
  return (
    <div className="w-full flex justify-between p-3 items-center">
      <button
        className="py-2 px-4 bg-emerald-700 text-white disabled:bg-emerald-950 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={page === 1}
        onClick={onFirst}
      >
        First
      </button>
      <button
        className="py-2 px-4 bg-emerald-700 text-white disabled:bg-emerald-950 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={page === 1}
        onClick={onPrev}
      >
        Prev
      </button>

      <div className="text-2xl bg-rose-800 w-10 h-10 flex justify-center items-center text-white text-center rounded-full">
        {page}
      </div>

      <button
        className="py-2 px-4 bg-emerald-700 text-white disabled:bg-emerald-950 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={page === lastPage}
        onClick={onNext}
      >
        Next
      </button>
      <button
        className="py-2 px-4 bg-emerald-700 text-white disabled:bg-emerald-950 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={page === lastPage}
        onClick={onLast}
      >
        Last
      </button>
    </div>
  );
}
