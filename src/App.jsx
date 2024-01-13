export default function Toolbar() {
  function handlePlay(event) {
    event.stopPropagation();
    console.log("> Clicked on the play button.");
  }

  function handleStop(event) {
    event.stopPropagation();
    console.log("> Clicked on the stop button.");
  }

  function handleDiv() {
    console.log("> Clicked on the div.");
  }

  function handlePreventedEvent(event) {
    console.log("Event was happend!!");
    console.log(event);
  }
  return (
    <div
      className="border-2 border-red-500 m-4 p-4 text-center flex justify-center gap-2"
      onClick={handleDiv}
      onClickCapture={handlePreventedEvent}
    >
      <button
        className="py-2 px-5 bg-slate-900 text-white"
        onClick={handlePlay}
      >
        Play
      </button>
      <button
        className="py-2 px-5 bg-slate-900 text-white"
        onClick={handleStop}
      >
        Stop
      </button>
    </div>
  );
}

// export default function Toolbar() {
//   function handleSubmitForm(event) {
//     event.preventDefault();
//     console.log("> Submit the form");
//   }

//   function handleClickForm(event) {
//     event.stopPropagation();
//   }

//   function handleDiv() {
//     console.log("> Clicked on the div.");
//   }
//   return (
//     <div
//       className="border-2 border-red-500 m-4 p-4 text-center"
//       onClick={handleDiv}
//     >
//       <form
//         onSubmit={handleSubmitForm}
//         onClick={handleClickForm}
//         className="flex justify-center gap-2 bg-slate-400 p-5"
//       >
//         <input type="text" className="border-2 border-gray-700 py-2 px-1" />
//         <input
//           type="submit"
//           className="py-2 px-5 bg-slate-900 text-white cursor-pointer"
//           value="Click to submit form."
//         />
//       </form>
//     </div>
//   );
// }
