import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddPlantComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            // username: '',
            // password: '',
            // firstName: '',
            // lastName: '',
            // age: '',
            // salary: '',
            title: '',
            description: '',
            avatarUrl: '',
            imageUrl: '',
            descripe:'',
            message: '',
            show: false
        }
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            title: this.state.title, 
            description: this.state.description, 
            avatarUrl: this.state.avatarUrl, 
            imageUrl: this.state.imageUrl, 
            descripe: this.state.descripe 
            // salary: this.state.salary
        };

        ApiService.addUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Plant added successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.userList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    userList = () => {
        return this.props.history.push('/users');
    }

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });

        onFileChangeHandler = (e) => {
            e.preventDefault();
            var elements=[];
            console.log(e.target.files.length)
            let files = e.target.files
            console.log(files)
            for(let i = 0; i<e.target.files.length; i++){
                let reader = new FileReader()
                reader.readAsDataURL(files[i])
                reader.onload = (e) => {
                console.log(" ImageUrldata",e.target.result)
                elements.push(e.target.result)
                this.setState({imageUrl:elements[0]})
                }
                console.log(elements)
            }
       }

    render() {
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                
                <Typography variant="h4" style={style}>Add Plant</Typography>
                <form style={formContainer}>
                    {/* <TextField type="text" placeholder="username" fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange}/>
                    <TextField type="password" placeholder="password" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange}/>
                    <TextField placeholder="First Name" fullWidth margin="normal" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                    <TextField placeholder="Last name" fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                    <TextField type="number" placeholder="age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>
                    <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/> */}
                    
                    {/* <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" disabled readonly="true" value={this.state.title}/> */}
                    <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="text" placeholder="avatarUrl" fullWidth margin="normal" name="avatarUrl" value={this.state.avatarUrl} onChange={this.onChange}/>
                    <TextField type="text" placeholder="imageUrl" fullWidth margin="normal" name="imageUrl" value={this.state.imageUrl} onChange={this.onChange}/>
                    <TextField type="text" placeholder="descripe" fullWidth margin="normal" name="descripe" value={this.state.descripe} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler }/>
                    <img src={this.state.imageUrl}/>
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddPlantComponent;