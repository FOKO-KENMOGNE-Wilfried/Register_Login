import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import { useState } from "react";

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: auto;
`
const StyledSubPage = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    width: 90vw;
    height: 90vh;
    background-color: #9db5e9;
`
const StyledBox1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;
    color: white;
    padding: 0px 50px 0px 50px;
    align-items: center;
`
const StyledBox2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px 0px 0px 20px;
`
const StyledP = styled.p`
    font-size: 15em;
    font-weight: 1000;
    color: #9db5e9;
    background-color: #5B86E5;
    border-radius: 0px 100px 100px 0px;
    padding: 0px 80px 0px 30px;
    margin-top: 0px;
    margin-bottom: -10px;
`
const StyledLink = styled(Link)`
    display: inline;
    text-decoration: none;
    color: ${colors.primary};
`


const StyledInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
    border-bottom: 2px solid silver;
    &:focus ~ label{
        transform: translateY(-20px);
    }
    &:valid ~ label{
        transform: translateY(-20px);
    }
    &:focus ~ div{
        transform: scaleX(1);
    }
    &:valid ~ div{
        transform: scaleX(1);
    }
`
const StyledLabel = styled.label`
    transition: transform 0.3s ease;
    position: absolute;
    color: silver;
    top: 0;
`
const StyledDiv = styled.div`
    width: 100%;
    height: 2px;
    margin-top: -2px;
    background-color: ${colors.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
`
const StyledContainer = styled.div`
    margin-top: 20px;
    position: relative;
    width: 100%;
`
const StyledSubmit = styled.input`
    //border: none;
    margin-top: 20px;
    width: 100%;
    height: 40px;
    background-color: ${colors.primary};
    border: none;
    border-radius: 10px;
    
    &:hover{
        background-color: #9db5e9;
    }
`
const StyledTitle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 1.2em;
    width: 30%;
`
function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signUpUser(e){
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json();
        if(data.user){
            localStorage.setItem("token", data.user);
            alert("Login successful");
            window.location.href = "/home";
        } else {
            alert("Please check your username an password")
        }

        console.log(data);
    }

    return(
        <StyledPage>
            <StyledSubPage>
                <StyledBox1>
                    <div style={{fontSize: 1.5 + "em"}}>WELCOME TO THIS UGLY LOGIN PAGE CREATED BY <br />FOKO KENMOGNE Wilfried</div>
                    <StyledP>L</StyledP>
                </StyledBox1>
                <StyledBox2>
                    <StyledTitle onSubmit={signUpUser}>
                            <label style={{fontSize: 2 + "em", fontWeight: 700}}>Login</label><br />
                        <StyledContainer>
                            <StyledInput type="text" required onChange={(e) => {setEmail(e.target.value)}}/><br />
                            <StyledDiv></StyledDiv>
                            <StyledLabel>e-mail</StyledLabel>
                        </StyledContainer>
                        <StyledContainer>
                            <StyledInput type="password" required onChange={(e) => {setPassword(e.target.value)}}/><br />
                            <StyledDiv></StyledDiv>
                            <StyledLabel>password</StyledLabel>
                        </StyledContainer>
                        <StyledSubmit type="submit" onSubmit={(e) => {e.preventDefault()}} value={"Login"}/>
                    </StyledTitle>
                    <div>
                        <p>Don't have an Account ? <StyledLink to={"/"}>Create Account</StyledLink> </p>
                    </div>
                </StyledBox2>
            </StyledSubPage>
        </StyledPage>
    )
}

export default Login;