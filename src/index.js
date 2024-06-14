import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'; // React- Bootstrap

import reportWebVitals from "./reportWebVitals";
import ClassComp from "./Component/ClassComp";
import FunctionComp from "./Component/FunctionComp";
import { Button } from "./Component/Button";
import Props from "./Component/Props";
import SetState from "./Component/SetState";
import EventBinding from "./Component/EventBinding";
import ParentComp from "./Component/ParentComp";
import List from "./Component/List";
import Forms from "./Component/Axios/Forms";
import CssStyleSheet from "./Component/CssStyleSheet";
import Inline from "./Component/Inline";
import Module from "./Component/Module";
import Memo from "./Component/Memo";
import { BrowserRouter } from "react-router-dom";
// import MainPage from "./Component/Routering/MainPage";
import UseState from "./Component/ReactHooks/UseState";
import UseStateArray from "./Component/ReactHooks/UseStateArray";
import UseEffect from "./Component/ReactHooks/UseEffect";
import EffectOnlyOnce from "./Component/ReactHooks/EffectOnlyOnce";
import CleanUp from "./Component/ReactHooks/CleanUp";
import Dependency from "./Component/ReactHooks/Dependency";
import DataFetch from "./Component/ReactHooks/DataFetch";
import UseContextHook from "./Component/ReactHooks/UseContextHook";
import UseRef from "./Component/ReactHooks/UseRef";
import Axios from "./Component/Axios/Axios";
import MainPage from "./Component/RouterLink/MainPage";
import ReactModal from "./Component/Axios/ReactModal";
import Table from "./Component/Table/Table";
import UseReduce from "./Component/ReactHooks/UseReduce";
import Main from './Component/ReactHooks/useReduce_With_useContext/Main'
import FetchDataWithUseState from "./Component/Axios/FetchDataWithUseState.js";
import FetchDataWithUseReduce from "./Component/Axios/FetchDataWithUseReduce";

import ChariotLogin from './LoginPage/ChariotLogin.js'
import { TimePic } from "./LoginPage/TimePic.js";
import MapContainer from "./Gmap/MapContainer.js";

// import Modal from "./Component/Axios/Modal";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    {/* <ChariotLogin/> */}
    {/* <TimePic/> */}
    {/* <MapContainer/> */}
    {/* <App />, */}
    {/* <ClassComp />  */},
    {/* <FunctionComp/> */}
    {/* <Props name="swift" colour="white">
      <p> this is the child tag of MyCar</p></Props>  */}

    {/* <Button/>  */}
    {/* <SetState/> */}
    {/* <EventBinding/> */}
    {/* <ParentComp/> */}
    {/* <List/> */}
    {/* <Forms/> */}
    {/* <CssStyleSheet cond={true}/> */}
    {/* <Inline/> */}
    {/* <Module/> */}
    {/* <Memo/> */}
    {/* <UseState/> */}
    {/* <UseStateArray/> */}
    {/* <UseEffect/> */}
    {/* <EffectOnlyOnce/> */}
    {/* <CleanUp/> */}
    {/* <Dependency/> */}
    {/* <DataFetch/> */}
    {/* <UseContextHook/> */}
    {/* <UseRef/> */}
    <UseReduce />
    {/* <Main/> */}
    {/* <Axios/> */}
    {/* <FetchDataWithUseState/> */}
    {/* <FetchDataWithUseReduce/> */}
    {/* <ReactModal/>  */}
    {/* <Table/> */}


  </React.StrictMode>

  // <BrowserRouter>
  //     <MainPage/>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
