"use client";

type Props = {
  values: any[][];
};

export default function SheetTable({ values }: Props) {
  if (!values.length) {
    return <p>No data available</p>;
  }

  const headers = values[0];
  const rows = values.slice(1);

  return (
    <div className="overflow-auto border rounded-lg">
      <table className="min-w-full border-collapse">
        <thead className="bg-grey-100">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="border px-3 py-2 text-left text-sm font-medium"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-gray-50">
              {headers.map((_, cIdx) => (
                <td
                  key={cIdx}
                  className="border px-3 py-2 text-sm"
                >
                  {row[cIdx] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
