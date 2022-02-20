import React from 'react'
import { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListItem from './ListItem';
import SearchBar from './SearchBar';

const InputArea = () => {

    const [Item, setItem] = useState();
    const [List, setList] = useState([]);

    const displayItem=(event)=>{
        setItem(event.target.value);
    }
    const addItem=()=>{
        console.log('cliked');
        setList((prevItems)=>{
            return [...prevItems,Item];
        })
        setItem(" ");
    }

    const RemoveItem=(id)=>{
        setList((prevval)=>{
            return prevval.filter((element,index)=>{
                return index!==id;
            })
        })

    }

    const SearchItems=(event)=>{
        setList((prevval)=>{
            return prevval.filter((element,index)=>{
                return element.includes(event.target.value);
            })
        })
        
    

    
    }

    return (
        <>
            <SearchBar
                search={SearchItems}
            />
            <h4 className='p-3 pb-0'>Enter Items : </h4>
            <div className="input-group  p-3">
                <input type="text" className="form-control" placeholder="Enter Grocery Here" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={displayItem} value={Item}/>
                <Button variant="contained" className='add-btn' onClick={addItem}><AddIcon/></Button>
            </div>
                <h4 className='p-3'>Your List Items: </h4>
                {List.map((elem,index)=>{
                    return (
                        <>
                        <ListItem 
                        key={index}
                        id={index}
                        value={elem}
                        delete={RemoveItem}
                        />
                        </>
                    )
                })}
        </>
    )
}

export default InputArea;