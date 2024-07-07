import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListPeoplesaidComponent from "./user/ListPeoplesaidComponent";
import AddPeoplesaidComponent from "./user/AddPeoplesaidComponent";
import EditPeoplesaidComponent from "./user/EditPeoplesaidComponent";
import React from "react";

const style = {
    color: 'red',
    margin: '10px'
}

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}> Admin Panel For PeopleSaid</h1>
                    <Switch>
                        <Route path="/" exact component={ListPeoplesaidComponent} />
                        <Route path="/users" component={ListPeoplesaidComponent} />
                        <Route path="/add-user" component={AddPeoplesaidComponent} />
                        <Route path="/edit-user/:id" component={EditPeoplesaidComponent} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;