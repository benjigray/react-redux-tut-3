import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content: ''
    }

    onSubmit = (e) => {
        e.preventDefault();        
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.onChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo;