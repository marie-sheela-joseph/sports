import React ,{useReducer}from 'react';
import './App.css';

const intialState={
  players:[
    {id:1,name:'Cristiano Ronaldo',sport:'Soccer',country:'Portugal'},
    {id:1,name:'LeBron James',sport:'Basketball',country:'United States'},
    {id:1,name:'Lionel Messi',sport:'Soccer',country:'Argentina'},
    {id:1,name:'Roger Federer',sport:'Tennis',country:'Switzerland'},
    {id:1,name:'Rafael Nadal',sport:'Tennis',country:'Spain'}
  ],
  editId:0
}

interface IPlayer{
  id:number,name:string,sport:string,country:string
}
interface IState{
  players:IPlayer[],
  editId:number
}
interface IAddPlayer{
  name:string,sport:string,country:string
}
interface IAction{
  type:string,
  payload:IAddPlayer|number|IPlayer
}
function reducer(state:IState,action:IAction){
switch(action.type){
  // case "ADD_PLAYER":return {...state,players:[...state.players,action.payload]};
  // case "DELETE_PLAYER": return {...state,players:state.players.filter((p)=>p.id!==action.payload)};
  // case "EDIT_PLAYER":return {...state,players:state.players.map((p)=>p.id===state.editId?action.payload:p)};
  default :return state;
}
}
function App() {
  const [state,dispatch]=useReducer(reducer,intialState);
  return (
    <div>      
    </div>
  );
}

export default App;
