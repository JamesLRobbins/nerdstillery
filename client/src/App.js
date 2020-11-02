import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import CrypticHome from "./pages/CrypticCalling";
import StaticHome from "./pages/StaticSiren";
import SegaJamesHome from "./pages/SegaJames";
import JamesHome from "./pages/James";
import ShaneHome from './pages/ShaneClient';
// import Admin from './pages/Admin';
import NotFound from './components/Not Found/NotFound'

import './style.css';

export default function App() {

    return (<>
        <BrowserRouter>
        
            <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/crypticcalling" component={CrypticHome} />
                <Route path="/staticsiren" component={StaticHome} />
                <Route path="/segajames" component={SegaJamesHome} />
                <Route path="/james" component={JamesHome} />
                <Route path="/sidneyvinsonphotography" component={ShaneHome} />
                {/* <Route path="/nerd-admin" component={Admin} /> */}
                <Route path="*" component={NotFound} />
            </Switch>
            </div>
        </BrowserRouter>
    </>
    );
}
