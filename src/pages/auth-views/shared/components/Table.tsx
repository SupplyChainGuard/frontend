function Table() {
  const data = [
    { id: 1, name: "Item 1", category: "Category A", status: "Active" },
    { id: 2, name: "Item 2", category: "Category B", status: "Inactive" },
    { id: 3, name: "Item 3", category: "Category C", status: "Active" },
  ];

  return (
    <table className="w-full bg-gray-200">
      <thead>
        <tr className="bg-gray-400">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Category</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="bg-white">
            <td className="p-2 text-center">{item.id}</td>
            <td className="p-2 text-center">{item.name}</td>
            <td className="p-2 text-center">{item.category}</td>
            <td className="p-2 text-center">{item.status}</td>
            <td className="p-2 text-center">
              <span className="text-blue-500">🛠️</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
