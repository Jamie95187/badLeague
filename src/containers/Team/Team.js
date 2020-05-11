import React from 'react';

class Team extends Component {
  state = {
    teamName: testMensDiv1Team,
    code: tmd1
  }

  render() {
    return (
      <div
        teamCode={this.state.code}>{this.state.teamName}</div>
    )
  }
}

export default Team;
