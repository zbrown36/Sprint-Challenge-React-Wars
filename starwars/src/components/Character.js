// Write your Character component here
import React from "react";
import styled from "styled-components";

const Card = styled.div`
background: black;
color: white;
width: 700px;
max-height: 300px;
display: flex;
flex: column;
align-items: center;
justidy-content: space-between;
Margin-bottom: 20px;
`;

const Title = styled.h1`
font-size = 30px;
font-color = red;
border: 1px solid white;
padding: 5px;
`;
const Data = styled.div`
display:flex;
width:100%;
flex-direction:column;
ali:flex-start;
border-radius:8px;
`;

const CharacterCard = props => {
    return (
        <Card>
            <Title>Name: {props.name}</Title>
            
            <Data>
            <h2>Race: {props.race}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Weight: {props.weight}</h2>
            <h2>Home World: {props.homeworld}</h2>
            </Data>
        </Card>
    );
};

export default CharacterCard;