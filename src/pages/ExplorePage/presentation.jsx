import { Node } from '../../components/Node';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles'
import Header from '../../components/Header'
import { ReactComponent as FirstArrow } from './arrow1.svg';
import { ReactComponent as SecondArrow } from './arrow2.svg';
import { ReactComponent as ThirdArrow } from './arrow3.svg';
// import { ReactComponent as FourthArrow } from './arrow4.svg';
import { NodeAnimation } from './NodeAnimation';
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

const useStyles = makeStyles({
    explorePageContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
    },
    arrow1: {
        position: 'absolute',
    },
    arrow2: {
        position: 'absolute',
    },
    arrow3: {
        position: 'absolute',
    },
    arrow4: {
        position: 'absolute',
    },
    BackIcon: {
        width: '50px',
        position: 'absolute',
        left: '50%',
        marginLeft: '-24px', // Half of width
        top: '90%',
        color: 'white',
        fontSize: '32px',
    },
})

export const ExplorePagePresentation = ({
    originNodeInfo,
    firstNodeInfo,
    secondNodeInfo,
    thirdNodeInfo,
    handleTravelClick,
    inProp,
    handleAddDestination,
    handleBackArrowClick,
}) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.explorePageContainer}>
                <NodeAnimation inProp={inProp} duration={300}>
                    <Box>
                        <BsFillArrowDownCircleFill className={classes.BackIcon} onClick={handleBackArrowClick} />
                    </Box>
                    <Node 
                        title={originNodeInfo.title} 
                        description={originNodeInfo.description} 
                        type='originNode'
                    />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} duration={500}>
                    <Box sx={{pointerEvents: 'none'}}>
                        <FirstArrow className={classes.arrow1} />
                    </Box>
                    <Node 
                        title={firstNodeInfo.title} 
                        description={firstNodeInfo.description} 
                        type='firstNode' 
                        handleTravelClick={handleTravelClick}
                        isTerminal={firstNodeInfo.isTerminal}
                        handleAddDestination={handleAddDestination}
                    />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} duration={500}>
                    <Box sx={{pointerEvents: 'none'}}>
                        <SecondArrow className={classes.arrow2} />
                    </Box>
                    <Node 
                        title={secondNodeInfo.title} 
                        description={secondNodeInfo.description} 
                        type='secondNode' 
                        handleTravelClick={handleTravelClick}
                        isTerminal={secondNodeInfo.isTerminal}
                        handleAddDestination={handleAddDestination}
                    />
                </NodeAnimation>
                <NodeAnimation inProp={inProp} duration={500}>
                    <Box sx={{pointerEvents: 'none'}}>
                        <ThirdArrow className={classes.arrow3} />
                    </Box>
                    <Node 
                        title={thirdNodeInfo.title} 
                        description={thirdNodeInfo.description} 
                        type='thirdNode' 
                        handleTravelClick={handleTravelClick} 
                        isTerminal={thirdNodeInfo.isTerminal}
                        handleAddDestination={handleAddDestination}
                    />
                </NodeAnimation>

                <Header headerTitle='Explore' buttonLabel='Travel Plan' buttonPathTo='/travelplan'/>
            </Box>

        </>
    )
}
