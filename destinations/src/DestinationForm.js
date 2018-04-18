import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      caption: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({ url: '', title: '', caption: '' });
    e.target.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="url"
          placeholder="enter an image url"
          type="text"
        />
        <input
          onChange={this.handleChange}
          name="title"
          placeholder="Enter a title"
          type="text"
        />
        <input
          onChange={this.handleChange}
          name="caption"
          placeholder="Enter a caption"
          type="text"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
