import React from 'react'

function Search() {
    return (
        <div style={{ display: 'flex', justifyContent: "center", marginTop: "2%" }}>
            <input placeholder='Search Task' />
            <button>Serach</button>
        </div>
    )
}

export default Search