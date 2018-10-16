import React, { Component } from 'react';
import TeamDisplay from './components/TeamDisplay';
import Partners from './components/Partners';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Team extends Component {
  static displayName = 'Team';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="team-page">
        <Header />
        <br />
        <br />
        <TeamDisplay />
        <Partners />
      </div>
    );
  }
}
