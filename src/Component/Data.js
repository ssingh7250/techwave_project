import React, { useState, useEffect } from 'react'

import './Data.css'
const Data = () => {
 
  const[userTransction,setuserTransction]=useState([])


  const[totalamount,settotalamount]=useState(1);
  const[total,settotal]=useState([]);

  console.log("total",total);

  const handlesumbit=(e)=>{
    e.preventDefault();
  }


const addmore=()=>{
const adddata={name:'',qunatity:'',rate:'',tamount:''};
setuserTransction([...userTransction,adddata])



}

const handledeleteitem=(item,index)=>{
console.log("delete",item);
settotalamount(totalamount-total[index]);
    const d=[...userTransction];
    d.splice(index,1);
    // settotalamount(totalamount-( Number(item.rate)* Number(item.qunatity)))
    
    setuserTransction(d);

}

const handlefromchange=(e,index)=>{

    console.log(e.target.value,index)

    const data=[...userTransction];
    data[index][e.target.name]=e.target.value;
  
    setuserTransction(data);
    console.log(userTransction);
    const data1=total.filter((d)=>d!==0)
settotal(data1);

}

useEffect(()=>{
userTransction.map((item,index)=>{
   settotalamount(totalamount+( item.rate* item.qunatity))
  settotal([...total,item.rate* item.qunatity])
//settotal(item.rate* item.qunatity);

  
})
},[userTransction])



  return (
    <div>
      
        <div className='app-container'>
    <div className='app-row'>
    <h2 className='title'>Items</h2>
    <form onSubmit={handlesumbit}>
      <div className='form-container'>
     {userTransction.map((data,index)=>{return <div className='expense-form' key={index}>
        <div className='app-form-controls'>
        <label>Item name</label>
        <input type='text' name='name'  onChange={(e)=>handlefromchange(e,index)}/>
        </div>
        <div className='app-form-controls'>
        <label>Qunatity</label>
        <input type='text' name='qunatity' defaultValue={1}  onChange={(e)=>{handlefromchange(e,index)} }/>
        </div>
        <div className='app-form-controls'>
        <label>Rate</label>
        <input type='text' name='rate' defaultValue={1}onChange={(e)=>handlefromchange(e,index)}/>
        </div>
        
        <div className='app-form-controls'>
        <label>Amount</label>
        <input type='text' name='amount'  value={total[index]===0?1:total[index]} />
        </div>
        <div className='form-btn-remove'>
       <button  onClick={()=>handledeleteitem(data,index)}>❌</button>
        </div>
      </div>
})}
      <div className='btn-controls'>
        <button onClick={addmore}>Add new Line</button>
        </div>

<h2>Total amount- Rs{totalamount}</h2>


        </div>




    </form>


    </div>

        </div>




    </div>
  )
}

export default Data
