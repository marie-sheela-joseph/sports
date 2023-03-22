import {IPlayer} from "./App"
import { useContext } from "react"
import {ContextDispatch} from "./App"
interface IProps{
    players:IPlayer[]
}



const Display:React.FC<IProps>=({players})=>{
    const dispatch=useContext(ContextDispatch)
return (
    <div>        
        <ul>
            {players.map((p)=><li key={p.id}>
                {p.name} plays {p.sport} for {p.country}
                <button onClick={()=>
                {
                dispatch!==null && dispatch({type:"DELETE_PLAYER",payload:p.id})
                }
                }>Delete</button>
                <button onClick={()=>{
                    dispatch!==null && dispatch({type:"SET_EDIT_ID",payload:p.id})
                }}>Edit</button>
                </li>)}
        </ul>
    </div>
);
}
export default Display;
