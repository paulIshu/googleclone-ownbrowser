import React from 'react'
import { Link } from 'react-router-dom'

const SubSearchHeader = () => {
  return (
    <div className="container border-bottom">
      <div className="row " style={{marginRight:"10px"}}>
        
        <div className="col-md-6">
          
            <ul className="nav">
              <li className="nav-item p-2">
                <Link
                  to={'/'}
                  className="d-flex align-items-center justify-content-between  nav-link text-dark">
                  <i className="fa fa-search " style={{marginRight:"7px"}}></i>
                  All
                </Link>
              </li>
              <li className="nav-item p-2 ">
                <Link
                  to="#"
                  className=" d-flex align-items-center justify-content-between nav-link text-dark">
                  <i className="fa fa-map-marker mr-2"style={{marginRight:"7px"}}></i>
                  Maps
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="#"
                  className=" d-flex align-items-center justify-content-between  nav-link text-dark">
                  <i className="fa fa-newspaper-o mr-2"style={{marginRight:"7px"}}></i>
                  News
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="#"
                  className=" d-flex align-items-center justify-content-between nav-link text-dark">
                  <i className="fa fa-play mr-2"style={{marginRight:"7px"}}></i>
                  Videos
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  to="#"
                  className=" d-flex align-items-center justify-content-between nav-link text-dark">
                  <i className="fa fa-ellipsis-v mr-2"style={{marginRight:"7px"}}></i>
                  More
                </Link>
              </li>
            </ul>
            
          
        </div>
      </div>
    </div>
  )
}

export default SubSearchHeader
