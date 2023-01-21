import React, { useRef } from 'react'
import { Transition } from 'react-transition-group'


export const NodeAnimation = ({ easeIn, easeOut, inProp, children }) => {
    const defaultStyle = {
        opacity: 0,
    }

    const transitionStyles = {
        entering: { 
            opacity: 0, 
            transition: `opacity ${inProp ? easeIn : easeOut}ms ease-in-out`,
            pointerEvents: 'none',
        },
        entered:  { 
            opacity: 1, 
            transition: `opacity ${inProp ? easeIn : easeOut}ms ease-in-out`,
            pointerEvents: 'auto',
        },
        exiting:  { 
            opacity: 0, 
            transition: `opacity ${inProp ? easeOut : easeIn}ms ease-in-out`,
            pointerEvents: 'none',
        },
        exited:  { 
            opacity: 1, 
            transition: `opacity ${inProp ? easeOut : easeIn}ms ease-in-out`,
            pointerEvents: 'auto',
        },
    };
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={easeIn}>
            {state => (
                <div ref={nodeRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {children}
                </div>
            )}
        </Transition>
    )
}
