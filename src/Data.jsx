import React from "react";

function Radio(){
    var [gender,setGender]=React.useState(null)
    function handlegender(e){
        setGender(e.target.value)
    }
    return(
        <div className="div">
                <input type="radio" name="gender" value='Male' onChange={handlegender}/>:Male
                <input type="radio" name="gender" value='Female'onChange={handlegender}/>:Female
                <input type="radio" name="gender" value='Others'onChange={handlegender}/>:Others
                <h4 id="dd">SelectedGender:{gender}</h4>
        </div>
    )
}
export default Radio;