import { useState } from "react";


const UseStateHook = () => {

    const [name, setName] = useState('ORIMA Kervens')
    const [age, setAge] = useState(24)

    const handleData = (e, name, age) => {
        setName(name)
        setAge(age)
    }


    const [nombre, setNombre] = useState(0)

    const handleIncrease = (e) => {
        setNombre(nombre + 1)
    }

    const handleDecrease = (e) => {
        if (nombre >= 0)
            setNombre(nombre - 1)

    }

    return (
        <>
            <h2 style={{
                marginTop: '10px'
            }}>UseState react to change the status of a component</h2>
            <div>
                My name is {name} i'm {age} years old!
            </div>
            <button onClick={(e) => handleData(e, 'Keke', 23)}>
                change name and age
            </button>



            <br />
            <br />
            <button onClick={handleIncrease}>+ increase   </button>
            <button onClick={handleDecrease}>- decrease   </button>

            {nombre >= 0 ? <div>Value of number {nombre}</div> : 'nomber cannot be negative!!'}
        </>
    )
}

export default UseStateHook;