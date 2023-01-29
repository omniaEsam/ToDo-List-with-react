import React , {Component} from 'react' ;
import Additems from './component/addItem/Additems';
import Todoitems from './component/todoItem/Todoitems';

class App extends Component{
  state ={
    items :[
      {id: 1 , name:'omnia' , age: 23} ,
      {id: 2 , name:'hossam' , age: 18} ,
      {id: 3 , name:'eslam' , age: 28}
    ]
  }

  // deleteItems =(id) =>{
  //   let items = this.state.items ;
  //   let index = items.findIndex(item => item.id === id)
  //   items.splice(index , 1);
  //   this.setState({items});
  // }
//===================================
// -----------------another way--------------
  deleteItems =(id) =>{
     let items = this.state.items.filter(item=>{
    return item.id !== id
  })
  this.setState({items});
  }

   addItem =(item)=>{
    item.id = Math.random() ; 
     let items = this.state.items ;
     items.push(item);
     this.setState({items})
   }
  
  render(){
    return(
      <div className='App container'>
          <h1 className='text-center'>ToDo List</h1>
            <Todoitems items={this.state.items} deleteItems={this.deleteItems}/>
            <Additems addItem={this.addItem}/>
      </div>
    )
  }
}
export default App;
