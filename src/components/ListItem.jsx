export default function ListItem({ title, text, image, style }) {
  return (
    <div className="row" style={style}>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <div>{title}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}
