import { useState } from "react";

function useForm(initialState) {
    const [value, setValue] = useState(initialState)

    const handleValueChange = (e) => {
        setValue(e.target.value)
    }

    return [
        value,
        handleValueChange
    ]

}

export default useForm