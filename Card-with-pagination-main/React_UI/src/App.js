import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './App.css'
// import Profile from './NewCardmethode.js';
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, IconButton ,CardMedia } from "@material-ui/core";
import {Grid,Card,CardContent,Typography} from '@material-ui/core';
import {spacing} from "@material-ui/core";
import Paginationcard from './Paginationcard';
import Topimage from './Topimage.js';
import Para from './Para.js';

export default class App extends Component {
   
    render() {
        return (
        <div>
          <Topimage/>
          <Para/>
          <Paginationcard/>
              
        </div>
        )
           
        
    }
}


  