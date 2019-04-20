import React ,{Component} from "react" ;
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class FormFill extends Component{

    constructor(props) {
        super(props);

        this.onChangeFormName= this.onChangeFormName.bind(this);
        this.onChangeFormPass= this.onChangeFormPass.bind(this);
        this.onChangeFormEmail=this.onChangeFormEmail.bind(this);
        this.onChangeFormNumber=this.onChangeFormNumber.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            form_name:'',
            form_pass:'',
            form_email:'',
            form_number:'',
            form_submitted: false
        }
    }
    onChangeFormName(e){
        this.setState({
            form_name:e.target.value
        });
    }
    onChangeFormPass(e){
        this.setState({    
            form_pass:e.target.value
        });
    }
    onChangeFormEmail(e){
        this.setState({    
            form_email:e.target.value
        });
    }
    onChangeFormNumber(e){
        this.setState({
            form_number:e.target.value    
        });
    }
    onSubmit(e){
        e.preventDefault();
        
        console.log(`Form Submitted`);
        console.log(`Name: ${this.state.form_name}`);
        console.log(`password:${this.state.form_pass}`);
        console.log(`email:${this.state.form_email}`);
        console.log(`Number:${this.state.form_number}`);

        const dataSubmit = {
            userName: this.state.form_name,
            emailId: this.state.form_email,
            phoneNo: this.state.form_number,
            password: this.state.form_pass
        };
        axios.post('http://localhost:3306/userData', dataSubmit)
            .then(res => console.log(res.data))
            alert("Successfully Submitted")
            ;

        this.setState({
            form_name: '',
            form_pass: '',
            form_email: '',
            form_number: '',
            form_submitted: false

        })
    }
    
   

    render() {
        return (
         <div style={{mrginTop:10}} >
                <div className="heading"><h1 align="center"><br/>Registration</h1></div>
               <form onSubmit={this.onSubmit} >

                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" className="form-control mx-auto" value={this.state.form_name} onChange={this.onChangeFormName}/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" className="form-control" value={this.state.form_pass} onChange={this.onChangeFormPass}/>
                </div>
                <div className="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" name="Email" id="email" className="form-control" value={this.state.form_email} onChange={this.onChangeFormEmail} />
                </div>
                <div className="form-group">
                    <label for="number">Contact Number</label>
                    <input type="number" name="contact number" id="number" className="form-control" value={this.state.form_number} onChange={this.onChangeFormNumber}/>   
                </div>

                <div className="form-group">   
                    <input type="Submit" name="Submit" id="submit" value="Submit"className="btn btn-primary"/>
                </div>
               
               
               </form>



           </div> 
        )

        
    }



}

