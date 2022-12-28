import './App.css';

import React, {useState } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App =()=> {
  const apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(10)

    return(
       <div>
         <Router>
         <LoadingBar
         height={3}
        color='#f11946'
        progress={progress}
      />
       <Navbar/>
       <Switch>
         
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize ={12} country="in" category ="business"/> </Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize ={12} country="in" category ="entertainment"/> </Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize ={12} country="in" category ="general"/> </Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize ={12} country="in" category ="health"/> </Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize ={12} country="in" category ="science"/> </Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize ={12} country="in" category ="sports"/> </Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize ={12} country="in" category ="technology"/> </Route>
         
        </Switch>
       </Router>
    </div>
    )
  }

export default App;
