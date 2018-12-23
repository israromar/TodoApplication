import React, {Component} from 'react';
import TodoList from './TodoList';
class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state={items:[], text:''};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return(
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input 
                        id="new-todo"
                        onChange={(e)=>this.handleChange(e)}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length+1}
                    </button>
                </form>
            </div>
        );
    }
    handleChange(e){
        console.log('Value: -> ', e.target.value);
    this.setState({text: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state=>({
            items: state.items.concat(newItem),
            text:''
        }));
    }
}
export default TodoApp;