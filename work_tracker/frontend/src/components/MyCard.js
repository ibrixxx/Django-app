import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
      border: 0;
      margin-bottom: 30px;
      margin-top: 30px;
      border-radius: 5px;
      background: whitesmoke;
      width: 100%;
      position: relative;
      display: flex;
      flexDirection: column;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;

      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
  `

const CardContainer = styled.div`
    padding: 2px 16px;
  `

export default function MyCard({user, stats}){

    if(user)
        return (
            <Card className={"card text-light "+stats}>
                <CardContainer className={"container"}>
                    <h6>Username</h6>
                    <h6 className={"text-info"}>šta je</h6>
                    <h6 className={"text-black-50"}>Status: xyu</h6>
                </CardContainer>
            </Card>
        );

    return (
        <Card className={"card"}>
            <CardContainer className={"container"}>
                <h6>Naziv predmeta</h6>
                <h6 className={"text-info"}>termin</h6>
                <h6 className={"text-black-50"}>Vrsta (AV, LV)</h6>
            </CardContainer>
        </Card>
    );
}

