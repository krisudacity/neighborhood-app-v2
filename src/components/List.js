import React, { Component } from 'react';


//React must keep track of the input value and rerender the components:
//place a query in the parent component (Container) and pass to value
class List extends Component {
  render () {
    const locations = this.props.locations;
    return (
      <div id="search"
      role="search"
      aria-label="Museum locations filter">
        <h2 tabindex="2">NYC East Village</h2>
        <input id="searchbar"
          placeholder="Search for..."
          type="text"
          aria-label="Search input"
          value={this.props.queryString} onChange={e => this.props.updateQuery(e.target.value)} />

          <ol>
            {locations.map(loc => (
              <li key={loc.venue.id}>

                <div id="list"
                role="list"
                aria-label="Museum locations list">

                  <p className="venue__title"
                  role="listitem">
                    <a href="#" aria-label="Location name" onClick={() => this.props.showListing(loc)}>{loc.venue.name}</a>
                  </p>

                  <p className="venue__address"
                  role="listitem"
                  aria-label="Location address">
                    Address: {loc.venue.location.formattedAddress[0]}
                  </p>

                </div>
              </li>
            ))}
          </ol>
      </div>
    );
  }
};

  export default List;
