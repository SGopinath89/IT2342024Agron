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

class AddPeoplesaidComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            
            companyname: '',
            peopleimg: '',
            peoplename: '',
            place: '',
            description:'',
            status:'',
            message: '',
            show: false
        }
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            companyname: this.state.companyname, 
            peopleimg: this.state.peopleimg, 
            peoplename: this.state.peoplename, 
            place: this.state.place, 
            description: this.state.description, 
            status: this.state.status
        };

        ApiService.addUser(user)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Peoplesaid added successfully.'});
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
                console.log(" Peopleimgdata",e.target.result)
                elements.push(e.target.result)
                this.setState({peopleimg:elements[0]})
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
                
                <Typography variant="h4" style={style}>Add PeopleSaid</Typography>
                <form style={formContainer}>
                   
                    
                    <TextField type="text" placeholder="companyname" fullWidth margin="normal" name="companyname" value={this.state.companyname} onChange={this.onChange}/>
                    <TextField type="text" placeholder="peopleimg" fullWidth margin="normal" name="peopleimg" value={this.state.peopleimg} onChange={this.onChange}/>
                    <TextField type="text" placeholder="peoplename" fullWidth margin="normal" name="peoplename" value={this.state.peoplename} onChange={this.onChange}/>
                    <TextField type="text" placeholder="status" fullWidth margin="normal" name="status" value={this.state.status} onChange={this.onChange}/>
                    <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="text" placeholder="place" fullWidth margin="normal" name="place" value={this.state.place} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler }/>
                    <img src={this.state.peopleimg}/>
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddPeoplesaidComponent;