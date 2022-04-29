import React from 'react';
import TodoListItem from 'components/TodoListItem';
import styled from 'styled-components';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <TodoListWrapper>
            {/* App.js에서 받아온 todos배열 map함수 통해 TodoListItem으로 이뤄진 배열로 변환 */}
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </TodoListWrapper>
    );
};

const TodoListWrapper = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow: hidden;
`;

export default TodoList;