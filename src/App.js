import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from 'components/TodoTemplate';
import Today from 'components/Today';
import TodoInsert from 'components/TodoInsert';
import TodoList from 'components/TodoList';

const App = () => {
  // useState로 todos 상태 정의
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : 'Ex1)) 상단에서 추가한 할 일이 표시됩니다.',
      checked : true,
    },
    {
      id : 2,
      text : 'Ex2)) 할 일 완료시 왼쪽의 원을 클릭하세요.',
      checked : true,
    },
    {
      id : 3,
      text : 'Ex3)) 제거는 오른쪽의 버튼을 클릭하세요.',
      checked : false,
    }
  ]);

  // 고유값을 가질 id생성
  const nextId = useRef(4);

  // onInsert함수 - todos배열에 새 객체 추가
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId++
    },
    [todos]
  );

  // 항목 제거 - filter함수 이용해 todos배열에서 id로 항목 제거
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  // onToggle버튼 이용한 check
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => 
          todo.id === id ? {...todo, checked : !todo.checked} : todo,
        ),
      );
    },
    [todos]
  );

  return (
    <div>
      <TodoTemplate>
        <Today />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;