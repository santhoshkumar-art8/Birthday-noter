import react from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
let addstyle={
    fontSize:35,
    color:"#fdcb6e",
}

function Icon(){
    return(
        <div>
            <AddCircleIcon style={addstyle} />;
            
     </div>
    );
}
function Minusicon(){
    return(
        <div>
<RemoveCircleRoundedIcon  style={addstyle} />
        </div>
    );
}

export default Icon;
export{Minusicon};