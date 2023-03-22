import { ContextDispatch } from "./App";
import { useContext,useState } from "react";
const Add=()=>{
const [state,setState]=useState({name:'',sport:'',country:''});
const dispatch=useContext(ContextDispatch);
function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setState({...state,[e.target.name]:e.target.value})
}
return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
           dispatch!==null && dispatch({type:"ADD_PLAYER",payload:state})
           setState({name:'',sport:'',country:''})
        }}>
            <label htmlFor="name">Enter Name</label>
            <input type={"text"} value={state.name} name="name" id ="name" required onChange={(e)=>handleChange(e)}/>
            <label htmlFor="sport">Enter sport</label>
            <input type={"text"} value={state.sport} name="sport" id="sport" required onChange={(e)=>handleChange(e)}/>
            <label htmlFor="country">Enter country</label>
            <input type={"text"} value={state.country} name="country" id="country" required onChange={(e)=>handleChange(e)}/>
            <button>Add</button>
        </form>
    </div>
);
}
export default Add;
