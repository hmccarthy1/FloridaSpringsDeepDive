import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { SINGLE_SPRING } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';
import Carousel from 'react-bootstrap/Carousel';


const SpringCarousel = (props) => {



    const { loading, data } = useQuery(SINGLE_SPRING, {variables: {springID: props.springId}} );
console.log('data', data)


const mapImages = (media) => { 

    return media.map((image) => {
        return (
        <Carousel.Item className='carouselItem justify-content-center mt-5'>
        <img
            className="d-block w-100"
            src={image.imageURL}
            alt={image.Caption}
        />
        <Carousel.Caption>
            <h3>{image.Caption}</h3>
        
        </Carousel.Caption>
        </Carousel.Item>
        )
    })

}



    return (

        <>
        
        {loading? (<div><h1>Loading, please wait</h1></div>) : (
<div className='col-12 row'>
<Carousel interval={5000}>
{mapImages(data?.spring?.springMedia)}
</Carousel>
</div>

        ) }
        
        </>


    )




}

export default SpringCarousel;