import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function StoreLocations () {
    return (
        <>
            <h3 className= "storeLocationText"> Choose your store in 
            <span 
                id="locationText" 
                href="https://www.lasvegas.com/"> Las Vegas</span></h3>
        <br/>
      <CardGroup>
        <Card style={{borderWidth: "0px", paddingLeft:"10%"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Sprouts Farmers Market </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup 1.9mi</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Smith's </h5></Card.Title>
            <Card.Text>
                    <p style={{color: "green" }}>Delivery by 10:10pm</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px", paddingRight:"10%"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Albertsons </h5></Card.Title>
            <Card.Text>
                    <p style={{color: "green" }} >Delivery by 10:13pm</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>



      <CardGroup>
        <Card style={{borderWidth: "0px", paddingLeft:"10%"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Costco </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Smith's Delivery Now </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px", paddingRight:"10%"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Walgreens </h5></Card.Title>
            <Card.Text>
                    <p style={{color: "green" }} >Delivery in <b>20 Minutes!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>




      <CardGroup>
        <Card style={{borderWidth: "0px", paddingLeft:"10%"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Vons </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Cardenas markets </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px", paddingRight:"10%"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> CVS Pharmacy </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>


        
      <CardGroup>
        <Card style={{borderWidth: "0px", paddingLeft:"10%"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Petco </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Smart & Final </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px", paddingRight:"10%"}}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Sam's Club </h5></Card.Title>
            <Card.Text>
                    <p>Delivery * Pickup</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>




      </>
    );
  }
