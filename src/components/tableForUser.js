import React from 'react';
const TableForUser = (props) => (
    <table border="1">
    <thead>
    </thead>
    <tbody>
        <tr>
            <th>id</th>
            <td>{props.userDetail.id}</td>
        </tr>

        <tr>
            <th>Name</th>
            <td>{props.userDetail.name}</td>
        </tr>
            
        <tr>
            <th>Email</th>
            <td>{props.userDetail.email}</td>
        </tr>

        {/* <tr>
        <th>Address</th>
        <td>{props.userDetail.address.street}</td>
        </tr> */}

        {/* <tr>
        <th>Geo</th>
        <td>{props.userDetail.geo.lat}</td>
        </tr> */}

        <tr>
            <th>Phone</th>
            <td>{props.userDetail.phone}</td>
        </tr>
        
        <tr>
            <th>Website</th>
            <td>{props.userDetail.website}</td>
        </tr>
    </tbody>
    
</table>
)

export default TableForUser;