import React, {Component} from 'react';

class TableTwo extends Component {

  // column - now


  createTable = (c) => {
    if (isNaN(c))
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
        <td rowSpan={c}>*</td>
        <td colSpan={c - 1}>{c === 4 ? 'четверта клітинка' : '*'}</td>

      </tr>

      <tr>
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

export default TableTwo;
