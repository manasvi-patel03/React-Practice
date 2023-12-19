import ItemCard from './ItemCard';
import './ExpenseItem.css';
function ExpenseItem(props) {
    const month =props.date.toLocaleString('en-US',{month:'long'})
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const year = props.date.getFullYear()
    return (
        <ItemCard>
            <div className="common-css">
                <div className="month">{month}</div>
                <div className="year">{year}</div>
                <div className="day">{day}</div>
            </div>
            <h2 className="title" >{props.title}</h2>
            <div className=" price">${props.amount}</div>
        </ItemCard>
    );
}

export default ExpenseItem;