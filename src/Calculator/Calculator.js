import React, {useState} from 'react'



export const Calculator = () => {
    
    const [number, setNumber] = useState(0); 
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("Please Enter Number");



    function add() {
        setResult(parseInt(number) + parseInt(number2))
    }

    function subtract() {
        setResult((number) - (number2))
    }

    function clear() {
        setResult(0)
        setNumber(0)
        setNumber2(0)
        setInput("Please enter number")
    }

    

    return (
        <div>
            Calc

            <div>
                <div>
                    <input placeholder = { input } onChange={e => setNumber(e.target.value) }></input>
                    <input placeholder = {"Please enter number"} onChange={e => setNumber2(e.target.value)}></input>
                </div>
                <span>
                    <button onClick={add}>+</button><button onClick={subtract}>-</button>
                </span>
                <div>=</div>

                {result}
                
                
                
            </div>
        </div>
    )
}
