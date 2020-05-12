import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Start from './components/Start/Start';
import About from './components/About/About';
import Leagues from './components/Leagues/Leagues';
import Clubs from './components/Clubs/Clubs';
import HeaderLayout from './hoc/HeaderLayout';
import DataGrid from 'react-data-grid';
// import 'react-data-grid/dist/react-data-grid';

// const columns = [
//   {key: 'id', name: 'ID'},
//   {key: 'title', name: 'Title'}
// ];
//
// const rows = [
//   {id: 0, title: 'Example'},
//   {id: 1, title:'Demo'}
// ];

const formatter = ({ value }) => {
  return <span class="label label-info">{value}</span>;
};

function createColumns(count) {
  return [...Array(count).keys()].map(i => ({
    key: `col${i}`,
    name: `Column ${i}`,
    width: 160,
    editable: true,
    formatter
  }));
}

function createSingleRow(columns, rowIdx) {
  return columns.reduce(
    (row, c, cidx) => ({ ...row, [c.key]: `Row ${rowIdx} - Col ${cidx}` }),
    {}
  );
}

function createRows(count, columns) {
  return [ ...Array(count).keys()].map(rowIdx =>
    createSingleRow(columns, rowIdx)
  );
}

const columns = createColumns(10);

class App extends Component {

  state = { rows: createRows(10, columns ) };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  componentWillMount() {
    console.log(this.state.rows.length);
  };

  render() {

    let routes = (
      <Switch>
        <HeaderLayout path="/start" component={Start} />
        <HeaderLayout path="/about" component={About} />
        <HeaderLayout path="/leagues" component={Leagues} />
        <HeaderLayout path="/clubs" component={Clubs} />
        <Route path="/" exact component={Home} />
      </Switch>
    )

    return (
      <div>
        <DataGrid
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={10}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          enableCellAutoFocus={false}
          minHeight={650}
        />
      </div>
    )
  }
}

export default App;
