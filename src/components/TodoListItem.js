import React from 'react';
import styled from 'styled-components';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    return (
        <TodoItemWrapper>
            {/* checked가 true면 check표시되게 : false면 빈원으로 표시 */}
            <CheckBox 
            className={cn('checkbox', {checked})}
            onClick={() => onToggle(id)}
            >
                {checked? <BsCheckCircleFill /> : <BsCircle />}
                <div className='text'>{text}</div>
            </CheckBox>

            {/* props로 받아 온 onRemove함수 통해 클릭시 제거 */}
            <Remove onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </Remove>
        </TodoItemWrapper>
    );
};

const TodoItemWrapper = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    &:nth-child(even){
        background: #f8f9fa;
    }
    & + &{
        border-top: 1px solid #dee2e6;
    }
`;

const CheckBox = styled.div`
    cursor: pointer;
    display: flex;
    flex: 1;
    align-items: center;
    svg{
        font-size: 1.2rem;
    }
    .text{
        margin-left: 0.8rem;
        flex: 1;
    }
    &.checked{
        svg{
            color: skyblue;
        }
        .text{
            color: #adb5bd;
            text-decoration: line-through;
        }
    }
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: coral;
    cursor: pointer;
    &:hover{
        color: red;
        transition: all .3s ease-in;
    }
`;


export default TodoListItem;