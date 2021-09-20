import React from 'react';
import './App.css';
import Page from "./Pages/Page";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Layout from "./Pages/Layout";
import ReactHooks from "./Pages/ReactHooks";
import Home from './Pages/Home'
import Header from "./Pages/Header";
import CustomHooks from "./Pages/CustomHooks";
import ReactWindowPage from "./Pages/ReactWindowPage";

function App() {
    return (
        <div className="App">
            <main>
                <Router>
                    <Header />
                    <Layout>
                        <div>
                            <Switch>
                                <Route path="/custom-hooks">
                                    <CustomHooks/>
                                </Route>
                                <Route path="/react-hooks">
                                    <ReactHooks/>
                                </Route>
                                <Route path="/page">
                                    <Page/>
                                </Route>
                                <Route path="/react-window">
                                    <ReactWindowPage />
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </div>
                    </Layout>
                </Router>
            </main>
        </div>
    );
}

export default App;
