import styled from "styled-components";
import colors from "../../utils/style/colors";

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

function Home(){
    return (
        <StyledPage>
            <StyledSubPage>
                <StyledBox1>
                    
                </StyledBox1>
                <StyledBox2>
                    
                </StyledBox2>
            </StyledSubPage>
        </StyledPage>
    )
}

export default Home;