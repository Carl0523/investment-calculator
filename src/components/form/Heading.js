import logo from '../../assets/logo.png' 
import './Heading.css'

function Heading()
{
   return(
    <div className="form-header">
        <img src={logo} alt="logo image"/>
        <h2>Investment Calculator</h2>
    </div>
   ) 
}

export default Heading;