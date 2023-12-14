import ExpenseItem from "./components/ExpenseItem"
function App() {
  const expenses = [
    {
      id: 'e1',
      title: "Car Insurance",
      amount: 190.3,
      date: new Date(2023, 3, 30)
    },
    {
      id: 'e2',
      title: "New Tv",
      amount: 19,
      date: new Date(2023, 4, 3)
    },
    {
      id: 'e3',
      title: "Furniture",
      amount: 100.2,
      date: new Date(2023, 1, 14)
    },
    {
      id: 'e4',
      title: "Home Decor",
      amount: 2.5,
      date: new Date(2023, 7, 31)
    },
    {
      id: 'e5',
      title: "Bed",
      amount: 120.4,
      date: new Date(2023, 6, 23)
    },
  ]
  return (
    <div>
      <ExpenseItem 
      id={expenses[0].id}
      title={expenses[0].title} 
      amount={expenses[0].amount} 
      date = {expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
      id={expenses[1].id}
      title={expenses[1].title} 
      amount={expenses[1].amount} 
      date = {expenses[1].date}
      >
      </ExpenseItem>
      <ExpenseItem
      id={expenses[2].id}
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date = {expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
      id={expenses[3].id}
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date = {expenses[3].date}
      ></ExpenseItem>
    </div >
  );
}
export default App;
