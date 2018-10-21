import React, {Component} from 'react';

class TableContstructor extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)

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

  handleSubmit = async (e) => {
    e.preventDefault()
    alert('You set ' + this.state.columns + ' column size and ' + this.state.rows + ' row size')
    const columns = parseInt(this.state.columns)
    const rows = parseInt(this.state.rows)
    if (isNaN(columns))
      return alert(this.state.columns + 'is not correct value')
    if (isNaN(rows))
      return alert(this.state.rows + 'is not correct value')
    const resp = await fetch('/lulz', {
      method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({rows, columns})
    }).then(x => x.json())
    if (resp.error) {
      return alert(resp.message)
    } else {
      return alert(resp.message)
    }

  }

  render() {
    return (
      <div>

        <div>
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
          <button className="btn btn-primary btn-block" onClick={(e) => this.handleSubmit(e)}>Create
          </button>

        </div>

        <div>

        </div>


      </div>
    );
  }
}

export default TableContstructor;
