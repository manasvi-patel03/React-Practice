import './ExpenseItem.css';
function ExpenseItem(props) {
    // const month =props.date.toLocaleString('en-US',{month:'long'})
    // const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    // const year = props.date.getFullYear()
    return (
        <div className="expense-item">
            <div className="common-css">{props.date.toDateString()}</div>
            <div className="title" >{props.title}</div>
            <div className=" price">${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;