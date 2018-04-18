import React, { Component } from 'react';
import Card from './DestinationCard.js';
export default class DestinationList extends Component {
  render() {
    let destinations = this.props.allDests.map((dest, index) => {
      return (
        <Card
          title={dest.title}
          url={dest.url}
          caption={dest.caption}
          key={index}
        />
      );
    });
    return <div>{destinations}</div>;
  }
}
