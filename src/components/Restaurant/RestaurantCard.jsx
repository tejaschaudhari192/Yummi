/* eslint-disable react/prop-types */


import { FcRating } from "react-icons/fc";
import './Restaurant.css'

const IMG_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'


function OfferText(props) {
    return <>
        {props.rest.info.aggregatedDiscountInfoV3 ? props.rest.info.aggregatedDiscountInfoV3.header : ''}
        {/* {console.log(props.rest.info.aggregatedDiscountInfoV3)} */}
        {/* {props.rest.info.aggregatedDiscountInfoV3 ? props.rest.info.aggregatedDiscountInHoV3.subHeader : ''} */}
    </>
}
export default function RestaurantCard(props) {
    return (
        <div className="card">
            {/* {console.log(props.rest?.info?.cloudinaryImageId)} */}
            <div className="restro-image" style={{ backgroundImage: `url(${IMG_URL + props.rest?.info?.cloudinaryImageId})` }}>
                {/* {console.log(props.rest.info.aggregatedDiscountInfoV3)} */}
                <h2>
                {OfferText(props)}
                </h2>
            </div>
            <div className="container">

                <h4 className='name'><b>{props.rest?.info?.name}</b></h4>
                <p>
                    <FcRating size={14} />
                    {props.rest.rating} • {props.rest?.info?.sla.slaString}</p>
                <p className='desc'>{props.rest?.info?.cuisines}</p>
                <p className='city'>{props.rest.info?.locality}</p>
            </div>
        </div>
    );
}
