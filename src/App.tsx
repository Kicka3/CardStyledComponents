import React from 'react';
import './App.css';
import styled from "styled-components";
import {Container} from "./components/Container.styled";
import {ImgBox} from "./components/ImgBox.styled";
import {Title} from "./components/Title.styled";
import {Content} from "./components/Content.styled";
import {Button} from "./components/Button.styled";
import {myTheme} from "./styles/Theme.styled";



function App() {
    return (
        <div className="App">
            <Wrapper>
                <Container>
                    <ImgBox src="./images/Rectangle1.svg"/>
                    <Title>Headline</Title>
                    <Content>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.
                    </Content>
                    <Button color={myTheme.backgrColors.secondaryTwo} fontSize={"10px"} fontColor={"#fff"} borderColor={"#4E71FE"}>See more</Button>
                    <Button color={"#fff"} fontSize={"10px"} fontColor={"#4E71FE"} borderColor={"#4E71FE"}>Save</Button>
                </Container>
            </Wrapper>
        </div>
    );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
