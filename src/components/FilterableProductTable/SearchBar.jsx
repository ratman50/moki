import React from 'react'
import './css/SearchBar.css'
export default function SearchBar(props) {
  return (
    <div className='SearchBar'>
        <div className="search">
            <input type="text" name="searchar" className='SearchBar__search'onChange={props.handleValue} placeholder='Search' />
            <button type='button' className='valid' onClick={props.handleSearch}  >valider</button>
        </div>
        <div className="searchBar__checkbox">
            <input type="checkbox"  onChange={props.handleStocked} name="check" id="check" />
            <label htmlFor='check'>Only show products in stock</label>
            
        </div>
    </div>
  )
}
