import React, {useState} from 'react';

import Navbar from '../AppComponents/navbar';
import Button from '../AppComponents/button';
import Inputfield from '../AppComponents/inputfield';
import Typography from '../AppComponents/typography';
import Select from '../AppComponents/select'
import TextArea from '../AppComponents/textarea';


import Login from './login'

/*
import TextArea from '../AppComponents/textarea';
import Select from '../AppComponents/select';
import RadioButton from '../AppComponents/radiobutton';
import CheckBox from '../AppComponents/checkbox';
import Typography from '../AppComponents/typography';
*/

function Home() {

    const [color, setColor] = useState ('black')
    const [text, setText] = useState('hello')

    function changeColorText(){
        setColor('red')
        setText('hi')
    }


    return(
        <div>

            <Navbar text="Whizzy Academy" backgroundcolor="#1e88e5"/>
            
            <h1>My Components</h1>
            <h3>Buttons</h3>
            <Button text="Clear"  color="#fff" backgroundcolor="#d50000" />
            <Button text="Login"  color="#fff" backgroundcolor="#1e88e5"/>
            <Button text="Cancel" color="#fff" backgroundcolor="#880e4f"/>
            <Button text="Submit" color="#fff" backgroundcolor="#003300"/>

            <Button text={text} color={color} backgroundcolor="#f5f5f5" onClickButton={changeColorText} />

            <h3>Radio Button</h3>
            <Inputfield type="radio" />
            <Inputfield type="radio" />
            <Inputfield type="radio" />

            <h3>Checkboxes</h3>
            <Inputfield type="checkbox" />
            <Inputfield type="checkbox" />
            <Inputfield type="checkbox" />

            <h3>Text Field</h3>
            <Inputfield type="text" />

            <h3>Typography</h3>
            <Typography text="this is a text" />

            <h3>Select</h3>
            <Select value1="audi" option1="Audi" value2="toyota" option2="Toyota" value3="benz" option3="Benz"/> 
            
            <h3>Text Area</h3>
            <TextArea text="this is a text area" />

        </div>
    )

}

export default Home;