import {useEffect}from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`;
      }, [count]);
}

export default useDocumentTitle



//NOTE: when we are placing the boilar plate code in a seperate file, Since it is a custom hook the function name should start's with a word called 'use'(Convention)