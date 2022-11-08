import React from 'react';
import Fun from './fun';

export default class newclass extends React.Component{
    render()
    {
        return(
            <div>
                <h1>This is Class Component</h1>
                <ul>
                    <li>Home</li>
                    <li>Department</li>
                    <li>About US</li>
                    <li>Contact US</li>
                </ul>
                <Fun />
            </div>
        )
    }
}