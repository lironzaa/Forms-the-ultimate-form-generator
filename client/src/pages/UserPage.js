import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserPage = () => {
    const [{ isLoading, data, err }, setStatus] = useState({ isLoading: true });
    useEffect(() => {
        axios.get('/user/forms')
            .then(res => setStatus({ data: res.data }))
            .catch(err => setStatus({ err: err?.response?.data?.message || err.message }))
    }, [])

    if (isLoading) return <h1>Loading...</h1>
    if (err) return <h1 style={{ color: 'red' }}>{err}</h1>
    return (
        <div>
            <h1>User Page</h1>
            {data.map(form => (
                <Link style={{ display: 'block' }} to={`/form/${form._id}`} key={form._id}>
                    {form._id}
                </Link>
            ))}
        </div>
    )
}

export default UserPage;