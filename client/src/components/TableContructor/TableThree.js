import React, {Component} from 'react';
import './TableThree.css'


class TableThree extends Component {

  row = (c, isEven) => {
    const ret = isEven ? [<div className='border smallCell h-100'>*</div>] : []

    for (let i = 0; i < c; i += 2)
      ret.push(<div className='bigCell border flex-fill h-100'>*</div>)
    if (!isEven) {
      ret.push(<div className='border smallCell h-100'>*</div>)
    }
    return (<div className='d-inline-flex w-100'>
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
      <div className='d-flex flex-column bg-light text-dark'>
        {trs}

      </div>
    )
  }


  render() {
    return this.createTable(this.props.constant)

  }
}

export default TableThree;
