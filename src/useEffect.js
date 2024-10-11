import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all the time");
    useEffect(() => {
        console.log("CALL THE API...");
    }, []); // 처음 한번만 실행
    useEffect(() => {
        if( keyword !== "" && keyword.length > 5 ){
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]); // keyword가 변화할 때마다 실행
    return (
        <div>
            <input
                value={keyword}
                input="text"
                onChange={onChange}
            >
            </input>
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );

}


export default App;
