import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import  SearchRecord from "./components/search.component";
import FormFill from "./components/form.component";
import DeleteRecord from "./components/DeleteRecord.component";
import logo from "./logo.png";
class App extends Component {


  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light bg-light navbar-fixed-top">
            
            <div className="navbar ">
              <ul className="navbar-nav">
                <li className="mr-auto">
                  <a className="navbar-brand" href="https://www.coralblockchain.io/" target="_blank" >
                    <img src={logo} width ="350"/>
                  </a>
                </li>
                <li className="navbar-item mr-sm-4">
                  <button className="navbar-brand mx-auto btn btn-light" type="submit">
                    <Link to="/"  className="navbar-brand ">Home</Link>
                  </button>
                </li>
                <li className="navbar-item">
                    <button className="btn btn-light navbar-brand mx-auto" type="submit">
                      <Link className="navbar-brand" to="/SearchRecord">Search</Link>
                    </button>
                </li>
              </ul>
            </div>



          </nav>
          <Route path="/" exact component={FormFill}/>
          <Route path="/searchrecord" component={SearchRecord}/>
          <Route path="/deleterecord" component={DeleteRecord}/>       
        </div>
      </Router>
      
    );
  }
}

export default App;
