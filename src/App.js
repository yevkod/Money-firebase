import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              {!user && <Redirect to='/login' />}
              {user && <Home />}
            </Route>
            <Route path='/login'>
              {user && <Redirect to='/' />}
              {!user && <Login />}
            </Route>
            <Route path='/signup'>
              {user && <Redirect to='/' />}
              {!user && <SignUp />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
