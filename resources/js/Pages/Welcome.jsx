import ExpenseForm from "@/Components/ExpenseForm";
import ExpenseList from "@/Components/ExpenseList";

export default function Welcome() {
    return (
        <>
           <div className="flex flex-col gap-3 h-screen bg-slate-400">
            <ExpenseForm />
            <ExpenseList />
           </div>
        </>
    );
}
