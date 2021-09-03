import React, {useState} from "react";
import {Text} from 'react-native';

import Header from "./Header";
//components
import ListItems from "./ListItems";






const Home = () => {

    // initial todos
    const initialTodos = [{
        title: "Gå ut med icco",
        date: "Tors, 02 Sep 2021 17:28:10 GMT",
        key: "1"
    }, {
        title: "Laga mat",
        date: "Tors, 02 Sep 2021 17:28:10 GMT",
        key: "2"
    },
    {
        title: "Spela Conan Exiles",
        date: "Tors, 02 Sep 2021 17:28:10 GMT",
        key: "3"
    }]

    const [todos, setTodos] = useState(initialTodos);

    //clear all todos

    const handleClearTodos = () => {
        setTodos([]);
    }

    return(
        <>
       <Header handleClearTodos={handleClearTodos} />
       <ListItems
       todos={todos}
       setTodos={setTodos}
       />
       </>
    );
}
export default Home;