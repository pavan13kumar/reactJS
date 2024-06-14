import React from 'react'
import { useNavigate} from 'react-router-dom'
const OrderSummary = () => {
   const navigate=useNavigate();
    
  return (
    <h1>
      Order Confirmed <br/>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </h1>
  )
}

export default OrderSummary