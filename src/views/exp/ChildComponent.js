import React from 'react' ;
import './Demo.scss';
class ChildComponent extends React.Component{

    state ={
        showJob : false 
    }
    handleShowHide =() => {
      this.setState({
        showJob : !this.state.showJob 
      })
    } 
    handleOnClickDelete =(job)=>{
      this.props.deleteAJob(job) 
    }

    render() {
      
    let { arrJobs } = this.props ;
    let {showJob} = this.state ;
    
     return (
           <>
           {showJob === false ?
                <div>
                  <button className='show'
                  onClick={() => this.handleShowHide()}>
                    show</button></div>  
            : 
            <>
              <div className='jobsList'>
            {
              arrJobs.map((item,index) => {
                return(
                <div key={item.id}>
                  {item.title} - {item.salary}$ <></>  
                  <span onClick={()=>this.handleOnClickDelete(item)}>x</span>
                </div>  
                )
              })
            }

              </div>
              <div><button onClick={() => this.handleShowHide()} >hide</button></div>
            </>
            }
            </>
        )
    }
  }

 /*const ChildComponent =(props) => {
  console.log(' check child props :',props)
  let { arrJobs } = props ;
  return (
    <>
  
   <div className='jobsList'>
     {
       arrJobs.map((item,index) => {
        if(item.salary >= 500){
          return(
            <div key={item.id}>
            {item.title} - {item.salary} $
            </div>  
         )}
       })
     }

   </div>
     </>
 )
 }*/
export default ChildComponent ;