import React from 'react' ;
import ChildComponent from './ChildComponent' ;
import Addcomponents from './AddComponents';
class Mycomponents extends React.Component{

    state = {
        
        arrJobs : [
          {id : '01', title : 'Fresher', salary : ' 200'},
          {id : '02', title : 'Tester', salary : ' 400'},
          {id : '03', title : 'Developer', salary : ' 500'}
        ]
     }
     addNewJobs = (job) =>{
       console.log('check job ', job)
       //let currenJobs = this.state.arrJobs;
      //currenJobs.push(job)
       this.setState({
          arrJobs : [...this.state.arrJobs, job ]
        // arrJobs : currenJobs

        })
     }
     deleteAJob =(job)=>{
      let currenJobs = this.state.arrJobs ;
      currenJobs = currenJobs.filter(item => item.id !== job.id)
      this.setState({
        arrJobs : currenJobs  
      })
     }
     render() {
      console.log('>>> call render : ',this.state)
     return (
           <>
           <Addcomponents
           addNewJobs={this.addNewJobs}
           />
          
          <ChildComponent 
          deleteAJob={this.deleteAJob}
          arrJobs={this.state.arrJobs}
          />
          
            </>
        )
    }
  }
export default Mycomponents ;