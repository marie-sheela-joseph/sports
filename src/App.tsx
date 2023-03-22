import React ,{useReducer,createContext}from 'react';
import './App.css';
import Display from './Display';

const intialState={
  players:[
    {id:1,name:'Cristiano Ronaldo',sport:'Soccer',country:'Portugal'},
    {id:2,name:'LeBron James',sport:'Basketball',country:'United States'},
    {id:3,name:'Lionel Messi',sport:'Soccer',country:'Argentina'},
    {id:4,name:'Roger Federer',sport:'Tennis',country:'Switzerland'},
    {id:5,name:'Rafael Nadal',sport:'Tennis',country:'Spain'}
  ],
  editId:0
}

export interface IPlayer{
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
   case "DELETE_PLAYER": return {...state,players:state.players.filter((p)=>p.id!==action.payload)};
  // case "EDIT_PLAYER":return {...state,players:state.players.map((p)=>p.id===state.editId?action.payload:p)};
  default :return state;
}
}
type IDispatch=(action:IAction)=>void
export const ContextDispatch=createContext<IDispatch|null>(null)
function App() {
  const [state,dispatch]=useReducer(reducer,intialState);
  return (
    <div>      
      <ContextDispatch.Provider value={dispatch}>
      <Display players={state.players} />
      </ContextDispatch.Provider>
    </div>
  );
}

export default App;
