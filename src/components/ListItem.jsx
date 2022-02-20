import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import './Components.css';

const ListItem=(props)=>{
    return(
        <>
               
                <div className="input-group  p-3">
                <li className="list-group-item">
                {props.value}</li>
                <Button variant="contained" onClick={()=>{
                    return props.delete(props.id)
                }}><RemoveIcon/></Button>
            </div>
        </>
    )
}

export default ListItem;