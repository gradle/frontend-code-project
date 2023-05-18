import React, { useEffect, useState } from "react";
function App() {
    const [users, setUsers] = useState([])

    const fetchOwnersData = () => {
        fetch("http://localhost:3000/api/repo-owners")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data.owners)
            })
    }

    useEffect(() => {
        fetchOwnersData()
    }, [])

    return (
        <div>
            {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.name}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
