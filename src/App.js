import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Meeting from "./Meeting";
import { Link, useParams } from "react-router-dom";
import { publicURLS } from "./Routes";
//import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // const { idCours } = useParams();

  // let payload = {
  //   meetingNumber: 85140058451,
  //   role: 0,
  //   sdkKey: "SAI3lir5wS4DTcREZeveYxblyE9643FpPakM",
  //   sdkSecret: "tJlEzPrXpuBucvYKBCpbxKjY8bB0xeS2FHrU",
  //   passWord: "L36Jgw",
  //   userName: "sam",
  //   userEmail: "lyceena2022@gmail.com",
  //   leaveUrl: "http://localhost:3000",
  // };

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/users/message")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPayload(data.payload);
  //       setMessage(data.message);
  //     });
  // }, []);

  return (
    <>
      {/* <h1>{message}</h1>
      <button onClick={() => console.log(payload)}>test</button> */}
      {/* {payload?.meetingNumber && <Meeting payload={payload} />} */}
      {/*  */}
      <Router>
        <Switch>
          {publicURLS.map(({ Component, path }, i) => (
            <Route key={i} exact path={path}>
              <div>
                <Component />
              </div>
            </Route>
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
