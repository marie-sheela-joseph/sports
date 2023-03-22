import { ContextDispatch, ContextState, IPlayer } from "./App";
import { useContext, useState } from "react";

const Edit=()=>{
const stateComplete=useContext(ContextState);
const dispatch=useContext(ContextDispatch);
let editPlayer:IPlayer={id:0,name:'',sport:'',country:''}
if(stateComplete!==null){ 
    editPlayer=stateComplete.players.find((p)=>p.id===stateComplete.editId)!}
const[state,setState]=useState(editPlayer)
function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setState({...state,[e.target.name]:e.target.value})
}
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                dispatch!== null && dispatch({type:"EDIT_PLAYER",payload:state})}}>
                <label htmlFor="name">Enter name</label>
                <input type={"text"} name="name" value={state.name} id="name" onChange={(e)=>handleChange(e)}/>
                <label htmlFor="sport">Enter sport</label>
                <input type={"text"} name="sport" value={state.sport} id="sport" onChange={(e)=>handleChange(e)}/>
                <label htmlFor="country">Enter country</label>
                <input type={"text"} name="country" value={state.country} id="country" onChange={(e)=>handleChange(e)}/>
                <button>Edit</button>
            </form>                        
        </div>
    );
}
export default Edit;
