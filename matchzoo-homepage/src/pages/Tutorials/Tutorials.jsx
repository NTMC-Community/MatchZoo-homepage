import React, { Component } from 'react';
import MarkdownDocs from './components/MarkdownDocs';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


export default class Tutorials extends Component {
  static displayName = 'Tutorials';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorials-page" style={{ background: '#fff' }}>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <MarkdownDocs />
        <Footer />      
      </div>
    );
  }
}
