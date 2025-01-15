
export default function ExpenseForm() {
    return (
        <>
            <div className="mx-auto w-1/2 mt-11 p-6 rounded-lg bg-slate-700 shadow-lg">
                <form action="" className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-white text-center">Aggiungi Spesa</h2>
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex-1">
                            <label htmlFor="titolo" className="block text-sm font-medium text-gray-300 mb-1">
                            Titolo
                            </label>
                            <input
                            id="titolo"
                            className="text-input"
                            type="text"
                            placeholder="Titolo..."
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="importo" className="block text-sm font-medium text-gray-300 mb-1">
                            Importo
                            </label>
                            <input
                            id="importo"
                            className="text-input"
                            type="text"
                            placeholder="Importo..."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                    <label htmlFor="data" className="block text-sm font-medium text-gray-300 mb-1">
                        Data
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                        id="data"
                        className="text-input w-full md:w-1/2"
                        type="date"
                        />
                    </div>
                    </div>
                    <button
                    className="bg-slate-500 hover:bg-slate-400 btn"
                    type="submit"
                    >
                    Invia
                    </button>
                </form>
            </div>
        </>
    );
}
