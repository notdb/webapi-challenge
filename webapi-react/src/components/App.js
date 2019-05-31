import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProjects } from "../actions";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }
  render() {
    return (
      <div className="App">
        {this.props.projects.map(project => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ projects, fetching_projects }) => ({
  projects,
  fetching_projects
});

export default connect(
  mapStateToProps,
  { loadProjects }
)(App);
