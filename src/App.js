import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header-color" title={<Link style={{
            textDecoration: 'none',
            color: "white"
          }} to="/">MyportFolio</Link>} scroll>
            <Navigation>
              <Link to="resume">Resume</Link>
              <Link to="aboutme">AboutMe</Link>
              <Link to="projects">Projects</Link>
              <Link to="contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{
            textDecoration: 'none',
            color: "black"
          }} to="/">MyportFolio</Link>}>
            <Navigation>
              <Link to="resume">Resume</Link>
              <Link to="aboutme">AboutMe</Link>
              <Link to="projects">Projects</Link>
              <Link to="contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
