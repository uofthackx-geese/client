import React, { useRef } from 'react'
import { Transition } from 'react-transition-group'


export const NodeAnimation = ({ duration, inProp, children }) => {
    const defaultStyle = {
        opacity: 0,
    }

    const transitionStyles = {
        entering: { 
            opacity: 1, 
            transition: `opacity ${duration}ms ease-in-out`,
            pointerEvents: 'none',
        },
        entered:  { 
            opacity: 1, 
            transition: `opacity ${duration}ms ease-in-out`,
            pointerEvents: 'auto',
        },
        exiting:  { 
            opacity: 0, 
            transition: `opacity ${duration}ms ease-in-out`,
            pointerEvents: 'none',
        },
        exited:  { 
            opacity: 0, 
            transition: `opacity ${duration}ms ease-in-out`,
            pointerEvents: 'auto',
        },
    };
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
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
