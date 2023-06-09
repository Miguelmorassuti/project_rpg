import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Edit from './views/Edit';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/home/" element={<Home / >} />
        <Route path="/edit/" element={<Edit />} />
      </Switch>
    </BrowserRouter>
  )

}

export default Routes