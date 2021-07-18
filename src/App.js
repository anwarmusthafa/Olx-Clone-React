import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Home from './Pages/Home';
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Create from "./Pages/Create"
import view from "./Pages/ViewPost"
import { useContext, useEffect } from 'react';
import {AuthContext,FirebaseContext} from "./store/FirebaseContext"
import ViewPost from './Pages/ViewPost';
import Post from "./store/PostContext"

function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      console.log(user)
    })
  })

  return (
    <div>
      
      <Post>
      <Router>
        <Route exact path="/">
      <Home />
       </Route>
       <Route path="/signup">
         <Signup/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="/home">
         <Home/>
       </Route>
       <Route path="/create">
         <Create/>
       </Route>
       <Route path="/view">
         <ViewPost/>
       </Route>
       </Router>
       </Post>
    </div>
  );
}

export default App;
