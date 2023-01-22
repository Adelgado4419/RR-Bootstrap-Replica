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
      <Card style={{borderWidth: "0px", marginLeft:"10%"}}>
          <Card.Img className="storeImage" variant="top" src="costco.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Costco </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px"}}>
          <Card.Img className="storeImage" variant="top" src="smiths.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Smith's </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery by <b>10:10pm</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px", marginRight:"10%"}}>
          <Card.Img className="storeImage" variant="top" src="albertsons.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Albertsons </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery by <b>10:10pm</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>



      <CardGroup>
        <Card style={{borderWidth: "0px", marginLeft:"10%"}}>
          <Card.Img className="storeImage" variant="top" src="costco.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Costco </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px"}}>
          <Card.Img className="storeImage" variant="top" src="smithsnow.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Smith's Delivery Now </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px", marginRight:"10%"}}>
          <Card.Img className="storeImage" variant="top" src="walgreens.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Walgreens </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery in <b>20 Minutes!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>




      <CardGroup>
        <Card style={{borderWidth: "0px", marginLeft:"10%"}}>
          <Card.Img className="storeImage" variant="top" src="vons.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Vons </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px"}}>
          <Card.Img className="storeImage" variant="top" src="cardenas.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Cardenas markets </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px", marginRight:"10%"}}>
          <Card.Img className="storeImage" variant="top" src="cvs.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> CVS Pharmacy </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>


        
      <CardGroup>
        <Card style={{borderWidth: "0px", paddingLeft:"10%"}}>
          <Card.Img className="storeImage" variant="top" src="petco.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Petco </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px"}}>
          <Card.Img className="storeImage" variant="top" src="smartandfinal.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Smart & Final </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{borderWidth: "0px", paddingRight:"10%"}}>
          <Card.Img className="storeImage" variant="top" src="samsclub.png" />
          <Card.Body>
            <Card.Title><h5 style = {{fontWeight: "bold"}}> Sam's Club </h5></Card.Title>
            <Card.Text>
                    <p className="storeDelivery">Delivery within <b>1 hour!</b></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>




      </>
    );
  }
