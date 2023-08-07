import { useState } from "react"
import { useUser } from "../context/UserContext"
function Form() {
    const { setUserChange } = useUser()
    const [name, setName] = useState("")

    const onchangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeName = () => {
        setUserChange(name)
    }
    return (
        <>
            <div style={{ marginTop: 20 }}>
                <input value={name} onChange={onchangeName} />

                <div style={{ marginTop: 10 }}>
                    <button onClick={handleChangeName}>
                        Ubah Nama
                    </button>
                </div>
            </div>
        </>
    )
}

export default Form