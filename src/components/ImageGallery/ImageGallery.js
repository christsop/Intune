import React from 'react';
import ig1 from '../../assets/images/imageGallery/ig1.jpg'
import ig2 from '../../assets/images/imageGallery/ig2.jpg'
import ig3 from '../../assets/images/imageGallery/ig3.jpg'
import ig4 from '../../assets/images/imageGallery/ig4.jpg'
import ig5 from '../../assets/images/imageGallery/ig5.jpg'
import ig6 from '../../assets/images/imageGallery/ig6.jpg'
import './ImageGallery.scss'
import {Container} from "reactstrap";

const ImageGallery = (props) => {

    const images = [ig1, ig2, ig3, ig4, ig5, ig6];
    return (
        <Container className="image-gallery">
            {
                images.map((image, key) => (
                    <img
                        key={key}
                        alt="..."
                        className="bordered-image"
                        src={image}

                    />
                )
                )
            }
        </Container>
    )
}

export default ImageGallery;