import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {
    const { data, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>All Users: {data.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;