import React from "react";
import axios from "axios";
import lodashFind from "lodash.filter";
import ProjectItem from "../common/project-item";
import Loading from "../common/loader";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      projects: [],
      titleKeyword: ""
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

  handleTitleKeyword = e => {
    this.setState({
      titleKeyword: e.target.value
    });
  };

  render() {
    const { isLoading, projects, titleKeyword } = this.state;
    const filteredProjects = projects.filter(project => {
      return (
        project.title.toLowerCase().indexOf(titleKeyword.toLowerCase()) !== -1
      );
    });
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="container home">
        <div className="search-container">
          <input
            className="search-box"
            type="search"
            name="kickStarterSearch"
            placeholder="Search for projects"
            onChange={this.handleTitleKeyword}
          />
        </div>
        <div className="projects-container">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectItem data={project} key={project["s.no"]} />
            ))
          ) : (
            <div className="no-results">
              <h2>Sorry, no projects matched your search :(</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
