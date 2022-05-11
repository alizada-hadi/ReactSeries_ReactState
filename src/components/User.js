import React, {useState, Fragment} from 'react'
import image from '../images/user.jpg'
export default function User() {
    const style = {
        padding : "10px"
    }
    const paragraphs = {
        padding : "0px",
        margin : "0px"
    }

    const [contact, setContact] = useState({
        first_name : "Hadi", 
        last_name : "Alizada",
        email : "alizadahadi2040@gmail.com", 
        phone : "+9379847322", 
        state : false
    })
    const handleChange = () => {
        setContact(prevContact => {
            return{
                ...prevContact, 
                state : !contact.state
            }
        })
    }
  return (
    <div className={style}>
        <div className="card" style={{width:"400px"}}>
            <img className="card-img-top" src={image} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{contact.first_name} {contact.last_name}</h4>
                <p className="card-text" style={paragraphs}>
                    <span>
                    <ion-icon name="mail-outline"></ion-icon>
                         : {contact.email}</span>
                </p>
                <p className="card-text" style = {paragraphs}>
                    <span><ion-icon name="call-outline"></ion-icon> : {contact.phone}</span>
                </p>
                <a href="#"
                onClick={handleChange}
                className="btn btn-primary mt-3">
                    {contact.state ? "Folloing...." : "Follow"}
                </a>
            </div>
        </div>
    </div>
  )
}
