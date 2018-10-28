import React, {Component} from 'react';
import TableOne from './TableOne'
import TableTwo from './TableTwo'

class TableContstructor extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {constant: '1', checkedConstant: 1}
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
    const constant = parseInt(this.state.constant)
    if (isNaN(constant))
      alert(this.state.constant + 'is not correct value')
    const resp = await fetch('/lulz', {
      method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({constant: this.state.constant})
    }).then(x => x.json())
    if (resp.error) {
      alert(resp.message)
    } else {
      this.setState({...this.state, checkedConstant: constant})
    }
  }

  render() {
    return (
      <div>

        <div className='m-4'>
          <div className="form-group">
            <label>Enter constant for tables</label>
            <input type="number" className="form-control" value={this.state.constant}
                   onChange={e => this.setState({constant: (e.target.value)})}/>
          </div>
          <button className="btn btn-primary btn-block" onClick={(e) => this.handleSubmit(e)}>Create
          </button>

        </div>

        <TableOne constant={this.state.checkedConstant}/>
        <br/>
        <TableTwo constant={this.state.checkedConstant}/>

        <div>

        </div>


      </div>
    );
  }
}

export default TableContstructor;
