import React from 'react'
import spinner from "../assets/spinner2.gif"

const Spiner = () => {
    const style = {
        position: "absolute",
        height: "100px",
        width: "100px",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-50px",
        backgroundSize: "100%",
    }




    return (
        <div className="loading">
            <img src={spinner} alt="loading..." className="spinner" style={style} />   
        </div>
    )
}

export default Spiner