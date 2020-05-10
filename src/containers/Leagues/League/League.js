import React from 'react';

class League extends Component {

  state {
    league: 'testMensLeague1'
    leagueContacts: {
      manager1: 'testManager1',
      manager2: 'testManager2'
    }
  }

  render() {
    return (
      <div>
        {this.state.league}
      </div>
    )
  }
}

export default League;
