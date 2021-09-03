import React, {useState} from 'react';

import {
    ListView,
    ListViewHidden,
    TodoText,
    TodoDate,
    HiddenButton,
    SwipedTodoText,
    colors
} from "../styles/appStyles";
import {SwipeListView} from "react-native-swipe-list-view";

import { Entypo } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';




const ListItems = ({todos, setTodos, handleTriggerEdit}) => {
    // For styling swipeed todo row
    const [swipedRow, setSwipedRow] = useState(null);

    const handleDeleteTodo = (rowMap, rowKey, index) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
        newTodos.splice(todoIndex, 1);


        AsyncStorage.setItem("storedTodos", JSON.stringify([newTodos])).then(()=> {
            setTodos(newTodos);
            
        }).catch(error => console.log(error));


    }

    return(

        <>
        
        {todos.length == 0 && <TodoText>  You have no tasks today</TodoText>}
        {todos.length != 0 && <SwipeListView
        data={todos}
        renderItem={(data) => {
            const RowText = data.item.key === swipedRow ? SwipedTodoText : TodoText; 

            return (
                <ListView
                
                underlayColor={colors.primary}
                onPress={() => {

                    handleTriggerEdit(data.item)


                }}
                >
                    <>
                        <RowText>{data.item.title}</RowText>
                        <TodoDate>{data.item.date}</TodoDate>
                    </>
                </ListView>
            )
            
        }}
        renderHiddenItem={(data, rowMap, index) =>{
            return(
            <ListViewHidden>
                <HiddenButton
                onPress={() => handleDeleteTodo(rowMap, data.item.key)}

                >
                    <Entypo name="trash" size={25} color={colors.primary}/>

                </HiddenButton>
            </ListViewHidden>)


        }}
        leftOpenValue={80}
        previewRowKey={"1"}
        previewOpenValue={80}
        previewOpenDelay={3000}
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
            flex: 1, paddingBottom: 30, marginBottom: 40
        }}


        // take a function with the current row key ad an argument, using this value to set the value of the swiped row.
        onRowOpen={(rowKey) => {
            setSwipedRow(rowKey);

        }}
        onRowClose={() =>{
            setSwipedRow(null);
        }}

        />}
        
        </>
    );
}

export default ListItems;