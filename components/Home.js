import React, {useState} from "react";
import {Text} from 'react-native';

//components
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from './InputModal';





const Home = () => {

    // initial todos
    const initialTodos = [{
        title: "Gå ut med icco",
        date: "Tors, 02 Sep 2021 17:28:10 GMT",
        key: "null"
    }, {
        title: "Laga mat",
        date: "Tors, 02 Sep 2021 17:28:10 GMT",
        key: "null"
    },
    {
        title: "Spela Conan Exiles",
        date: "Tors, 02 Sep 2021 17:28:10 GMT",
        key: "null"
    }]

    const [todos, setTodos] = useState(initialTodos);

    //clear all todos

    const handleClearTodos = () => {
        setTodos([]);
    }

    //  Modal visibility 
    const[modalVisible, setModalVisible] = useState(false);
    const[todoInputValue, setTodoInputValue] = useState();

    //function to add a new task
    const handleAddTodo = (todo) => {

        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setModalVisible(false);


    }

    //Editing

    const [todoToBeEdited, setTodoTobeEdited] = useState(null);

    const handleTriggerEdit = (item) => {
        setTodoTobeEdited(item);
        setModalVisible(true);
        setTodoInputValue(item.title);
    }

    const handleEditTodo = (editedTodo) => {

        const newTodos = [...todos];
        const todoIndex= todos.findIndex((todo) => todo.key === editedTodo.key);
        newTodos.splice(todoIndex, 1, editedTodo);
        setTodos(newTodos);
        setTodoTobeEdited(null);
        setModalVisible(false);

    }

    return(
        <>
            <Header handleClearTodos={handleClearTodos} />
            <ListItems
            todos={todos}
            setTodos={setTodos}
            handleTriggerEdit={handleTriggerEdit} 
       />

       <InputModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
            handleAddTodo={handleAddTodo}
            todoToBeEdited={todoToBeEdited}
            setTodoTobeEdited={setTodoTobeEdited}
            handleEditTodo={handleEditTodo}
            todos={todos}
       />
       </>
    );
}
export default Home;