export default function InputRadio (props){
    return (
        <>
       <input type="radio" name="sexo" id="sexo-h" value="h"></input>
       <label for="sexo-h">{props.sexo}</label>; 
       
       <input type="radio" name="sexo" id="sexo-m" value="m"></input>;
       <label for="sexo-m">{props.sexo2}</label>;
       </>
    );
}