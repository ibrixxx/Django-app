import React from 'react';
import styled from 'styled-components'
import {FcInfo} from 'react-icons/all';
import {Button} from "react-bootstrap";

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

export default function MyCard({user, stats, data, clickable, setModal}){

    if(user)
        return (
            <Card className={"card text-light "+stats}>
                <CardContainer className={"container d-inline-flex"}>
                    <div className={'center mx-5'}>
                        <img src={data.img} alt="Img" className="rounded-circle myPhoto"
                            width="80" height="80"/>
                    </div>
                    <div className={'m-5'}>
                        <h6 className={'p-3'}>{data.name}</h6>
                    </div>
                    <div className={'m-5'}>
                        <h6 className={"text-dark"}>{data.type}</h6>
                        <h6 className={"text-black-50"}>Status: {(stats==='bg-success')? 'Active':(stats==='bg-danger')? 'Busy':'Vacation'}</h6>
                    </div>
                </CardContainer>
            </Card>
        );

    return (
        <Card className={"card"}>
            <CardContainer className={"container"}>
                <h6>{data.class_name}</h6>
                <h6 className={"text-info"}>Durration: {data.class_durr_in_hours} h</h6>
                <h6 className={"text-black-50"}>Start: 1{data.year}:15 h</h6>
                {(clickable)? 
                    <Button onClick={() => {setModal(true); console.log("sasa");}} variant={'outline-dark'}>
                        <FcInfo/>
                    </Button>:<></> 
                }
            </CardContainer>
        </Card>
    );
}

