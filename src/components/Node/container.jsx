import { NodePresentation } from './presentation'

export const NodeContainer = ({
    title,
    description,
    handleTravelClick,
    type,
    isTerminal,
    handleAddDestination,
}) => {
    return (
        <NodePresentation 
            title={title} 
            description={description} 
            handleTravelClick={isTerminal ? () => {} : handleTravelClick}
            type={type}
            isTerminal={isTerminal}
            handleAddDestination={isTerminal && handleAddDestination ? handleAddDestination : () => {}}
        />
    );
}
