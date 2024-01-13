export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button
        onClick={(event) => {
          event.stopPropagation();
          alert("Playing!");
        }}
      >
        Play Movie
      </button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}
