import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../deewee.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://www.deewee.net/fr/">
                <img src={logo} width="50" height="50"/>
            </Wrapper>
        )
    }
}

export default Logo
