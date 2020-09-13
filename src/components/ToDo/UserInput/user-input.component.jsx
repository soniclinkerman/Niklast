import React from "react"

const UserInput = ({type,value,name, onChange}) => {
    return(
        <div>
            <input type={type} value={value} name={name} onChange={onChange} />
        </div>
    )
}

export default UserInput
