import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CenterPiece() {
    return (
     <CardGroup>
        <Card style={{backgroundColor:"rgb(222,237,214)" }}>
            <Card.Img src="background-image.png" 
                        alt="Card image"
                        style={{
                            width: '250px',
                            position: "relative",
                            left: "84%",
                        }} />
            <Card.ImgOverlay>
                <Card.Title className="textImg"><h1>Order groceries for delivery <br/> or pickup today</h1></Card.Title>
                <Card.Text className="textImg">Whatever you want from local stores, brought right to your door.</Card.Text>

                <Form className="textImg">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className="addInput" type="address" placeholder="Enter your address" />
                    </Form.Group>
                </Form>  

                
            </Card.ImgOverlay>
        </Card>

      </CardGroup>
    )
}