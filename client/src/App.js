import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TableConstructor from './components/TableContructor'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TableConstructor/>
        </header>
      </div>
    );
  }
}

export default App;
