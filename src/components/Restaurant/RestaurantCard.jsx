import { FcRating } from "react-icons/fc";
import './Restaurant.css'

const IMG_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

function stringTruncate(cuisines, num) {
    const cuisineString = cuisines.join(', ');
    if (cuisineString.length <= num) {
        return cuisineString;
    }
    return cuisineString.slice(0, num) + '...';

}

function OfferText(props) {
    return <>
        {props.rest.info.aggregatedDiscountInfoV3 ? props.rest.info.aggregatedDiscountInfoV3.header : ''}
    </>
}
export default function RestaurantCard(props) {
    const { name, cloudinaryImageId, cuisines, locality, avgRating } = props.rest?.info;

    return (
        <div className="min-w-[260px] w-[260px]  h-[287px] transition-all ease-in-out duration-200 transform hover:scale-95 mb-5">
            <div className="rounded-2xl shadow-xl">
                <div className="restro-image rounded-2xl" style={{ backgroundImage: `url(${IMG_URL + cloudinaryImageId})` }}>
                    <h1 className="absolute text-white font-extrabold text-2xl bottom-1 left-2">
                        {OfferText(props)}
                    </h1>
                </div>
            </div>
            <div className="p-3 text-[16px] text-nowrap">
                <h1 className='name text-[18px]'>
                    <b>
                        {(name.length <= 30) ?
                            name : (name.slice(0, 30) + '...')}
                    </b>
                </h1>
                <p className="flex items-center gap-1 font-bold">
                    <FcRating size={18} />
                    {avgRating} • {props.rest?.info?.sla.slaString}</p>

                <div className="font-semibold opacity-65">
                    <p className='desc'>
                        {stringTruncate(cuisines, 30)}
                    </p>
                    <p className='city'>{locality}</p>
                </div>
            </div>
        </div >
    );
}
// higher order components
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        <>
            <label>promoted</label>
            <RestaurantCard {...props} />
        </>
    }
}