import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import Tesseract from 'tesseract.js'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class TicketInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nomcommerce: '',
            produits: '',
            total: '',
	    date: '',
        }
    }

    handleChangeInputNomcommerce = async event => {
        const nomcommerce = event.target.value
        this.setState({ nomcommerce })
    }

    handleChangeInputProduits = async event => {
        const produits = event.target.value
        this.setState({ produits })
    }

    handleChangeInputTotal = async event => {
        const total = event.target.validity.valid
            ? event.target.value
            : this.state.total

        this.setState({ total })
    }

    handleChangeInputDate = async event => {
        const date = event.target.value
        this.setState({ date })
    }

    handleIncludeTicket = async () => {
        const { nomcommerce, produits, total, date } = this.state
        const arrayTime = date.split('/')
        const payload = { nomcommerce, produits, total, date: arrayTime }

        await api.insertTicket(payload).then(res => {
            window.alert(`Ticket inserted successfully`)
            this.setState({
                nomcommerce: '',
                produits: '',
                total: '',
		date: '',
            })
        })
    }



    render() {
        const { nomcommerce, produits, total, date } = this.state
        return (
            <Wrapper>
                <Title>Create Ticket</Title>

                <Label>Nom de Commerce: </Label>
                <InputText
                    type="text"
                    value={nomcommerce}
                    onChange={this.handleChangeInputNomcommerce}
                />

		<Label>Produits: </Label>
		<InputText
                    type="text"
                    value={produits}
                    onChange={this.handleChangeInputProduits}
                />

                <Label>Total: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    min="0"
                    max="100000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={total}
                    onChange={this.handleChangeInputTotal}
                />

                <Label>Date: </Label>
                <InputText
                    type="text"
                    value={date}
                    onChange={this.handleChangeInputDate}
                />

                <Button onClick={this.handleIncludeTicket}>Add Ticket</Button>
                <CancelButton href={'/tickets/list'}>Cancel</CancelButton>


            </Wrapper>
        )
    }
}

export default TicketInsert
