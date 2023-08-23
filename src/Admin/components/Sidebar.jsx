import React, { useEffect } from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import { ReactDOM } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {

    const location = useLocation()

    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <BiHomeAlt2 />
        }
        ,
        {
            tab: "Categories",
            url: "/category",
            icon: <BiSolidCategoryAlt />
        }
    ]




    return (
        <>
            <div className=" bg-primary p-3 d-flex text-white justify-content-between align-items-center"><span>Admin Name</span>
                <button className="btn btn-outline-light">Logout</button>
            </div>

            <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>

                        <li key={key} className={`nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`} >

                            <Link className='nav-link d-flex align-items-center gap-2' to={val.url}>
                                <span>
                                    {val.icon}
                                </span>
                                <span>{val.tab}</span>

                            </Link>
                        </li>)
                }
            </ul>






        </>
    )
}
