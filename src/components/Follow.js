import React from 'react'

export default function Follow(props) {
    const newState = props.isFollow === true ? "Following..." : "Follow"
  return (
    <button        
        onClick={props.handleClick}
        className="btn btn-primary mt-3">
        {newState}
    </button>
  )
}
