import React from 'react'

const Table = ({columns, data}) => {
    if (columns === undefined || data.length === 0) return null;    

    const tableHeaders = (
        <tr key="one">
            {columns.map((col, idx) => (
                <th id={`th-${col.toLowerCase()}`} key={`col-${idx}`}>{col}</th>
            ))}
        </tr>
    );

    const rows = data.map((row, idx) => (
        <tr key={idx}>
            {columns.map((col, i) => (
                <td id={`td-${col.toLowerCase()}`} key={`row-${idx}-col-${i}`}>{row[col]}</td>
            ))}
        </tr>
    ));

    return (        
            <table>
                <caption>Movies</caption>
                <thead>
                    {tableHeaders}
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
    );
}

export default Table;