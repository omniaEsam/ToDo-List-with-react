import React from 'react' ;
import './Todoitems.css' ;

const Todoitems = (props) =>{
    const {items , deleteItems} = props ;
    let length = items.length ;
    const listItems = length ? (
        items.map(item=>{
            return(
               <div key={item.id}>
                 <span className='name'>{item.name}</span>
                 <span className='age'>{item.age}</span>
                 <span className='action icon' onClick={()=> deleteItems(item.id)}>&times;</span>
              </div>
            )
      })
    ): (
        <p> There is no item to show</p>
    )
    return(
        <div className='List-item'>
            <div>
            <span className='name title'>Name</span>
            <span className='age title'>Age</span>
            <span className='action title'>Action</span>
            </div>
        {listItems}
        </div>

    )
}

export default Todoitems ;