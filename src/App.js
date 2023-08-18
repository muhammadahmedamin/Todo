import logo from './logo.svg';
import './App.css';
import { useState } from "react"


function App() {
  const [text, retext] = useState("")
  const [todo, setTodo] = useState([])
  const [index, setindex] = useState()


  let print = () => {
    if (index) {

      todo[index] = text
      setTodo([...todo])

    } else {
      setTodo([...todo, text])

    }

    retext("")


  }

  let remove = (x, id) => {
    //  console.log(x)
    const todo2 = [...todo]
    todo2.splice(id, 1)

    setTodo(todo2)

  }

  let edit = (x, i) => {
    setindex([i])
    retext(x)
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* <p>{text}</p> */}
        <h3>Todo </h3><span> <input placeholder="Enter the todo" className="input" onChange={e => retext(e.target.value)} value={text} />
          <button onClick={print} className="btn2">Add+</button>
        </span>

        <header>
          <ul>
            {todo.map((x, i) =>
              <li key={i} id={i} >{x} <button onClick={() => remove(x, i)} className='btn'>X</button> <button onClick={() => edit(x, i)} className='btn'>Edit</button> </li>
            )}
          </ul>
        </header>

      </header>
    </div>
  );
}

export default App;