import { format, formatDistanceToNow } from 'date-fns';
import React from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';

export default class App extends React.Component {
  todoList = [];

  state = {
    todoList: this.todoList,
  };

  onDeleted = (id) => {
    const idxD = this.todoList.findIndex((el) => el.id === id);
    const beforeD = this.todoList.slice(0, idxD);
    const afterD = this.todoList.slice(idxD + 1);

    this.todoList = [...beforeD, ...afterD];

    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);

      const before = todoList.slice(0, idx);
      const after = todoList.slice(idx + 1);

      return {
        todoList: [...before, ...after],
      };
    });
  };

  onComplited = (id) => {
    const idxD = this.todoList.findIndex((el) => el.id === id);
    this.todoList[idxD] = {
      ...this.todoList[idxD],
      complited: !this.todoList[idxD].complited,
    };

    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);
      const newArr = [...todoList];
      newArr[idx] = {
        ...this.todoList[idxD],
      };

      return {
        todoList: newArr,
      };
    });
  };

  addItem = (text, min, sec) => {
    const createTime = new Date();

    this.todoList = [
      ...this.todoList,
      {
        id: this.todoList.length === 0 ? 1 : Math.max(...this.todoList.map((el) => el.id)) + 1,
        text,
        complited: false,
        createdAt: `${
          createTime.getMonth() + 1
        }.${createTime.getDate()}.${createTime.getFullYear()} ${createTime.getHours()}:${createTime.getMinutes()}:${createTime.getSeconds()}`,
        editing: false,
        timer: {
          sec: Number(sec),
          min: Number(min),
          createdAt: new Date().getTime(),
          finishAt: new Date().getTime() + Number(sec) * 1000 + Number(min) * 60 * 1000,
          currentAt: new Date().getTime(),
          difference: format(new Date(Number(sec) * 1000 + Number(min) * 60 * 1000), 'mm:ss'),
          differenceMs: new Date(Number(sec) * 1000 + Number(min) * 60 * 1000),
          finished: false,
          stopped: false,
        },
      },
    ];
    this.setState({
      todoList: this.todoList,
    });
  };

  onTick = (id) => {
    const idxD = this.todoList.findIndex((el) => el.id === id);
    this.todoList[idxD] = {
      ...this.todoList[idxD],
      timer: {
        ...this.todoList[idxD].timer,
        currentAt: new Date().getTime(),
        finished: new Date().getTime() >= this.todoList[idxD].timer.finishAt,
        difference: format(new Date(this.todoList[idxD].timer.finishAt - new Date().getTime()), 'mm:ss'),
        differenceMs: new Date(this.todoList[idxD].timer.finishAt - new Date().getTime()).getTime(),
      },
    };

    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);
      const newArr = [...todoList];
      newArr[idx] = {
        ...this.todoList[idxD],
      };

      return {
        todoList: newArr,
      };
    });
  };

  onPause = (id) => {
    const idxD = this.todoList.findIndex((el) => el.id === id);
    this.todoList[idxD] = {
      ...this.todoList[idxD],
      timer: {
        ...this.todoList[idxD].timer,
        stopped: true,
      },
    };
    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);
      const newArr = [...todoList];
      newArr[idx] = {
        ...this.todoList[idxD],
      };

      return {
        todoList: newArr,
      };
    });
  };

  onPlay = (id) => {
    const idxD = this.todoList.findIndex((el) => el.id === id);
    this.todoList[idxD] = {
      ...this.todoList[idxD],
      timer: {
        ...this.todoList[idxD].timer,
        finishAt: new Date().getTime() + this.todoList[idxD].timer.differenceMs,
        stopped: false,
      },
    };
    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);
      const newArr = [...todoList];
      newArr[idx] = {
        ...this.todoList[idxD],
      };

      return {
        todoList: newArr,
      };
    });
  };

  onFilter = (key) => {
    switch (key) {
      case 'All':
        this.setState({
          todoList: this.todoList,
        });
        break;

      case 'Active':
        this.setState({
          todoList: this.todoList.filter((el) => !el.complited),
        });
        break;

      case 'Completed':
        this.setState({
          todoList: this.todoList.filter((el) => el.complited),
        });
        break;

      default:
        break;
    }
  };

  activeCounter = () => {
    return this.todoList.filter((el) => !el.complited).length;
  };

  dateUpdate = () => {
    if (this.todoList.length) {
      this.setState(() => {
        return {
          todoList: this.todoList.map((el) => {
            return {
              ...el,
              createdAt: formatDistanceToNow(new Date('06.05.2000 00:00:00'), {
                includeSeconds: true,
              }),
            };
          }),
        };
      });
    }
  };

  onEdit = (id) => {
    const idxD = this.todoList.findIndex((el) => el.id === id);
    this.todoList[idxD] = {
      ...this.todoList[idxD],
      editing: !this.todoList[idxD].editing,
    };

    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);
      const newArr = [...todoList];
      newArr[idx] = {
        ...this.todoList[idxD],
      };

      return {
        todoList: newArr,
      };
    });
  };

  onEditTask = (id, text) => {
    const idxD = this.todoList.findIndex((el) => el.id === id);
    this.todoList[idxD] = {
      ...this.todoList[idxD],
      text,
      editing: !this.todoList[idxD].editing,
    };

    this.setState(({ todoList }) => {
      const idx = todoList.findIndex((el) => el.id === id);
      const newArr = [...todoList];
      newArr[idx] = {
        ...this.todoList[idxD],
      };

      return {
        todoList: newArr,
      };
    });
  };

  onClearComplete = () => {
    this.todoList = this.todoList.filter((el) => !el.complited);

    this.setState({
      todoList: this.todoList,
    });
  };

  render() {
    const { todoList } = this.state;
    // console.log(format(new Date().getTime() + 10000, 'mm:ss'));

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          <NewTaskForm addItem={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            dateUpdate={this.dateUpdate}
            todoList={todoList}
            onDeleted={this.onDeleted}
            onComplited={this.onComplited}
            onEdit={this.onEdit}
            onEditTask={this.onEditTask}
            onTick={this.onTick}
            onPause={this.onPause}
            onPlay={this.onPlay}
          />

          <Footer
            onClearCompleted={this.onClearCompleted}
            onFilter={this.onFilter}
            onClearComplete={this.onClearComplete}
            itemsCount={this.activeCounter()}
          />
        </section>
      </section>
    );
  }
}
