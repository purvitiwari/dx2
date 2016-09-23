import React from 'react';

class Search extends React.Component {
  handleChange(e) {
    const city = e.target.value;
    this.props.changeInput(city);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter city" onChange={this.handleChange.bind(this)} />
        {this.props.city}
      </div>
    );
  }
}

export default Search
