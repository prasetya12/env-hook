import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react"

function Profile() {
    const navigate = useNavigate();

    const { isLogin } = useAuth()

    useEffect(() => {
        if (!isLogin) {
            navigate('/login')

        }
    }, [isLogin])
    return (
        <>
            <div>Page Profile</div>
        </>
    )
}

export default Profile