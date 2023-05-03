import React from 'react'
import Button from '@mui/material/Button';

function DefaultButton(props) {
    console.log('props:: ', props)

    const btnStyle = {
        backgroundColor: props.bgColor,
        width: `${props.width}px`,
        border: "none",
        borderRadius: "6px",
        fontSize: "17px",
        lineHeight: "48px",
        paddingLeft: "16px",
        paddingRight: "16px",
        color: "white",
        marginTop: "30px"
    }



    return (
        <div>
            <Button color="error" variant="contained">Contained</Button>
            {/* <button style={btnStyle}>{props.text}</button> */}
        </div>
    )
}

export default DefaultButton