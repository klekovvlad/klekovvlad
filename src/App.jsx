import { BrowserRouter, Route, Routes } from 'react-router-dom';
const {useState, useEffect} = wp.element;
import './App.scss';
import Header from './components/header/header';
import Main from './components/main/main';
import { IDs, WP } from './path';
import About from './components/about/about';
import Loader from './components/loader/loader';
import Works from './components/works/works';

const App = () => {

    const [mainState, setMainState] = useState('');

    useEffect(() => {
        fetch(`${WP.page}${IDs.main}`)
        .then(response => response.json())
        .then(data => {
            setMainState(data.acf)
        })
    }, [])

    if(mainState) {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Main props={mainState} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/works' element={<Works />} />
                </Routes>
            </BrowserRouter>
        )
    }else{
        return <Loader />
    }
}

export default App;