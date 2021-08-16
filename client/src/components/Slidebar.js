import react from 'react'

function Slidebar(props)
{
    return (
      
            <div className="ui sidebar overlay left inverted menu visible">
        <ul>
            <li className="item link"> <a href="/">Home </a> </li>
            <li className="item link"> <a href="/post">Add Note </a></li>
            <li className="item link"> Browse </li>
            <li className="item link"> <a href="/login">Login </a></li>
            </ul></div>
        )
};

export default Slidebar;
