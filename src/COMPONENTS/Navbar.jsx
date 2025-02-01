import React from 'react'
import { Link, Outlet, } from 'react-router-dom'
import Search from './Search'
import Add_task from './Add_task'

function Navbar() {
    return (
        <>
            <div style={{ color: "white", background: "yellow", display: 'flex', justifyContent: "space-around" }}>
                <Link to={'/All_task'}>All_task</Link>
                <Link to={'/Pending_task'}>Pending_task</Link >
                <Link to={'/Completed_task'}>Completed_task</Link>
            </div>
            <Search />
            <Add_task />
            <Outlet />
        </>
    )
}

export default Navbar