import React from 'react' ;

class AddComponents extends React.Component{
    state ={
        title :'',
        salary : '',
    }
    
    
    handleChangetitleJob = (event) => {
        this.setState({
          title : event.target.value
        })
     }
    handleChangesalary = (event) => {
      this.setState({
        salary : event.target.value
      })}
    handleSubmit = (event) =>{
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
          alert('missing required information')
          return;
        }
        console.log('checkDataInput : ', this.state )
        this.props.addNewJobs({
          id : Math.floor(Math.random()*100),
          title : this.state.title,
          salary : this.state.salary
        })
        this.setState({
          title: '',
          salary :    ''
        })
      }

    render(){
        return(
            <form action="/action_page.php">
            <label htmlFor="fname">Job:</label><br/>
            <input type="text"  value={this.state.title}
              onChange={(event) => this.handleChangetitleJob(event) }
            /><br/>
            <label htmlFor="lname">Salary:</label><br/>
            <input type="text"  value={this.state.salary}
              onChange={(event) => this.handleChangesalary(event) }
            /><br/><br/>
             <input type="submit" 
             onClick={(event)=> this.handleSubmit(event)}
             />
          </form> 
        )
    }
}
export default AddComponents; 