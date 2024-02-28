import './App.css';
import { useRef, useState } from "react";

function App() {
    const [x, setx] = useState([])

    const inputRef = useRef()

    const add = () => {
        const value = inputRef.current.value

        // console.log(value)
        // setx([value])//override
        // setx([...x, value])

        const newData = { completed: false, value }
        setx([...x, newData])

        inputRef.current.value = ""
    }

    const itemDone = (index) => {
        const newx = [...x]
        // const newx=x.slice()
        x[index].completed = !x[index].completed

        setx(newx)
    }
    // console.log(x)

    const toDelet = (index) => {
        const newx = [...x]
        newx.splice(index, 1)
        setx(newx)
    }
    return (
        <div className="App">
            <h2>To Do List</h2>

            <ul>
                {
                    // x.map((item)=>{
                    //     return <li> {item} </li>
                    // })
                    // x.map((item)=>{
                    //     return <li> {item.value} </li>
                    // })
                    x.map(({ value, completed }, index) => {
                        return <div className='del'>
                            <li className={completed ? "diffStyle" : ""} onClick={() => itemDone(index)}> {value} </li>
                            <span onClick={() => toDelet(index)}>X</span>
                        </div>
                    })
                }

            </ul>
            <input ref={inputRef} placeholder='Enter new task'></input>
            <button onClick={add}>Add</button>
        </div>
    );
}

export default App;
