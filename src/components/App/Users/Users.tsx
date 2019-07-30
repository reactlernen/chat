import React from 'react';

export interface UsersProps {

}

interface UsersState {

}

export class Users extends React.Component<UsersProps, UsersState> {

    constructor(props: UsersProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<div className="users">
            <h2>Users</h2>
        </div>);
    }
}
