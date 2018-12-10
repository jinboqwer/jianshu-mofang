import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header/index.js';
import { Provider } from 'react-redux';
import store from './store/index.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle />
                    <Header />
                </Fragment>
            </Provider>
            
        );
    }
}

export default App;
