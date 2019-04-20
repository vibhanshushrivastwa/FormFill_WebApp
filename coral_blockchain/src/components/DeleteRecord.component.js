import React ,{Component} from "react" ;
import axios from 'axios';
export default class DeleteRecord extends Component{
    constructor(props) {
        super(props);

        this.onSubmit=this.onSubmit.bind(this);    
        this.state = {
            form_deleted:false
        }
    }   

    onSubmit(e){
        e.preventDefault();
        console.log(`Record deleted`);
        axios.delete('http://localhost:3306/userData/:id')
            alert("Record Deleted!") ;
        this.setState({
            form_deleted: false
        })


    }
  
    render() {
        return (
           <div  >
               <h3>Are you sure you want to delete the data</h3>
               <form onSubmit={this.onSubmit}>
               <button className="navbar-brand" align="center">Delete</button>
               </form>
           </div> 
        )

        
    }
}

