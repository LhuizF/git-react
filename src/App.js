import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './style/GlobalStyles';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
