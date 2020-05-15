import React, { Component } from 'react';
import Team from '../../../containers/Team/Team';

  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if(a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
  };

  const Table = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.teams);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return(
      <table>
        <caption>Teams</caption>
        <thead>
          <tr>
            <th>
              Division
            </th>
            <th>
              Team/Club
            </th>
            <th>
              Home
            </th>
            <th>
              Away
            </th>
            <th>
              Total
            </th>
            <th>
              Lost
            </th>
            <th>
              Games Won Home
            </th>
            <th>
              Games Won Away
            </th>
            <th>
              Games Won Total
            </th>
            <th>
              Ties won
            </th>
            <th>
              Conc
            </th>
            <th>
              Fine
            </th>
            <th>
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.divsion}</td>
              <td>{item.team}</td>
              <td>{item.home}</td>
              <td>{item.away}</td>
              <td>{item.total}</td>
              <td>{item.lost}</td>
              <td>{item.gamesHome}</td>
              <td>{item.gamesAway}</td>
              <td>{item.gamesWonTotal}</td>
              <td>{item.tiesWon}</td>
              <td>{item.conc}</td>
              <td>{item.fine}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  };

class LeagueTable extends Component {

  componentWillMount() {
    console.log("Table mounted");
  }

  render () {
    return (
      <div>
        <Table
          teams={[
            { id: 1, division: '1', team: 'testMensTeam1', home: '2', away: '1', total: '3', lost: '10', gamesHome: '20', gamesAway: '12', gamesWonTotal: '32', tiesWon: '3', conc: '0', fine: '0', points: '32'}
          ]}
        />
        <Team/>
      </div>
    )
  }
}

export default LeagueTable;
