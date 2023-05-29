import './App.css';
import {Hero} from "./components/Hero/Hero";
import {Layout} from "./components/Layout/Layout";
import {Header} from "./components/Header/Header";
import {CallForm} from "./components/CallForm/CallForm";
import {Footer} from "./components/Footer/Footer";
import {Problems} from "./components/Problems/Problems";
import {Guarantee} from "./components/Guarantee/Guarantee";
import {Differences} from "./components/Differences/Differences";
import {HowItWorks} from "./components/HowItWorks/HowItWorks";
import {Acquainted} from "./components/Acquainted/Acquainted";
import {Refund} from "./components/Refund/Refund";
import {QuestionsAnswers} from "./components/QuestionsAnswers/QuestionsAnswers";
import {Recommendation} from "./components/Recommendation/Recommendation";
import {Map} from "./components/Map/Map";

function App() {
    return (
        <div className="App">

            <Header/>
            {/*<Hero/>*/}
            {/*<CallForm/>*/}
            {/*<Problems/>*/}
            {/*<Guarantee/>*/}
            {/*<Differences/>*/}
            {/*<HowItWorks/>*/}
            {/*<Acquainted/>*/}
            {/*<Refund/>*/}
            {/*<QuestionsAnswers/>*/}
            {/*<Recommendation/>*/}
            {/*<Map/>*/}
            <Footer/>
        </div>
    );
}

export default App;
