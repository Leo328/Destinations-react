import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import List from './DestinationList';
import Form from './DestinationForm';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [
        {
          title: 'Kuala Lampur',
          url:
            'http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/shared/teasersL/TOP10/10-klcc-hotels/teaserMultiLarge/imageHilight/teaser.jpeg.jpg',
          caption: 'KL'
        },
        {
          title: 'London',
          url:
            'https://cdn.londonandpartners.com/visit/general-london/areas/westminster-st-james/100347-433x298-bigben433.jpg',
          caption: 'Fish n Chips'
        },
        {
          title: 'Prague',
          url:
            'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/fb/prague.jpg',
          caption: 'Czech Republic'
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newDest) {
    this.setState(prevState => ({
      destinations: [newDest, ...prevState.destinations]
    }));
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/"> Go Home</Link>
          <Link to="/new">Enter a New Destination</Link>
        </div>

        <div>
          <Route
            path="/new"
            exact
            component={() => <Form handleAdd={this.handleAdd} />}
          />
          <Route
            path="/"
            exact
            component={() => <List allDests={this.state.destinations} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
