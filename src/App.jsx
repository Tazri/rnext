import { loremIpsum } from "lorem-ipsum";
import { AutoSizer, List } from "react-virtualized";
import "./App.css";
import ListItem from "./components/ListItem";

export default function App() {
  const rowCount = 5000;
  // const listHeight = 500;
  const rowHeight = 50;
  // const rowWidth = 700;

  const list = Array(rowCount)
    .fill()
    .map((val, idex) => {
      return {
        id: idex,
        title: "Ans Anonymo",
        image: "http://via.placeholder.com/40",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
      };
    });

  function renderRow({ index, key, style }) {
    const { title, image, text } = list[index];

    return (
      <ListItem
        key={key}
        title={title}
        image={image}
        text={text}
        style={style}
      />
    );
  }
  return (
    <div className="App">
      <div className="list">
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={rowHeight}
              rowCount={500}
              rowRenderer={renderRow}
              overscanColumnCount={5}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
/**
 * 
 * {list.map((item) => {
          const { id, title, image, text } = item;
          return <ListItem key={id} title={title} image={image} text={text} />;
        })}
 */
