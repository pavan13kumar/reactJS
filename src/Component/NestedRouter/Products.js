import { Link, Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <>
    <div>
      <input type='Search' placeholder='Search products'/>
    </div>  <br/>
    <nav className='prod'>
      <Link to='featured'>Featured</Link>   {/* Relative Link */}
      <Link to='/products/new'> New</Link>  {/* Absolute Link */}
    </nav>   <br/>
    <Outlet/>
    {/* however the products page still does'nt know where to render the child components ,it can be done with the help of <Outlet/> */}
    {/* if there is any nested Routers, then the parent Router must be contain Outlet tag.  */}
    </>
  )
}

export default Products


//NOTE:
//<Link to='new'> New</Link> this is a Relative link(does not contain / ) which routes the closest Router.
//<Link to='/products/new'> New</Link>  this is the Absolute Link 