import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <nav>

                <div>
                    <a className="left brand-logo" >
                        Emaily
                    </a>

                    <ul className="right">
                        <li>
                            <a>
                                Login with Google
                            </a>
                        </li>
                    </ul>
                    

                </div>
            </nav>
        )
    }
}


export default Header