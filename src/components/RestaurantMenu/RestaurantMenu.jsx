import Header from '../Header/Header'
// import { ShimmerCard } from 'react-shimmer-effects';

import "./restMenu.css"
import { FcRating } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import MenuAccordion, { AccordionItem } from './Category';
import RestaurantInfo from './RestaurantInfo';

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restInfo = useRestaurantMenu(resId);

    if (restInfo == null) return <Header />;

    // console.log(restInfo);

    const tiList = restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) =>
        c?.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    const bakiList = restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) =>
        c?.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

    // console.log(tiList);
    // console.log(bakiList);

    const { avgRatingString, costForTwoMessage, areaName, sla } = restInfo.cards[2].card.card.info;
    const restMenu = tiList[0].card?.card.itemCards;
    // console.log(restMenu);

    const restDetails = restInfo.cards[2].card.card.info;
    // console.log(restDetails);

    return (
        <div id='body-main'>
            <p> Home/{restDetails.city}/{restDetails.name}</p>

            <h1>{restDetails.name}</h1>
            <main>
                <div className="restMenu-container">
                    <div className="restaurant-info">
                        <RestaurantInfo info={restDetails}/>
                        
                    </div>
                        <h2>Menu</h2>
                        <div>
                            {/* {restMenu.map((rest) => {
                                return rest.card.info.name;
                            })} */}
                            <AccordionItem title={tiList[0].card.card.title} data={tiList[0].card.card.itemCards} />
                        </div>
                </div>
            </main>
        </div>
    )
}

export default RestaurantMenu;
