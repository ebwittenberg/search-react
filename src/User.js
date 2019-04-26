import React from 'react';


class User extends React.Component {

    render() {
        const searchedUsers = this.props.users.filter(user => user.name.includes(this.props.searchText));
        console.log(searchedUsers);

        return (
            <div>
                <h2>Users</h2>
                <ul>
                    {
                        this.props.searchText ? searchedUsers.map((user, i) => <li key={i}>{user.name}</li>) : this.props.users.map((user, i) => <li key={i}>{user.name}</li>)
                    }
                    {
                        searchedUsers.length === 0 ? (<h2>No users found</h2>) : null
                    }
                </ul>
            </div>
        )
    }

}

export default User;