import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header/index.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle />
                    <Header />
                    <BrowserRouter>
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail' exact component={Detail}></Route>
                        </div> 
                    </BrowserRouter>
                </Fragment>
            </Provider>
            
        );
    }
}

export default App;
