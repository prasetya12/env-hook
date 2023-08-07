import Header from "../components/Header"
import Body from "../components/Body"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

import { useEffect, useState } from "react"
function Home() {
    const navigate = useNavigate();

    const { isLogin } = useAuth()

    useEffect(() => {
        if (!isLogin) {
            navigate('/login')

        }
    }, [isLogin])
    return (
        <>
            <Body />
        </>
    )
}

export default Home