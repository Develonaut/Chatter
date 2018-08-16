

import React from 'react';

import img1 from 'images/avacado_image.jpg'
import img2 from 'images/pepper_image.jpg'
import img3 from 'images/tomato_image.jpg'

import 'stylesheets/components/shared/Header.scss';

// Set up for selecting random images and placing it in the background
var images = [img1, img2, img3];
var randomImage =  images[Math.floor(Math.random() * images.length)];

export default class Header extends React.PureComponent {
render() {
  return(
    <header className="header" style={{ backgroundImage: `url(${randomImage})` }}>
      <div className="container">
        {this.props.children}
      </div>
    </header>
  );
}
}