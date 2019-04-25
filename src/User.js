import React from 'react';


class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.users);
        return (
            <div>
                <h2>Users</h2>
                <ul>
                    {
                        this.props.users.map((user, i) => <li key={i}>{user.name}</li>)
                    }
                </ul>
            </div>
        )
    }

}

export default User;