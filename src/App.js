import React from 'react'
import './App.css'
import Login from './LoginPage/Login'
import MainPage from './Component/RouterLink/MainPage'
import ParentComponent from "./Component/ReactHooks/useCallBackHook/ParentComponent";
import UseMemo from './Component/ReactHooks/UseMemo';
import DocTItleOne from './Component/ReactHooks/CustomHook/ExampleOne/DocTItleOne';
import DocTItleTwo from './Component/ReactHooks/CustomHook/ExampleOne/DocTItleOne';
import CounterOne from './Component/ReactHooks/CustomHook/ExampleTwo/CounterOne';
import CounterTwo from './Component/ReactHooks/CustomHook/ExampleTwo/CounterTwo';
import InputForm from './Component/ReactHooks/CustomHook/ExampleThree/InputForm';
import Parent from './Component/ReactHooks/Incorrect memo with Impure component/Parent'
import ChildOne from './Component/ReactHooks/Incorrect memo with Impure component/ChildOne';
import ParentOne from './Component/Pratice/ParentOne';
import { Button } from './Component/Button';
import CheckBox from './Component/Pratice/CheckBox';
import { TimePic } from './LoginPage/TimePic.js';
import UploadComponent from './UploadComponent.js';
import FileUpload from './FileUpload.js';


function App() {
  return (
    <div className="App">
      <FileUpload />
      {/* <UploadComponent /> */}
      {/* <TimePic/> */}
      {/* <MainPage/> */}
      {/* <ParentComponent/> */}
      {/* <UseMemo/> */}
      {/* <DocTItleOne/>
        <DocTItleTwo/> */}
      {/* <CounterOne/>
        <CounterTwo/> */}
      {/* <InputForm/> */}
      {/* <Parent> 
          <ChildOne/>
        </Parent> */}
      {/* <ParentOne/> */}
      {/* <Button/> */}
      {/* <CheckBox/> */}
    </div>
  )
}

export default App

