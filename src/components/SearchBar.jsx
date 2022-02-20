import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar=(props)=>{
    return(
        <>
    <div className="input-group mb-3 p-3">
  <span className="input-group-text" id="basic-addon1"><SearchIcon/></span>
  <input type="text" className="form-control" placeholder="Search Items" aria-label="Username" aria-describedby="basic-addon1" onChange={props.search}/>
</div>
        </>
    )
}

export default SearchBar