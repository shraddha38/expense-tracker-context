import React from 'react';
import { UserContext } from '../contexts/UserContext';

export function UserInfo() {
    const [employeeDetail] = React.useContext(UserContext);
    return (
        <div>
            {employeeDetail.name}
            {employeeDetail.email}
        </div>
    );
};
