import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props){
    const clickHandler = ()=>{
        console.log('delete functoin')
    }
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            
            <div className='expense-item__description'><h2>{props.title}</h2></div>
            <div className='expense-item__price'>${props.price}</div>
            <button onClick={clickHandler}>Delete</button>
        </Card>
    )
}

export default ExpenseItem;