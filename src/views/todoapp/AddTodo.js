import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
    state={
        title :''
    }
    handleOnchangeTitle =(event)=>{
        this.setState({
            title:event.target.value  
        })
    }
    handleOnClickTodo=()=>{
        if(!this.state.title){
            toast.warning("missing information !!!")
            return; 
        }
        let todo ={
            id : Math.floor(Math.random()*100),
            title : this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title :''
        })
    }
    render(){
        let {title} = this.state;
        return(
            <div className='addTodo'>
                    <input type="text" value ={title}
                        onChange={(event) => this.handleOnchangeTitle(event)
                        }
                    />
                    <button className="add" type="button"
                    onClick={()=> this.handleOnClickTodo()}
                    >Add</button>
                </div>
        )
        }
}
export default AddTodo ;