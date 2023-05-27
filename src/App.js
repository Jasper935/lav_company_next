import './App.css';
import {Hero} from "./components/Hero/Hero";
import {Layout} from "./components/Layout/Layout";
import {Header} from "./components/Header/Header";
import {CallForm} from "./components/CallForm/CallForm";
import {Footer} from "./components/Footer/Footer";
import {Problems} from "./components/Problems/Problems";
import {Guarantee} from "./components/Guarantee/Guarantee";
import {Differences} from "./components/Differences/Differences";

function App() {
    return (
        <div className="App">

            <Header/>
            <Hero/>
            <CallForm/>
            <Problems/>
            <Guarantee/>
            <Differences/>
            <Footer/>

        </div>
    );
}

export default App;
