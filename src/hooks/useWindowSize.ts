import {useState, useEffect } from 'react'
import breakpoints from '../data/BreakPoints'

/**
 * This is a custom hook that keeps track of the size of the window.
 * Credit to Gabe Ragland from https://usehooks.com/useWindowSize/.
 * for this idea.
 */
interface WindowSize{
    width: number 
    height: number
    isSmall: boolean // Is true if thw size of the width window is smaller than the value of breakpoints.EXTRA_SMALL
    isLarge: boolean // Is true if large is isSmall is false
}

function useWindowSize(): WindowSize{
    // Initialize state with undefined width/height so server and client renders match.
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/.
    const [size, setSize] = useState<WindowSize>({
        width: 0,
        height: 0,
        isSmall: false,
        isLarge: true
    })

    
    useEffect(() => {
        // Handler to be called on window resize.
        function handleResize(){
            // Set window's height and width to state.
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isSmall: window.innerWidth <= breakpoints.EXTRA_SMALL,
                isLarge: window.innerWidth > breakpoints.EXTRA_SMALL
            })
        }

        // Add an event listener to listen to window resize and pass handleResize as the callback.
        window.addEventListener('resize', handleResize);

        // Call handleResize so that the state gets updated right away to the initial window size.
        handleResize();

        // Remove the event listener on clean up.
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []) // Empty array passed so that the effect is only ran on mount.

    return size   // Finally return the size of the window.
}

export default useWindowSize; 