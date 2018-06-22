/* 3RD PARTY */
import React, { Component } from 'react';

/* ASSETS */
import './App.css';
import logo from './logo-white.png';

/* COMPONENTS */
import RenderedVideo from './RenderedVideo.js';
import VideoPreview from './VideoPreview';

import VideoData from './VideoData';


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Preview Manufacturer</h1>
          {/* this span makes sure the font is loaded for the canvas */}
          <span style={{fontFamily: VideoData.font}}>{'\u00A0'}</span>
        </header>
        <div className="app-body">
          <RenderedVideo />
          <VideoPreview />
        </div>
      </div>
    );
  }
}

export default App;
