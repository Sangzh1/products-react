import { useEffect, useState } from 'react'

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsPending(true)
            try {
                const req = await fetch(url)
                if(!req.ok) {
                    throw new Error('Something went wrong :(')
                }
                const data = await req.json()

                setData(data)
                setIsPending(false)
                setError(null)
            } catch(error) {
                setIsPending(false)
                setError(error.massage) 
                console.log(error.massage);
            }
        }
        getData()
    }, [url])


    return {data, isPending, error}
}