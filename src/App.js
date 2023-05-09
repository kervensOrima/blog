import NavBar from './NavBar';
import Home from './Home';
import Home2 from './Home2';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch, useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  const history = useHistory()

  // const title = 'Hello world, welcome to react js'
  // const likes = 21
  // const fruits = ['Apple', 'Banana', 'Orange', 'Mangue', '']

  return (
    <Router>
      <div className="App">

        {/* <div className='content'>
        <h3>Welcome to react js first website</h3>
        <div>
          My first biding {title}
        </div>
        <div>{likes} {likes && likes > 1 ? `comments` : `comment`} </div>
        <div>
          <h2>Fruit list</h2>
          <div>{fruits.join(' ').toUpperCase()}</div>
        </div>
      </div> */}


        <NavBar />

        <div className='content'>

          <Switch>
            <Route exact path='/'>
              <Home2 />
            </Route>

            <Route exact path='/new-blog/'>
              <Create />
            </Route>

            <Route exact path='/blogs/:id/'>
              <BlogDetails />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>


        </div>

      </div>
    </Router>
  );
}

export default App;
