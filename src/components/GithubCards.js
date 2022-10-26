import React, { Component } from "react";
import Axios from "axios";
import baseURL from "../api/Github";
import { Card } from './Card';

class GithubCards extends Component {
  state = {
    repo: []
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_API_KEY;

    let repo = [
      baseURL(`Python-Recommendation-System-2`),
      baseURL(`dissertation-2021`),
      baseURL(`codecademy-passing-thoughts`),
    ];

    repo.map(
      async (url) =>
        await Axios.get(url, {
          headers: {
            Authorization: `token ${api_key}`,
          },
        }).then(async (res) => {
          await this.setState({
            repo: [...this.state.repo, res.data],
          });
        })
    );
  }
  render() {
    const { repo } = this.state;
    
    return (
        <div className="projects-display">
            {repo.map((data, i) => (
            <Card name="projects-card" key={i} url={data.html_url} title={data.name} text={data.description} language={data.language}/>
            ))}
        </div>
    );
  }
}

export default GithubCards;