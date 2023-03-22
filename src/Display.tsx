import {IPlayer} from "./App"
interface IProps{
    players:IPlayer[]
}

const Display:React.FC<IProps>=({players})=>{

return (
    <div>
        display
        <ul>
            {players.map((p)=><li key={p.id}>
                {p.name} plays {p.sport} for {p.country}</li>)}
        </ul>
    </div>
);
}
export default Display;