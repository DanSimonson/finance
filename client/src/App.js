import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Components/Main";

const Wrapper = styled.div`
  padding-left: 2rem;
  margin-top: 10rem;
  display: flex;
  justify-content: center
  align-items: center;
  font-size: 18px;
  @media (min-width: 755px) and (max-width: 1024px) {
    padding-left: 3.5rem;
  }
  @media (max-width: 426px){
    padding-left: 2rem;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center
  align-items: center
  @media (max-width: 426px) {
    width:360px;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormButton = styled.input`
  background-color: orange;
  border: none;
  border-radius: 2%;
  text-decoration: none;
  color: #222;
  padding: 20px 20px;
  margin: 5px 20px;
  cursor: pointer;
`;
const FormLabel = styled.label`
  padding: 0;
  margin: 5px 20px;
  font-size: 1rem;
`;

function App() {
  const user = localStorage.getItem("token");
  const [data, setData] = useState([]);


  // useEffect(() => {
  //   callBackendAPI();
  // }, []);

  // const callBackendAPI = async () => {
  //   let temp = [];
  //   try {
  //     const res = await axios("/express_backend");
  //     temp.push(res.data);
  //     setData(temp);
  //   } catch (err) {
  //     console.log("err.message: ", err.message);
  //   }
  // };


  return (
    <>
      {/* {data.map((item, idx) => (
        <Wrapper key={idx}>
          <h2>{item.message}</h2>
        </Wrapper>
      ))} */}
      <Routes>
      <Route path="/" exact element={<Main />} />
			{/* {user && <Route path="/" exact element={<Main />} />} */}
			{/* <Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} /> */}
		</Routes>

      {/* <Form>
        <FormDiv>
          <FormLabel htmlFor="myfile">Select an Excel Spreadsheet: </FormLabel>
          <FormButton
            type="file"
            id="myfile"
            name="myfile"
            // onChange={(e) => readExcel(e)}
          ></FormButton>
        </FormDiv>
      </Form>
      <div id="wrapper"></div> */}
    </>
  );
}

export default App;
