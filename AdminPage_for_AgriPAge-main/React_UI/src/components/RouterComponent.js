import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListPlantComponent from "./user/ListPlantComponent";
import AddPlantComponent from "./user/AddPlantComponent";
import EditPlantComponent from "./user/EditPlantComponent";
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
                    <h1 className="text-center" style={style}> Admin Panel For Food Forest</h1>
                    <Switch>
                        <Route path="/" exact component={ListPlantComponent} />
                        <Route path="/users" component={ListPlantComponent} />
                        <Route path="/add-user" component={AddPlantComponent} />
                        <Route path="/edit-user/:id" component={EditPlantComponent} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;