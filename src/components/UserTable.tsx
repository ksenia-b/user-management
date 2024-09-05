import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UserTable: React.FC = () => {
    const [search, setSearch] = useState({ name: '', username: '', email: '', phone: '' });
    const { users } = useSelector((state: RootState) => state.users);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    const filteredUsers = users.filter((user) =>
        Object.keys(search).every((key) =>
            user[key as keyof typeof user].toString().toLowerCase().includes(search[key as keyof typeof search].toLowerCase())
        )
    );

    return (
        <>
            <div className="filter-inputs">
                <input name="name" placeholder="Search by name" onChange={handleInputChange} />
                <input name="username" placeholder="Search by username" onChange={handleInputChange} />
                <input name="email" placeholder="Search by email" onChange={handleInputChange} />
                <input name="phone" placeholder="Search by phone" onChange={handleInputChange} />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserTable;
