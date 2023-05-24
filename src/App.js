import './App.css';
import {Hero} from "./components/Hero/Hero";
import {Layout} from "./components/Layout/Layout";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Layout>
                <Header/>
                <Hero/>`
            </Layout>
        </div>
    );
}

export default App;
