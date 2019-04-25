import React from 'react';


class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.users);
        return (
            <ul>
                {
                    this.props.users.map((user, i) => <li key={i}>{user.name}</li>)
                }
            </ul>
        )
    }

}

export default User;