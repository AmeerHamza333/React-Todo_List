import React, {useState, useEffect} from 'react'
import image1 from './image1.png';
import image2 from './image2.png';
import Card from './Card';


const getLocalItems = ()=>{
    let list = localStorage.getItem('lists');
    console.log(list);
if(list){
    return JSON.parse(localStorage.getItem('lists'));
}
else{
    return [];
}
}


export default function Todo() {
 const [val, setVal] = useState('');
const [data, setData] = useState(getLocalItems());
const [toggle, setToggle] = useState(true);
const [isEdit, setIsEdit] = useState(null);

    const changeEvent = (e)=>{
setVal(e.target.value);
    }

    const addEvent = ()=>{
if(!val){
alert("please enter the Item");
}
else if(val && !toggle){
setData(data.map((elem)=>{
if(elem.id === isEdit){
    return {...elem, name: val}
}
return elem;
}))
setVal("");
setToggle(true);
}
else{
const alldata = {id: new Date().getTime().toString(), name: val}
        setData([...data, alldata]);
        setVal("");
    }
    }

    const clickEventDelete = (index)=>{
        const updateditems = data.filter((val)=>{
return index !== val.id;
        });
        setData(updateditems);
        }

const clickEventUpdate = (id)=>{
const newItemUpdated = data.find((elem)=>{
    return id === elem.id;
})
console.log(newItemUpdated);
setToggle(false);
setVal(newItemUpdated.name);
setIsEdit(id);
}


useEffect(() => {
  localStorage.setItem('lists' , JSON.stringify(data))
}, [data]);


const removeItems = ()=>{
    setData([]);
}

  return (
<>
<div className='container main'>

<div className='maininner'>

<div className='logoimage'>
<img src= {image1} alt="image1" className='image1'/>
<img src= {image2} alt="image2" className='image2' />
</div>

{/* <div style={{maxWidth: "400px",margin:"auto"> */}

<div style={{maxWidth: "400px",marginTop:"85px"}}>
        <div className="input-icons">
           <i className="fa-solid fa-pen icon" ></i>
          
           <div className='inputdiv'>
            <input onChange = {changeEvent} value = {val} placeholder='items...' className="input-field puttag " type="text"/>
            <span>
                {
                    toggle ? <i className="fa-solid fa-plus icon2" onClick={addEvent}></i> : <i class="fa-solid fa-user-pen icon2" onClick={addEvent}></i>
                }
            </span>
            </div> 
            </div>

            </div>


<div className='container outputdiv'>

<button type="button" className="btn btn-info btn2" onClick={removeItems}>Remove All Items</button>

</div>

</div>

</div>



<div className='container main2'>


{
data.map((val,ind)=>{
return <Card name = {val.name} id = {ind + 1} idd = {val.id} key = {val.id} uclick = {clickEventUpdate} dclick = {clickEventDelete}/>
    
})
}






</div>

</>
  )
}
