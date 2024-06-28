import React from 'react';
import { ShimmerThumbnail, ShimmerText, ShimmerBadge } from 'react-shimmer-effects';

const ShimmerRestaurantList = () => {
    const shimmerCards = Array(4).fill(0); // Assuming 5 shimmer cards

    return (
        <div className="p-6">

            {/* Shimmer Cards */}
            <div className="flex gap-4 space-x-4 overflow-x-hidden">
                {shimmerCards.map((_, index) => (
                    <div key={index} className="w-60">
                        <ShimmerThumbnail height={150} rounded className="mb-2" />
                        <ShimmerBadge height={20} width={40} className="mb-2" />
                        <ShimmerText line={2} gap={10} variant="primary" className="w-3/4 mb-1" />
                        <ShimmerText line={1} gap={10} variant="primary" className="w-1/2 mb-1" />
                        <ShimmerText line={1} gap={10} variant="primary" className="w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShimmerRestaurantList;