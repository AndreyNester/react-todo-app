import React from 'react';

import './NewTaskForm.css';

export default class NewTaskForm extends React.Component {
  state = {
    text: '',
    min: '',
    sec: '',
  };

  onTextChanged = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        text: e.target.value,
      };
    });
  };

  onMinChanged = (e) => {
    if (e.target.value >= 0 && e.target.value <= 60) {
      this.setState((prevState) => {
        return {
          ...prevState,
          min: e.target.value,
        };
      });
    }
  };

  onSecChanged = (e) => {
    if (e.target.value >= 0 && e.target.value <= 60) {
      this.setState((prevState) => {
        return {
          ...prevState,
          sec: e.target.value,
        };
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { text, min, sec } = this.state;
    const { addItem } = this.props;

    if (text && min && sec) {
      addItem(text, min, sec);

      this.setState((prevState) => {
        return {
          ...prevState,
          text: '',
          sec: '',
          min: '',
        };
      });
    }
  };

  onKeyUp = (e) => {
    if (e.code === 'Enter') {
      this.onSubmit(e);
    }
  };

  render() {
    const { text, min, sec } = this.state;

    return (
      <form
        className="new-todo-form"
        onSubmit={(e) => {
          this.onSubmit(e);
        }}
      >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => {
            this.onTextChanged(e);
          }}
          onKeyUp={(e) => {
            this.onKeyUp(e);
          }}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={(e) => {
            this.onMinChanged(e);
          }}
          onKeyUp={(e) => {
            this.onKeyUp(e);
          }}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={(e) => {
            this.onSecChanged(e);
          }}
          onKeyUp={(e) => {
            this.onKeyUp(e);
          }}
        />
      </form>
    );
  }
}
