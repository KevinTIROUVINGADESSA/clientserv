import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Deewee MERN Application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/tickets/list" className="nav-link">
                                Tickets
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/tickets/create" className="nav-link">
                                Create Tickets
                            </Link>
                        </Item>
			<Item>
                            <Link to="/tickets/update/:id" className="nav-link">
                                Update Tickets
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
