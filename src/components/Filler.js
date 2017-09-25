import React, { Component } from 'react';

export default class Filler extends Component {

    render() {
        return (
            <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
                    return <h1>Hi!</h1>
                })}
            </div>
        )
    }
}