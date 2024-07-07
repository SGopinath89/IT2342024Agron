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

class EditPeoplesaidComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            
            companyname: '',
            peopleimg: '',
            peoplename: '',
            place: '',
            description:'',
            status:'',
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
                   
                     companyname: user.companyname,
                     peopleimg: user.peopleimg,
                     peoplename:user.peoplename,
                     description: user.description,
                     status:user.status,
                     place:user.place,
                    
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, companyname: this.state.companyname, description: this.state.description,peopleimg: this.state.peopleimg, peoplename: this.state.peoplename, status: this.state.status, place: this.state.place};
        ApiService.editUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Peoplesaid Updated successfully.'});
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
                <Typography variant="h4" style={style}>Edit Peoplesaid</Typography>
                <form>
                       

                        <TextField type="text" placeholder="id" fullWidth margin="normal" name="id" disabled readonly="true" value={this.state.id}/>
                        <TextField type="text" placeholder="companyname" fullWidth margin="normal" name="companyname" value={this.state.companyname} onChange={this.onChange}/>
                    <TextField type="text" placeholder="peopleimg" fullWidth margin="normal" name="peopleimg" value={this.state.peopleimg} onChange={this.onChange}/>
                    <TextField type="text" placeholder="peoplename" fullWidth margin="normal" name="peoplename" value={this.state.peoplename} onChange={this.onChange}/>
                    <TextField type="text" placeholder="status" fullWidth margin="normal" name="status" value={this.state.status} onChange={this.onChange}/>
                    <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="text" placeholder="place" fullWidth margin="normal" name="place" value={this.state.place} onChange={this.onChange}/>
                        
                        <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditPeoplesaidComponent;