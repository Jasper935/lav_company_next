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
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {Contract} from "./pages/Contract/Contract";
import React from 'react';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Appeal} from "./pages/Appeal/Appeal";
//"homepage": "http://albeli7n.beget.tech",
function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    })

    const head=<><Header/>
        <Hero/>
        <CallForm/>
        <Problems/>
        <Guarantee/>
        <Differences/>
        <HowItWorks/>
        <Acquainted/>
        <Refund/>
        <QuestionsAnswers/>
        <Recommendation/>
        <Map/>
        <Footer/></>

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter >
            <div className="App">
                {/*{head}*/}
                {/*<Contract />*/}
                <Routes>
                    <Route index path={'/'} element={head} />
                    <Route  path={'/contract'} element={<Contract />} />
                    <Route  path={'/appeal'} element={<Appeal />} />
                </Routes>
                <ToastContainer />
            </div>
            </BrowserRouter>
        </QueryClientProvider>

    );
}

export default App;
