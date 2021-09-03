import React from 'react';
import {Modal} from 'react-native';
import {
    ModalButton,
    ModalContainer,
    ModalView,
    StyledInput,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors
} from './../styles/appStyles';

import {AntDesign} from '@expo/vector-icons';

const InputModal = ({
        modalVisible,
        setModalVisible,
        todoInputValue,
        setTodoInputValue,
        handleAddTodo,
        todoToBeEdited,
        setTodoToBeEdited,
        handleEditTodo,
        todos
        }) => {

    const handleCloseModal = () => {
        setModalVisible(false);
        setTodoInputValue("");
        setTodoToBeEdited => (null);
        
    };

    const handleSubmit = () => {

        if(!todoToBeEdited){
            handleAddTodo({
                title: todoInputValue,
                date: new Date().toUTCString(),
                key: `${(todos[todos.length-1] && JSON.stringify(todos[todos.length -1].key))}`
            });

        }else{
            handleEditTodo({
                title: todoInputValue,
                date: todoToBeEdited.date,
                key: todoToBeEdited.key

            })
        }

        setTodoInputValue("");
       
       
    };

    return(
        <>
        <ModalButton onPress={() => {setModalVisible(true)}}>
            <AntDesign name="plus" size={30} color={colors.secondary}/>        
            </ModalButton>

            <Modal
            // the visible property will take a boolean value which will determine when & when not to show the modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCloseModal}

            >
                <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                        <HeaderTitle>Tasks</HeaderTitle>
                        <AntDesign name="edit" size={30} color={colors.tertiary}/>
                    </ModalIcon>

                    <StyledInput
                        placeholder="Add a task"
                        pladeholderTextColor={colors.secondary}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInputValue(text)}
                        value={todoInputValue}
                        onSubmitEditing={handleSubmit}
                    />

                    <ModalActionGroup>
                        <ModalAction color={colors.primary} onPress={handleCloseModal}>
                            <AntDesign name="close" size={28} color={colors.tertiary}/>
                            </ModalAction >

                        <ModalAction color= {colors.tertiary} onPress={handleSubmit}>
                        <AntDesign name="check" size={28} color={colors.secondary}/>  
                        </ModalAction>
                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    );
}

export default InputModal;