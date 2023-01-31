import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { uid } from 'uid';
import { auth, db } from '../firebase';
import { set, ref, onValue, remove, update } from '@firebase/database';
import Todo from './Todo';
import './Homepage.css';

const Homepage = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState(null);
  const searchInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
          setTodos([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map(todo => {
              setTodos(oldArray => [...oldArray, todo]);
            });
          }
        });
      }

      if (!user) {
        navigate('/');
      }
    });
  }, [db]);

  // search todo
  const searchHandler = () => {
    setFilteredTodos(
      todos.filter(todo =>
        todo.todo.includes(searchInputRef.current.value.toLowerCase())
      )
    );
  };

  // add todo
  const writeToDatabase = async e => {
    e.preventDefault();
    if (todo === '') {
      alert('Please enter a valid todo');
      return;
    }
    const uidd = uid();
    await set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      todo: todo,
      uidd: uidd,
      completed: false,
    });

    setTodo('');
  };

  // delete todo
  const deleteHandler = async uid => {
    await remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
  };

  // // update
  const toggleCompletedHandler = async todo => {
    await update(ref(db, `/${auth.currentUser.uid}/${todo.id}`), {
      ...todo,
      completed: todo.completed,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-8 mx-auto">
          <div className="card my-5">
            <h5 className="card-header bg-primary text-white">Todo List</h5>
            {todos ? (
              <div className="card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="search"
                    ref={searchInputRef}
                    onChange={searchHandler}
                    className="form-control"
                    placeholder="Search todo"
                  />
                </div>
                {filteredTodos === null || !searchInputRef.current.value
                  ? todos.map((todo, index) => (
                      <ul className="list-group mb-3" key={index}>
                        <Todo
                          todo={todo.todo}
                          uidd={todo.uidd}
                          completed={todo.completed}
                          deleteHandler={deleteHandler}
                          toggleCompletedHandler={toggleCompletedHandler}
                        />
                      </ul>
                    ))
                  : filteredTodos.map((todo, index) => (
                      <ul className="list-group mb-3" key={index}>
                        <Todo
                          todo={todo.todo}
                          uidd={todo.uidd}
                          completed={todo.completed}
                          deleteHandler={deleteHandler}
                          toggleCompletedHandler={toggleCompletedHandler}
                        />
                      </ul>
                    ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border m-5 " />
              </div>
            )}
            <div className="card-footer">
              <form id="form" onSubmit={writeToDatabase}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="todo"
                    placeholder="Add new todo item"
                    value={todo || ''}
                    onChange={e => setTodo(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-plus" /> Add +
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
