import Header from '../Header'
// import { ShimmerCard } from 'react-shimmer-effects';

import "./restMenu.css"
import { FcRating } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import { AccordionItem } from './Category';
import RestaurantInfo from './RestaurantInfo';
import { list } from 'postcss';
import MenuSkeleton from './menuSkeleton';

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restInfo = useRestaurantMenu(resId);

    if (restInfo == null) return <MenuSkeleton />;

    // console.log(restInfo);

    const tiList = restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) =>
        c?.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    const { avgRatingString, costForTwoMessage, areaName, sla } = restInfo.cards[2].card.card.info;
    const restMenu = tiList[0].card?.card.itemCards;

    const restDetails = restInfo.cards[2].card.card.info;

    return (
        <div className='mx-auto mt-24 w-3/5'>
            <p className='mt-10'> Home/{restDetails.city}/{restDetails.name}</p>

            <h1 className='mt-3 text-2xl'>{restDetails.name}</h1>
            <main>
                <div>
                    <RestaurantInfo info={restDetails} />

                    <h2>Menu</h2>
                    <div>
                        {
                            tiList.map((list, index) => {
                                return <AccordionItem key={index} title={list.card.card.title} data={list.card.card.itemCards} />

                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RestaurantMenu;
