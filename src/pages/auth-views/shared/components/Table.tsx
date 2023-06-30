import getRandomId from "../../../../utils/IdGenerator";

interface Item {
  id: number;
  values: String[];
}

interface TableProps {
  headers: string[];
  data: Item[];
  action: (id: number) => void;
}

function Table(props: TableProps) {
  return (
    <table className="w-full bg-gray-200 mt-4">
      <thead>
        <tr className="bg-gray-300">
          {props.headers.map((header) => (
            <th key={getRandomId()} className="p-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={getRandomId()} className="bg-white">
            {item.values.map((value) => (
              <td key={getRandomId()} className="p-2 text-center">
                {value}
              </td>
            ))}
            <td className="p-2 text-center">
              <button
                key={getRandomId()}
                className="text-blue-500"
                onClick={() => props.action(item.id)}
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
