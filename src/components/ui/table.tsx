interface TableColumn {
  header: string;
  accessor: string;
  className?: string;
}

interface TableProps {
  columns: TableColumn[];
  data: Record<string, string | number>[];
  className?: string;
  caption?: string;
}

/**
 * Accessible Table Component
 * Supports semantic HTML and proper ARIA attributes
 */
export default function Table({ columns, data, className = "", caption }: TableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        {caption && (
          <caption
            className="text-left mb-4 font-semibold text-lg"
            style={{ color: "var(--color-navy-900)" }}
          >
            {caption}
          </caption>
        )}
        <thead>
          <tr style={{ borderBottom: "2px solid var(--color-gray-300)" }}>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className={`px-4 py-3 text-left font-semibold ${column.className || ""}`}
                style={{ color: "var(--color-navy-900)" }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors"
              style={{ borderBottom: "1px solid var(--color-gray-200)" }}
            >
              {columns.map((column) => (
                <td key={column.accessor} className={`px-4 py-3 ${column.className || ""}`}>
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
