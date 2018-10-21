import React, {Component} from 'react';

class TableContstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {columns: '0', rows: '0'}
  }

  async componentDidMount() {
    try {
      const data = await fetch('/data')
        .then(res => res.json())
      this.setState({...data})
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div>

        <div>
          <form onSubmit={e => {
            alert('You set ' + this.state.columns + ' column size and ' + this.state.rows + ' row size')
            const columns = parseInt(this.state.columns)
            const rows = parseInt(this.state.rows)
            if (isNaN(columns))
              return alert(this.state.columns + 'is not correct value')
            if (isNaN(rows))
              return alert(this.state.rows + 'is not correct value')
          }}>
            <div className="form-group">
              <label>Enter rows of table</label>
              <input type="number" className="form-control" value={this.state.rows}
                     onChange={e => this.setState({rows: (e.target.value)})}/>
            </div>
            <div className="form-group">
              <label>Enter columns of table</label>
              <input type="number" className="form-control" value={this.state.columns}
                     onChange={e => this.setState({columns: (e.target.value)})}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Create</button>

          </form>
        </div>

        <div>

        </div>


      </div>
    );
  }
}

export default TableContstructor;
