import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Edit from './views/Edit';
import Welcome from './views/Welcome';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/fichas/" element={<Home />} />
        <Route path="/fichas/:id" element={<Edit />} />
        <Route path="/" element={<Welcome />} />
      </Switch>
    </BrowserRouter>
  )

}

export default Routes