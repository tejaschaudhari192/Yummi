import React, { useState } from 'react';

const ExpandableText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="w-full max-w-lg mx-auto ">
            <span className={`text-sm ${isExpanded ? '' : 'line-clamp-2'} transition-all duration-300`}>
                {text}
            </span>
            <span
                onClick={toggleExpand}
                className='font-semibold'
            >
                {isExpanded ? '' : 'More'}
            </span>
        </div>
    );
};

export default ExpandableText;
