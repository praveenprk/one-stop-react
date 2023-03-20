import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Events from '../../components/events/Events'
import Home from '../../components/home/Home'
import Todo from '../../components/todo/Todo'

const Header = () => {
  return (
    <Router>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link className='nav-link' to="/">Daily Digitals!</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link className="nav-link" to='/todo'>Todo</Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link" to='/events'>Events</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Support</a></li>
            {/* <li><a class="dropdown-item" href="#">Another action</a></li> */}
            {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default Header