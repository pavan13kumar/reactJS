import { useNavigate } from 'react-router-dom' 
import OrderSummary from './OrderSummary';
 
 const Home=()=>{

    const navigate=useNavigate();
    return(
    <>    
    <h1> This is Home Page</h1>
    <button onClick={()=>navigate('OrderSummary')}> Place Order</button>
    </>
    )
};

export default Home;

