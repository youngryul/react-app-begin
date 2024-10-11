import {useState} from "react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);

    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault(); // 전송 후 새로고침되는 걸 막아줌

        if(toDo === "") {
            return;
        }
        setTodos((currentArray) => [toDo, ...currentArray])
        setTodo("");
    }

    return (
        <div>
            <h1>My To Dos({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type="text"
                    placeholder="Write your to do"
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );

}


export default App;
