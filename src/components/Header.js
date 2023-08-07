import Logo from "./Logo"
import Navbar from "./Navbar"

function Header() {
    return (
        <>
            <div style={{ display: 'flex', height: '60px', backgroundColor: 'blue', color: 'white', justifyContent: 'space-between', alignItems: 'center' }}>
                <Logo />
                <Navbar />

            </div>
        </>
    )
}

export default Header