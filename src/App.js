import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'
import WebAgency from "./pages/WebAgency";
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                   <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={WebAgency}/>
                </Switch>
            </PageScrollTop>
        </Router>
    )
}
export default App
