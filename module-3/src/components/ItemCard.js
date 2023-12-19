import './ItemCard.css';
function ItemCard(props) {
    return (
        <div className='ItemCard'>{props.children}</div>
    );
}
export default ItemCard;