import { NavLink, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar  pt-5 pb-5 bg-blue-300">
            <li className="navbar__item pl-10 flex justify-evenly ">
                <NavLink className="text-center underline text-blue-600 hover:text-purple-700" to={"/medications"}>medications</NavLink>
            </li>
            {
                (localStorage.getItem("token") !== null) ?
                    <li className="navbar__item text-right">
                        <button className="underline text-blue-600 hover:text-purple-700"
                            onClick={() => {
                                localStorage.removeItem("token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="navbar__item">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/login"}>Login</NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/register"}>Register</NavLink>
                        </li>
                    </>
            }        </ul>
    )
}