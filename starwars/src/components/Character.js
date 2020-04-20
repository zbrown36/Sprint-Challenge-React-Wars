// Write your Character component here
import React from "react";
import styled from "styled-components";
import axios from "axios";


const Card = styled.div`
background: black;
color: white;
width: 500px;
max-height: 300px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px;
margin: 0 auto;
border: 1px dotted grey;
`;

const Title = styled.h1`
font-size = 50px;
color = red;
border: 1px solid white;
padding: 5px;
`;
const Data = styled.div`
display:flex;
width:100%;
flex-direction:column;
padding-bottom: 3px;
border-radius:8px;
justify-content:space-between;
`;

const CharacterCard = props => {
    // let planet = 
    // axios.get("{props.homeworld")
    // .then(response => {
    //     const world = response.data.results;
    //     console.log(world);
    // })
        //general layout of cards 
    return (

        <Card>
            <Title>{props.name}</Title>
            
            <Data>
            <h2>Gender: {props.gender}</h2>
            <h2>DOB: {props.dob}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Weight: {props.weight}</h2>
            
            
            </Data>
        </Card>
    );
};

export default CharacterCard;