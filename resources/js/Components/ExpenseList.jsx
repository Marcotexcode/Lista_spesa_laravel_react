export default function ExpenseList() {
    return (
      <>
        <div className="mx-auto w-full sm:w-3/4 md:w-1/2 p-6 rounded-lg bg-slate-700 shadow-lg">
            <table className="w-full border-collapse border border-gray-400">
                <thead className="bg-gray-700 text-white">
                    <tr>
                        <th className="border p-3 text-left">Nome</th>
                        <th className="border p-3 text-left">Stato</th>
                        <th className="border p-3 text-left">Data</th>
                        <th className="border p-3 text-left">Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                    <td className="border p-3">Nome</td>
                    <td className="border p-3">Importo</td>
                    <td className="border p-3">Data</td>
                    <td className="border p-3 flex justify-center gap-2">
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 btn"
                        >
                            Modifica
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 btn"
                        >
                            Elimina
                        </button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </>
    );
  }
  