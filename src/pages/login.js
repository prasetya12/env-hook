import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const { handleButtonLogin, isLogin, error } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassowrd] = useState('')

    const onLogin = () => {
        handleButtonLogin(username, password)
    }

    useEffect(() => {
        if (isLogin) {
            navigate('/')
        }
    }, [isLogin])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
                <div style={{ color: 'red', marginBottom: 10 }}>
                    {error ? (<div>{error}</div>) : (<></>)}
                </div>
                <div>
                    <label>
                        Username
                    </label>
                    <div>
                        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div style={{ marginTop: 10 }}>
                    <label>
                        Password
                    </label>
                    <div>
                        <input placeholder="Password" onChange={(e) => setPassowrd(e.target.value)} value={password} type="password" />
                    </div>
                </div>
                <div style={{ marginTop: 10 }}>
                    <button onClick={onLogin}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login