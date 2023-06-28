import './Expenses.css'
import Card from '../UI/Card';

import ExpenseItem from './ExpenseItem';

function Expenses(props){
    console.log(props)
   return( 
   <Card className='expenses'>
        {
        props.data.map((item, index)=>{
          return  <ExpenseItem
                key = {index} 
                title = {item.title}
                date = {item.date}
                price = {item.amount}
            />
        })
      }
    </Card>
   )
}

export default Expenses;