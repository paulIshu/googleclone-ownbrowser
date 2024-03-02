import React from 'react'
import { Link } from 'react-router-dom'

const Dataa = ({data}) => {
  return (
    <div className='col-md-12'>
       <Link to ={data.displayLink}  target="_blank"  >{data.displayLink}</Link>{' '}
       <i className='fa fa-angle-down ml-1'></i>
       <Link to ={data.formattedUrl}  target="_blank"> <h3>{data.title}</h3> </Link>
       <p>{data.snippet}</p>
      
    </div>
  )
}

export default Dataa


