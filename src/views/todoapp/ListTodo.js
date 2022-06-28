import React from "react";
import "./ListTodo.scss" ;
import AddTodo from './AddTodo' ;
import {  toast } from 'react-toastify';
  
class ListTodo extends React.Component{
   state ={
    listTodos : [
        {id : 1, title : "Doing homework"},
        {id : 2, title : "Learn Laravel"},
        {id : 3, title : "Learn NodeJs"}
    ],
        editTodo :{}

    
   }
   addNewTodo =(todo)=>{
   // let currentListTodo = this.state.listTodos ;
    //currentListTodo.push(todo);
     this.setState({
        listTodos : [...this.state.listTodos,todo],
       // listTodos : currentListTodo 
     })
     toast.success(" success adding Todo !!")
   }
    handleDeleteTodo =(todo)=>{
        let currentTodos = this.state.listTodos ;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos : currentTodos 
        })
        toast.success("success deleting todo !!")
    }
    handleEditTodo =(todo)=>{
        let {editTodo, listTodos} = this.state ;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if(isEmptyObj === false && editTodo.id === todo.id ){
            let listTodoscopy = [...listTodos];
            
            
            let objIndex = listTodoscopy.findIndex((item => item.id === todo.id));


            console.log("Before update: ", listTodoscopy[objIndex])


            listTodoscopy[objIndex].title = editTodo.title
            this.setState({
                listTodos : listTodoscopy ,
                editTodo : {}
            })
            toast.success('success editing  !!!')
            return; 
        }
        this.setState({
            editTodo : todo
        })
    }
    handleOnChangeEditTodo =(event) =>{
        let editTodoCopy ={...this.state.editTodo};
        editTodoCopy.title = event.target.value ;
        this.setState({
            editTodo : editTodoCopy 
        })
    }
    render(){
        let {listTodos, editTodo} = this.state ;
        let isEmptyObj = Object.keys(editTodo).length === 0 ;
        return( 
            <div className='Listtodo-container'>
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
               <div className="listTodo-content">
                {listTodos && listTodos.length > 0 &&
                    listTodos.map((item,index) => {
                        return(
                            <div className=" list" key={item.id}>
                              {isEmptyObj === true ?    
                                <span>{index+1} -  {item.title} </span> 
                                : 
                                <>
                                {editTodo.id === item.id ?
                                    <span>
                                        {index + 1} - <input value = {editTodo.title}
                                            onChange={(event)=>this.handleOnChangeEditTodo(event)

                                            }
                                        />
                                    </span>
                                    :
                                    <span>
                                        {index+1} -  {item.title} 
                                    </span>}
                                </>
    }
                            <button className="edit"
                                onClick={()=> this.handleEditTodo(item)}
                            >
                                {isEmptyObj === false && editTodo.id === item.id ?
                                'Save' : 'Edit  '
                            }
                                
                                </button>
                            <button className="delete"
                                onClick={()=> this.handleDeleteTodo(item)}
                            >Delete</button>
                        </div>
                        )
                    })
                }
                   
                    
               </div>
            </div>
        )
    }
}
export default ListTodo ;