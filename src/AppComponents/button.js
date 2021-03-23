function Button(props){


    return (
        <button 
            style={{
                backgroundColor: props.backgroundcolor,
                color: props.color,
                width: props.width,
                height: props.height

            }}

            onClick = {props.onClickButton}
        > 

        {props.text}
        
        </button>
    )
}


export default Button