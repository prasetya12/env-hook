import { useState } from "react"
import useForm from "../hooks/useForm";

function Register() {

    const [fullname, handleChangeFullname] = useForm("")
    const [name, handleChangeName] = useForm("")
    const [age, handleChangeAge] = useForm(0)
    const [address, handleChangeAddress] = useForm("")



    // const [fullname, setFullname] = useState("");
    // const [name, setName] = useState("");
    // const [age, setAge] = useState(0);

    // const onChangeFullname = (e) => {
    //     setFullname(e.target.value)
    // }

    // const onChangeName = (e) => {
    //     setName(e.target.value)
    // }

    // const onChangeAge = (e) => {
    //     setAge(e.target.value)
    // }


    return (
        <>
            <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
                <div>
                    <label>Fullname</label>
                    <div style={{ marginTop: 10 }}>
                        <input type="text" value={fullname} onChange={handleChangeFullname} />
                    </div>
                </div>
                <div>
                    <label>Name</label>
                    <div style={{ marginTop: 10 }}>
                        <input type="text" value={name} onChange={handleChangeName} />
                    </div>
                </div>
                <div>
                    <label>Age</label>
                    <div style={{ marginTop: 10 }}>
                        <input type="text" value={age} onChange={handleChangeAge} />
                    </div>
                </div>
                <div>
                    <label>Address</label>
                    <div style={{ marginTop: 10 }}>
                        <input type="text" value={address} onChange={handleChangeAddress} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register