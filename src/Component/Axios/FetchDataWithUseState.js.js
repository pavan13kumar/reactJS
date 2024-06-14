import React,{useState, useEffect} from 'react'
import axios from 'axios';
function FetchDataWithUseState() {

    const [loading,setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(()=> {
        
         setTimeout(()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                    setLoading(false)
                    setPost(response.data)
                    setError('')
                })
            .catch((error)=> {
                setLoading(false)
                setError("something went wrong!!")
                setPost({})
                })
        },1000)
    },[])

  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  )
}

export default FetchDataWithUseState
