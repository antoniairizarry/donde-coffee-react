import React, {useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Link, withRouter, Switch } from 'react-router-dom'
import './App.css';
// import { Container, Search } from "semantic-ui-react"
import Home from "./components/Home"
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';

import Dashboard from "./components/Dashboard"
// import Dashboard from "./Dashboard"
import LocationResults from "./components/LocationResults"
import ShopDetails from "./components/ShopDetails"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Donde Coffee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/review">Review</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
      <BrowserRouter>
      <Switch>
          <Route exact path= {"/"} render={props => (
            <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
          )} />
          <Route exact path={"/dashboard"} render={props => (
            <Dashboard {...props} loggedInStatus={this.state.loggedInStatus}/>
          )} />
          <Route exact path="/search/:id" render={(props) =>      
            <ShopDetails {...props} /> } />
          <Route path="/search">
            <LocationResults />
          </Route>
          <Route path="/review">
        
          </Route>
          <Route path="/favorites">
          
          </Route>
      </Switch>
      </BrowserRouter>


      </div>
    )
  }
}

// function App() {
//   const [users, setUsers] = useState([]);
//   const [shops, setShops] = useState([]);

//   // /GET /users for list of users
//   useEffect(() => {
//     fetch('/users').then(response =>
//       response.json().then(data => {
//       setUsers(data.users);
//     })
//     );
//   }, []);
//   console.log(users);

//   return (
//     <Container style={{ marginTop: 40}}>
//       <LoginForm onNewUser={user => setUsers(currentUsers => [...currentUsers, user])} />
//       <Users users={users} />
//     </Container>
//   )

//     // /GET /shops for list of shops
//     useEffect(() => {
//       fetch('/shops').then(response =>
//         response.json().then(data => {
//         setShops(data.shops);
//       })
//       );
//     }, []);
//     console.log(shops);

//   return (
  
//     <div className="App">
//       <div className="App-header">
//         DONDE COFFEE!
//       </div>
//       <Users users={users} />
//       <Shops shops={shops} />
//     </div>
//   );
// }



// export default App;
