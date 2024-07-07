import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditPlantComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            // firstName: '',
            // lastName: '',
            // age: '',
            // salary: '',
            // show: false,
            // message: ''
            title: '',
            description: '',
            avatarUrl: '',
            imageUrl: '',
            descripe:'',
            show: false,
            message: ''

        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        // ApiService.fetchUserById(userId)
        // console.log(userId);
        ApiService.fetchUserById(userId)
            .then((res) => {
                let user = res.data;
                this.setState({
                    id: user.id,
                    // username: user.username,
                    // firstName: user.firstName,
                    // lastName: user.lastName,
                    // age: user.age,
                    // salary: user.salary,
                     title: user.title,
                     description: user.description,
                     avatarUrl:user.avatarUrl,
                     imageUrl: user.imageUrl,
                     descripe:user.descripe,
                    
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, title: this.state.title, description: this.state.description,imageUrl: this.state.imageUrl, avatarUrl: this.state.avatarUrl, descripe: this.state.descripe};
        ApiService.editUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Plant Updated successfully.'});
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

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Plant</Typography>
                <form>
                        {/* <TextField type="text" placeholder="username" fullWidth margin="normal" name="username" disabled readonly="true" value={this.state.username}/>
                        <TextField placeholder="First Name" fullWidth margin="normal" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                        <TextField placeholder="Last name" fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                        <TextField type="number" placeholder="age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>
                        <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/> */}

                        <TextField type="text" placeholder="id" fullWidth margin="normal" name="id" disabled readonly="true" value={this.state.id}/>
                        <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                        <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                        <TextField type="text" placeholder="avatarUrl" fullWidth margin="normal" name="avatarUrl" value={this.state.avatarUrl} onChange={this.onChange}/>
                        <TextField type="text" placeholder="imageUrl" fullWidth margin="normal" name="imageUrl" value={this.state.imageUrl} onChange={this.onChange}/>
                        <TextField type="text" placeholder="descripe" fullWidth margin="normal" name="descripe" value={this.state.descripe} onChange={this.onChange}/>
                        
                        <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditPlantComponent;