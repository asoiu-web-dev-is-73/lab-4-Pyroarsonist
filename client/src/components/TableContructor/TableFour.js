import React, {Component} from 'react';
import './TableFour.css'

class TableFour extends Component {

  row = (c, isEven) => {
    const ret = isEven ? [<div className='border smallCell w-100'>*</div>] : []

    for (let i = 0; i < c; i += 2)
      ret.push(<div className='border bigCell w-100'>*</div>)
    if (!isEven) {
      ret.push(<div className='border smallCell w-100'>*</div>)
    }
    return (<div className='flex-column w-100'>
      {ret}
    </div>)
  }


  createTable = (c) => {
    if (isNaN(c))
      return <div> error</div>

    const trs = []

    for (let i = 0; i < c; i++)
      trs.push(this.row(c, i % 2 === 0))


    return (
      <div className='d-flex bg-light text-dark'>
        {trs}

      </div>
    )
  }


  render() {
    return this.createTable(this.props.constant)

  }
}

export default TableFour;
