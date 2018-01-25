import React, { Component } from 'react';

import Filter from './Filter';
import Results from './Results';


//main component for representative/senator search app
class RepSearch extends Component {

  render() {
    const { store } = this.props;

    return (
      <main className="rep_search_main">
        <header className="main_header">
          <h2>{'Who\'s My Representative?'}</h2>
        </header>
        <div className="vertical_divider"></div>
        <Filter store={store}/><br />
        <Results store={store} />
      </main>
    )
  }
}

export default RepSearch;
