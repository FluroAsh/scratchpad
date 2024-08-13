import "./App.css";
import { AutoSizer, CellMeasurer, CellMeasurerCache, List, type ListRowProps } from "react-virtualized";

import { generateList } from "./utils";
import { useRef } from "react";

const list = generateList({ rowCount: 20 });

const renderRow = ({ index, key, style, parent }: ListRowProps, cache: React.MutableRefObject<CellMeasurerCache>) => {
  const author = list[index];

  return (
    <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
      <div style={style} className={[index === 0 ? "pt-4" : "", index !== list.length ? "pb-4" : ""].join(" ")}>
        <div
          className={"flex justify-between gap-4 p-4 rounded-md shadow-lg ".concat(
            index % 2 === 0 || index === list.length - 1 ? "bg-neutral-700" : "bg-neutral-900"
          )}
        >
          <img src={author.image} className="h-12 rounded-full flex-start min-w-12" alt={author.name} />

          <div>
            <p className="font-bold font-lg">{author.name}</p>
            <p>{author.text}</p>
          </div>
        </div>
      </div>
    </CellMeasurer>
  );
};

function App() {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  return (
    <div className="w-[800px] max-w-full min-h-screen">
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            rowHeight={cache.current.rowHeight}
            rowCount={list.length}
            rowRenderer={(props) => renderRow(props, cache)}
            deferredMeasurementCache={cache.current}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default App;
