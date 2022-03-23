import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Edit from './views/Edit';

    
function App() {

  return (

    <div className="App">

    <BrowserRouter>

      <h1>Office Supplies</h1>

      <p>
        <Link to="/"> Home </Link>  
        {/* put a | to seperate links  */}
        {/* <Link to="/edit/:id"> Edit </Link> */}
      </p>

      <Switch>

        <Route exact path="/">
            <Main/>
          </Route>

        <Route exact path="/edit/:id">
          <Edit/>
        </Route>

        <Route exact path="/detail/:id">
          <Detail/>
        </Route>

      </Switch>
      

    </BrowserRouter>

    </div>

  );
  
}
    
export default App;
