import React from "react";
import axios from "axios";
import ProjectItem from "../common/project-item";
import Loading from "../common/loader";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      projects: []
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    this.setState({ isLoading: true });
    axios
      .get("http://starlord.hackerearth.com/kickstarter")
      .then(response => {
        this.setState({
          projects: response.data,
          isLoading: false
        });
      })
      .catch(function(error) {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { isLoading, projects } = this.state;

    if (isLoading) {
      return <Loading />;
    }
    if (projects.length === 0) {
      return "No products matched your search!";
    }
    return (
      <div className="container home">
        <div className="projects-container">
          {projects.map(project => (
            <ProjectItem data={project} key={project["s.no"]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
