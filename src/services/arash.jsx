/*
so we create a column array like bellow :
column = [
    {path:'title',labeL:'Title'},
    {path:'rank',label:'rank'},
]
and then we pass it to the TableBody Component , which uses it to create the table of movies
so we pass movies too .
 */

// ok so we had

import {Component} from "react";

export default class Some extends Component{
    renderCell = (item,column) => {
        if(column.content) {
            return column.content(item); // which refers to
        }
    }
    render() {
        return (
            <div>
                {data.map(movie => (
                    <tr key={movie._id}>
                        {columns.map(col => (
                            <td>{this.rendercell(movie,col)}</td>
                        ))}
                    </tr>
                ))}
            </div>
        )
    }
}