export default function Poblacion (props){
    return (
        <>
        <label for="poblacion">{props.poblacion}</label>
        <select name="poblacion" id="poblacion">
        <option>{props.ciudad1}</option>
        <option>{props.ciudad2}</option>
        <option>{props.ciudad3}</option>
        <option>{props.ciudad4}</option>
        </select> 
        </>
    );
}