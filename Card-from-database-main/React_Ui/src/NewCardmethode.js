import React, { Component } from 'react';

import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, IconButton ,CardMedia } from "@material-ui/core";
import {Grid,Card,CardContent,Typography} from '@material-ui/core';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
// import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';
import {spacing} from "@material-ui/core";
import ApiService from "./service/ApiService";
// import axios from 'axios'



class PlantProfile extends React.Component {

    constructor(props){
        super(props)
        this.state={
            plants_list:[]
        }
    }
 componentDidMount() {
    this.loadAllPlants();
}
loadAllPlants = () => {
    ApiService.fetchUsers()

    .then((res)=> {
      console.log(res);
      this.setState({plants_list : res.data})
    })
}
render(){
    return(
        <div>
         {/* <Grid container spacing={3} >
             <Grid item xs={4} sm={2}> 
            <Grid container spacing={3}> */}

            <Grid container spacing={4}>
                {this.state. plants_list.map(plants =>(
                    <Grid item xs={4}>
                        <Card key={plants.id} style={{width:"400px"}}  >
                            {/* // <CardActionArea href={`shopprofileviwe/${shop.shopId}`}> */}
                                {/* <Grid container  spacingttop={6} >
                                    <Grid item xs={8} sm={8} > */}
                                     {/* <Grid item xs={4} sm={3}> */}
                                          <CardHeader  
                                             avatar={<Avatar src={plants.avatarUrl} />}
                                             
                                             subheader={ plants.title}
                                                     />
                                                      <CardContent  >
                                                     <Typography variant="h5" component="h2">
                                                       {/* {plants.title} */}
                                                         </Typography>
                                                          </CardContent>
                                                           <CardMedia>
                                                               <img src= {plants.imageUrl}  style={{ height: "350px" }}/>
                                                                </CardMedia>
                                                                {/* </Grid> */}
                                                                {/* <Grid item xs={4} > */}
                                                                <CardContent>
                                                                <Typography variant="h5" component="h2">
                                                                 
                                                                 </Typography>
                                                           <CardContent>
                                                  <Typography variant="bottom" color="textSecondary" component="p">
                                                    {plants.description}
                                            </Typography> 
                                         </CardContent>
                                                
                                    </CardContent>
                                {/* </Grid>        
                             </Grid>                                    */}
                             {/* </CardActionArea>    */}
                             {/* </Grid> */}
                            
                        </Card>
                        </Grid>
                        ))
                    }
                {/* //  </Grid>
            // </Grid> */}

        {/* </Grid> */}
        </Grid>
        </div>
        )
    }
}
export default PlantProfile;
