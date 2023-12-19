import ExpenseDetails from "./components/ExpenseDetails";
import './components/main.css'
function App() {
  const items = [
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
    <div className="main">
      <ExpenseDetails expenses={items}></ExpenseDetails>
    </div>
  );
}
export default App;
