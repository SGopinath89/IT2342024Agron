import React from 'react'
import {Card} from "react-bootstrap"
import {Container} from "react-bootstrap"
// import {Cardeck} from "react-bootstrap"

// import {Image} from 'react-bootstrap'

function Topimage(){
    return(
        <Container>
            <Card>
                <Card.Img variant="top" height="400px" width="100%" src="https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plant+Dec+2019-+Dec+2020/easy-urban-home-gardening-tips.jpg" />
                {/* <Card.ImgOverlay>
                    
                </Card.ImgOverlay> */}

            </Card>
            
        </Container>

    );
}
export default Topimage