import React from 'react'
import {connect} from 'react-redux'

class Header extends React.Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>
            default:
                return <li><a>Logout</a></li>

        }
    }

    render() {

        return (
            <nav>

                <div>
                    <a className="left brand-logo" >
                        Emaily
                    </a>

                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                    

                </div>
            </nav>
        )
    }
}

function msp(state) {
    return {
        auth: state.auth
    }
}


export default connect(msp)(Header)