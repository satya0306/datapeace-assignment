import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailPage from './container/Detail/DetailPage';
import TableViewPage from './container/TableViewPage/TableViewPage';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={TableViewPage}/>
         <Route path="/:id" component={DetailPage}/>
      </Switch>
    </div>
  );
}

export default App;
