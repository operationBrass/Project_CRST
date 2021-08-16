import React, { useEffect } from 'react'
import classNames from 'classnames'

function Slidebar(props)
{
    return (
      
            <div className="ui sidebar overlay left inverted menu visible">
        <ul>
            <li className="item link"> Home </li>
            <li className="item link"> Manage Notes </li>
            <li className="item link"> Browse </li>
            <li className="item link"> Logout </li>
            </ul></div>
        )
};

export default Slidebar;
