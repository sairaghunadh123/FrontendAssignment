// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
