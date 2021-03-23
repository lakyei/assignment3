function Navbar(props){


    return(

        <nav 
        style={{backgroundColor:props.backgroundcolor}}>
            {props.text}
        </nav>
    )
}

export default Navbar;