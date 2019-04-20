import React ,{Component} from "react" ;
import {Link} from 'react-router-dom';
import axios from 'axios';

const Search = props => (
    <tr>
        <td>{props.user.userName}</td>
        <td>{props.user.emailId}</td>
        <td>{props.user.phoneNo}</td>
        <td>{props.user.password}</td>
        <td>
            <Link to={"/deleterecord/"+props.user.emailId}>Delete</Link>

        </td>
    </tr>
    

)



export default class SearchRecord extends Component{

    constructor(props) {
        super(props);
        this.onChange=this.onChange.bind(this);
        this.state={
            search:'',
            user:[]
        };
    }

    onChange(event){
        this.setState({search:event.target.value });
    }
    
    componentDidMount() {
        axios.get('http://localhost:3306/userData/')
            .then(response => {
                this.setState({ user: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    searchdb() {
        const{search}=this.state;
        if(search !== ""&& this.state.user.indexOf(search)=== -1)
        {
            return <Search user={search} />;     
        }else{
            return this.state.user.map(function(curentuser, i){
            return <Search user={curentuser} key={i} />;
        })
        
    }
}

    render(){
       
        return (
           <div >
               <br/>
               <form className="form-inline " onChange={this.onChange}>
                    <input type="search"  className="form-control mr-sm-4 ml-auto" placeholder="search" aria-label="search"/>
               </form>
               <div>
                <h3 align="center">DataBase</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.searchdb() }
                          
                    </tbody>
                </table>
            </div>
           </div> 
        )

        
    }



}

