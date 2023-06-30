interface Item {
  id: number;
  values: String[];
}

interface TableProps {
  headers: string[];
  data: Item[];
  action: () => void;
}

function Table(props: TableProps) {
  return (
    <table className="w-full bg-gray-200 mt-4">
      <thead>
        <tr className="bg-gray-300">
          {props.headers.map((header) => (
            <th key={header} className="p-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.id} className="bg-white">
            {item.values.map((value) => (
              <td key={"value-" + item.id + value} className="p-2 text-center">
                {value}
              </td>
            ))}
            <td className="p-2 text-center">
              <button
                key={"action-" + item.id}
                className="text-blue-500"
                onClick={props.action}
              >
                🛠️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
