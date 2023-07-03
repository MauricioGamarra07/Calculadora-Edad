import React from 'react'
import PropTypes from 'prop-types'

function Resultado() {
    return (
        <>
            <div className="resultado">
                <div className="year">
                    <h1 id='num'>--</h1>
                    <h1>years</h1>
                </div>
                <div className="month">
                    <h1 id='num'>--</h1>
                    <h1>months</h1>
                </div>
                <div className="day">
                    <h1 id='num'>--</h1>
                    <h1>days</h1>
                </div>
            </div>
        </>
    )
}

export default Resultado