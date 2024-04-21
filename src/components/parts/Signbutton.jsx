import '../..//assets/style/button.css'
import arrow from '../../assets/svg/arrow.svg';
const Signbutton=({name,action})=>{

    return(
      <div className="sign">
        <button className="signbut" onClick={action} >
          {name}
        </button>
        <span className="arrow"><img src={arrow}/>
    </span>
      </div>
    );
  }
  export default Signbutton
  
 
