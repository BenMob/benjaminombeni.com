import React, { useState, useEffect } from 'react'
import { Tool_i } from '../interfaces/Project.i'
import colors from '../data/tools_colors.json'

/**
 * Component that defines represents each tool/programming language on the Projects page.
 * @param param0 
 */
function Tool({name, color}: Tool_i): JSX.Element{

    // Tool text color
    const [text_color, setTextColor] = useState("");


    useEffect(() => {
         // Makes sure bright/dark colors don't blind in with the text
        const handleColorBlinding = (): void => {
            switch (color) {
                case colors.JavaScript:
                    setTextColor("#000000")
                    break;

                case colors.TypeScript:
                case colors.CSS:
                    setTextColor("#f7f7f7")
                    break;
                default:
                    break;
            }
        }

        // Call the handleColorBlinding right when the components mounts
        handleColorBlinding()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const style = {
        color : `${text_color}`,
        borderRadius: '2px',
        padding: '2px',
        backgroundColor: `${color}`
    }

    return(
        <div className="project-tool" style={style}><strong>{name}</strong></div>
    )
}

export default Tool;