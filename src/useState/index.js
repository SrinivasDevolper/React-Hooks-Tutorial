import { useState } from "react";

import "./index.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [IsEditingBtn, setIsEditingBtn] = useState({
    editId: "",
    isEditBtn: true,
  });
  const [addItem, setAddItem] = useState({
    todoItem: "",
    todoId: "",
  });

  const addChangeInput = (e) => {
    setAddItem({
      ...addItem,
      todoItem: e.target.value,
      todoId: "",
    });
  };

  const addBtnClicked = (e) => {
    e.preventDefault();
    let newTodoItem = {
      todoItem: addItem.todoItem,
      todoId: new Date().getTime().toLocaleString(),
    };
    setTodoList([...todoList, newTodoItem]);
    setAddItem({
      todoItem: "",
      todoId: "",
    });
  };
  const onDeleteBtn = (todoId) => {
    const filterTodoList = todoList.filter(
      (eachTodo) => eachTodo.todoId !== todoId
    );
    setTodoList(filterTodoList);
  };
  const onEditBtn = (todoId) => {
    setIsEditingBtn({
      ...IsEditingBtn,
      editId: todoId,
      isEditBtn: false,
    });
    const findTodoItem = todoList.find(
      (findTodo) => findTodo.todoId === todoId
    );
    setAddItem({
      ...addItem,
      todoItem: findTodoItem.todoItem,
      todoId: todoId,
    });
  };
  const EditBtnClicked = (e) => {
    e.preventDefault();
    const editableList = todoList.map((eachTodo) => {
      if (eachTodo.todoId === IsEditingBtn.editId) {
        return {
          todoItem: addItem.todoItem,
          todoId: IsEditingBtn.editId,
        };
      } else {
        return eachTodo;
      }
    });
    setTodoList(editableList);
    setAddItem({
      ...addItem,
      todoItem: "",
      todoId: "",
    });
    setIsEditingBtn({
      ...IsEditingBtn,
      editId: "",
      isEditBtn: true,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="enter some text..."
          onChange={addChangeInput}
          value={addItem.todoItem}
        />
        {IsEditingBtn.isEditBtn ? (
          <button onClick={addBtnClicked}>Add</button>
        ) : (
          <button onClick={EditBtnClicked}>Edit</button>
        )}
      </form>
      {todoList.length === 0 && <h4>There is no items in list</h4>}
      <ul>
        {todoList.map((eachItem) => {
          const { todoItem, todoId } = eachItem;
          console.log(todoId, "map todoId");
          return (
            <li key={todoId}>
              <span>
                <strong>{todoItem}</strong>
              </span>
              <button
                onClick={() => {
                  onEditBtn(todoId);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  onDeleteBtn(todoId);
                }}
              >
                Del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
