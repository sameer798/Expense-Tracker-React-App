import Expenses from "./components/Expenses/Expenses";

function App(){
    let expenses = [
        {id:'e1',date: new Date(2020, 3,4), title: 'School Fee', amount: 2000},
        {id:'e2',date: new Date(2020, 3,3), title: 'WiFi recharge',amount: 200},
        {id:'e3',date: new Date(2020, 3,2), title: 'House Rent',amount: 20},
        {id:'e4',date: new Date(2020, 3,1), title: 'Shopping', amount: 2},

    ]
    return (
      <Expenses data= {expenses}></Expenses>
    )
}
export default App;