import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Nothing = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])



    
    return(
        <div>
            <h3>
                nothing has found
            </h3>

        </div>
    )
}
export default Nothing;