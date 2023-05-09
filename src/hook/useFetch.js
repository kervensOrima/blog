import { useEffect, useState } from 'react'


const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url, { signal: abortController.signal })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`cannot get data, Backend error`)
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })


        return () => {
            console.log('clean up')
            abortController.abort()
        }
    }, [url])

    return { data, loading, error }
}



export default useFetch;

