import React, { useCallback ,useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const TodoInsert = ({onInsert}) => {
    // input에 입력하는 값 관리
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    },[]);

    // onSubmit 이벤트 설정(onSubmit으로 해야 Enter시에도 발생) - onInsert함수에 관리하는 값 넣어서 호출
    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue(''); // value값 초기화
            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        <TodoInsertWrapper onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder='할 일을 입력하세요'
            value={value}
            onChange={onChange}
            />
            <button type="submit"><MdAdd /></button>
        </TodoInsertWrapper>
    );
};

const TodoInsertWrapper = styled.form`
    display: flex;
    background: #f0f0f0;
    input{
        background: none;
        outline: none;
        border: none;
        padding: 0.5rem;
        font-size: 1.125rem;
        color: #333;
        line-height: 1.5;
        &::placeholder{
            color: #888;
        }
        flex: 1;
    }

    button{
        background: #888;
        outline: none;
        border: none;
        padding: 0 1rem;
        font-size: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f1f1f1;
        transition: all .2s ease-in;
        cursor: pointer;
        &:hover{
            background: #666;
            color: #fff;
        }
    }
`;

export default TodoInsert;