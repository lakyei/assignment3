function Select(props){
    return (
        <div>
            <select name="cars">
                <option value={props.value1}>{props.option1}</option>
                <option value={props.value2}>{props.option2}</option>
                <option value={props.value3}>{props.option3}</option>
            </select>

        </div>
    )
}
export default Select;