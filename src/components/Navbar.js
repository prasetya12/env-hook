import { useEffect, useState } from "react";
import Menu from "./Menu"
import Profile from "./Profile"
import { useLocation } from 'react-router-dom'
function Navbar() {
    const location = useLocation();
    const [label, setLabel] = useState('')
    const navItem = [{
        path: "/",
        label: "Home"
    }, {
        path: "/profile",
        label: "Profile"
    }]

    useEffect(() => {
        const dataNav = navItem.find((item) => item.path === location.pathname)
        if (dataNav) {
            setLabel(dataNav.label)
        }
    }, [location])


    return (
        <div style={{ display: 'flex', gap: 10 }}>
            <div>
                {label}
            </div>
            <Menu />
            <Profile />

        </div>
    )
}

export default Navbar