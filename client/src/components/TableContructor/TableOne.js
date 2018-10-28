import React, {Component} from 'react';

class TableOne extends Component {

  // column - now


  createTable = (c) => {
    if(isNaN(c))
      return <div> error</div>
    if (c <= 1)
      return (
        <table className='table bg-light text-dark table-bordered m-0'>
          <tbody>
          <tr>
            <td colSpan={1}>*</td>
          </tr>
          </tbody>

        </table>
      )

    const childrenTable = this.createTable(c - 1)

    const table = (<table className='table bg-light text-dark table-bordered m-0'>
      <tbody>
      <tr>
        <td colSpan={c}>*</td>
      </tr>
      <tr>
        <td rowSpan={c - 1}>*</td>
        {childrenTable}
      </tr>
      </tbody>

    </table>)

    return table
  }


  render() {
    return this.createTable(this.props.constant)

  }
}

export default TableOne;
