import React ,{useReducer,createContext}from 'react';
import { act } from 'react-dom/test-utils';
import Add from './Add';
import './App.css';
import Display from './Display';
import Edit from './Edit';

export const ContextDispatch=createContext<IDispatch|null>(null)
export const ContextState=createContext<IState|null>(null)
export interface IPlayer{
  id:number,name:string,sport:string,country:string
}

const intialState={
  players:[
    {id:1,name:'Cristiano Ronaldo',sport:'Soccer',country:'Portugal'},
    {id:2,name:'LeBron James',sport:'Basketball',country:'United States'},
    {id:3,name:'Lionel Messi',sport:'Soccer',country:'Argentina'},
    {id:4,name:'Roger Federer',sport:'Tennis',country:'Switzerland'},
    {id:5,name:'Rafael Nadal',sport:'Tennis',country:'Spain'}
  ],
  editId:0,
  showEdit:false
}
interface IState{
  players:IPlayer[],
  editId:number,
  showEdit:boolean
}
interface IAddPlayer{
  name:string,sport:string,country:string
}
interface IAction{
  type:string,
  payload:IAddPlayer|number|IPlayer
}
type IDispatch=(action:IAction)=>void

function reducer(state:IState,action:IAction):IState{
switch(action.type){
  case "ADD_PLAYER":{
    if(typeof(action.payload)==="object"){
   return {...state,players:[...state.players,{...action.payload,id:state.players.length+1}]}
    }
    return state
  }    

  case "DELETE_PLAYER": return {...state,players:state.players.filter((p)=>p.id!==action.payload)};

  case "EDIT_PLAYER":{
    console.log(typeof(action.payload))
    if(typeof(action.payload)==="object"){
      const {name,sport,country}=action.payload
    return {...state,players:state.players.map((p)=>p.id===state.editId?{name,sport,country,id:state.editId}:p)}
    }
    return state
  }

  case "SET_EDIT_ID":{
   if(typeof(action.payload)==="number"){ 
   return {...state,editId:action.payload,showEdit:true}}
   return state
  }

  default :return state;
}
}

function App() {
  const [state,dispatch]=useReducer(reducer,intialState);
  return (
    <div>      
      <ContextDispatch.Provider value={dispatch}>
        <ContextState.Provider value={state}>
        <Add/>
        {state.showEdit && <Edit/>}
      <Display players={state.players} />
      </ContextState.Provider>
      </ContextDispatch.Provider>
    </div>
  );
}

export default App;

