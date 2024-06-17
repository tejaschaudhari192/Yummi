import React from 'react';
import { ShimmerThumbnail, ShimmerText, ShimmerCircularImage } from 'react-shimmer-effects';

const MenuSkeleton = () => {
    return (
        <div className="p-6 space-y-6 mt-32 w-3/5 mx-auto">
            {/* Breadcrumb */}
            <div className="flex space-x-2">
                <ShimmerText line={1} gap={10} variant="primary" className="w-24" />
                <ShimmerText line={1} gap={10} variant="primary" className="w-24" />
            </div>

            {/* Title */}
            <ShimmerText line={1} gap={10} variant="primary" className="w-1/3" />

            {/* Ratings and Info */}
            <div className="flex space-x-2 items-center">
                <ShimmerCircularImage size={20} />
                <ShimmerText line={1} gap={10} variant="primary" className="w-16" />
                <ShimmerText line={1} gap={10} variant="primary" className="w-16" />
            </div>

            {/* Outlet Info */}
            <div className="space-y-2">
                <ShimmerText line={1} gap={10} variant="primary" className="w-1/4" />
                <ShimmerText line={1} gap={10} variant="primary" className="w-1/4" />
            </div>

            {/* Recommended Section */}
            <div>
                <ShimmerText line={1} gap={10} variant="primary" className="w-1/5 mb-4" />

                {/* Item Skeleton */}
                <div className="space-y-6">
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div className="flex-1 space-y-2">
                                <ShimmerText line={1} gap={10} variant="primary" className="w-3/4" />
                                <ShimmerText line={1} gap={10} variant="primary" className="w-1/4" />
                                <ShimmerText line={2} gap={10} variant="primary" className="w-full" />
                            </div>
                            <ShimmerThumbnail height={100} width={100} rounded />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuSkeleton;
