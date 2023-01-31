import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { ref, update } from '@firebase/database';
import { Col, Row } from 'react-bootstrap';
import { uid } from 'uid';

const Todo = ({
  todo,
  uidd,
  toggleCompletedHandler,
  deleteHandler,
  completed,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <li className="list-group-item">
      <Row>
        <Col>
          <i
            className={!completed ? 'bi bi-square' : 'bi bi-check-square'}
            onClick={() =>
              toggleCompletedHandler({ id: uidd, completed: !completed })
            }
          />
          <span className={!completed ? 'todo-text' : 'todo-text-done'}>
            {todo}
          </span>
        </Col>

        <Col xs={1} className="d-flex justify-content-end align-items-center">
          <i className="bi bi-trash-fill" onClick={() => deleteHandler(uidd)} />
        </Col>
      </Row>
    </li>
  );
};

export default Todo;
