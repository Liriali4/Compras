import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Route (){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
