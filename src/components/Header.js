import React from 'react'

export default function Header(props) {

    const name = props.username

  return (
    <div>
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <span className='ml-4'>User</span> : 
            <b className=''>{name}</b>
            </a>
        </div>
        </nav>
    </div>
  )
}
