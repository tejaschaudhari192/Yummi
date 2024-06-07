import Header from '../Header/Header'
// import { ShimmerCard } from 'react-shimmer-effects';

import "./restMenu.css"
import { FcRating } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restInfo = useRestaurantMenu(resId);

    if (restInfo == null) return <Header />;

    // console.log(restInfo);

    const { avgRatingString, costForTwoMessage, areaName, sla } = restInfo.cards[2].card.card.info;
    const restMenu = restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

    return (
        <div id='body-main'>
            <p> Home/{restInfo.city}/{restInfo.name}</p>

            <h1>{restInfo.name}</h1>
            <main>
                <div className="restMenu-container">
                    <div className="restaurant-info">
                        <div className="rating">
                            <FcRating size={14} />
                            <span className="rating-stars">{avgRatingString} (10K+ ratings)</span>
                            <span className="rating-stars">💵{costForTwoMessage}</span>
                        </div>
                        <div className="cuisines">{restInfo.cuisines}</div>
                        <div className='restaurant-details'>
                            <p><h5 className='item-bold'>Outlet</h5>{areaName}</p>
                            <p><h5 className='item-bold'>{sla.minDeliveryTime} - {sla.maxDeliveryTime} mins</h5></p>
                        </div>
                        <h2>Menu</h2>
                        <div>

                            {restMenu.map((rest) => {
                                return  rest.card.info.name;
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RestaurantMenu
