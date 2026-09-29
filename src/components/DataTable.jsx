export default function DataTable({ title, columns, rows ,total}) {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 p-3 mt-8">
      <p className="font-bold text-black text-xs mb-3">{title}</p>

      <table className="w-full text-xs">
        <thead>
          <tr className="text-gray-400 border-b border-gray-200">
            {columns.map((col, i) => (
              <th key={col} className={i === 0 ? "text-left py-2" : "text-right py-2"}>
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-gray-100">
              {row.map((cell, i) => (
                <td key={i} className={i === 0 ? "text-left text-base py-3" : "text-right text-base py-3"}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {total && (
        <div className="mt-2 flex justify-between rounded-lg bg-gray-200 px-5 py-4 text-xs font-bold text-black">
          <span>{total.label}</span>
          <span>{total.value}</span>
        </div>
      )}
    </div>
  );
}