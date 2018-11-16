import React from 'react';

const TableForTask = (props) => (
        <tbody>
            <tr>
                <td>
                    {props.tableContent.title}
                </td>
                <td>
                    {props.tableContent.completed.toString()}
                </td>
            </tr>
        </tbody>
)

export default TableForTask;