import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, useToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email: email };
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(data => data.json())
            .then(data => {
                console.log('data inside useToken', data)
            })
        console.log(email)
    }, [user])
    return token
}
export default useToken