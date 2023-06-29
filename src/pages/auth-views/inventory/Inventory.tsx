function Inventory() {
  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 pl-96">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Bienvenido</h2>
            <p className="text-muted-foreground">
              Lista de Productos Disponibles
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <table className="h-2/3 w-2/4">
            <thead>
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Product 1</td>
                <td className="border px-4 py-2">100</td>
                <td className="border px-4 py-2">50</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">Product 2</td>
                <td className="border px-4 py-2">200</td>
                <td className="border px-4 py-2">100</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Product 3</td>
                <td className="border px-4 py-2">300</td>
                <td className="border px-4 py-2">150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Inventory;
