import React, { useState } from 'react'
import { NodePresentation } from './presentation'


// TODO: may need a handleOnClickProp
export const NodeContainer = ({
    title,
    description,
    isAbleToAddToTrip,
}) => {
    // TODO: either require caching for this state to persist or access DB to check if already added to Trip.
    const [isAddedToTrip, setIsAddedToTrip] = useState(false);

    const handleAddToTrip = () => {
        setIsAddedToTrip(true);
    }

    return (
        <NodePresentation 
            title={title} 
            description={description} 
            isAbleToAddToTrip={isAbleToAddToTrip}
            handleAddToTrip={handleAddToTrip}
        />
    );
}
