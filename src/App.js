import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };

  selectAuthor = author => {
    console.log(author);
    this.setState({
      currentAuthor: author
    });
  };

  checking = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else
      return <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />;
  };

  home = () => {
    this.setState({
      currentAuthor: null
    });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar homescreen={this.home} />
          </div>
          <div className="content col-10">
            <>{this.checking()}</>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
