import "./App.css";
import { List, type ListRowProps } from "react-virtualized";

import { generateList } from "./utils";

// List Array containing data objects that will be rendered as a row
const list = generateList({ rowCount: 20 });

// Required to render each row in the list
// TODO: Calculate the height of each row
const renderRow = ({ index, key, style }: ListRowProps) => (
  <div key={key} style={style}>
    <div className="flex justify-between p-4 bg-neutral-900 rounded-md shadow-sm">
      <div>
        <p>{list[index].name}</p>
        <p>{list[index].text}</p>
      </div>
      <div>
        <img src={list[index].image} alt={list[index].name} height={48} width={48} />
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div>
      <List rowHeight={200} rowCount={list.length} rowRenderer={renderRow} width={800} height={600} overscanRowCount={3} />
    </div>
  );
}

export default App;
