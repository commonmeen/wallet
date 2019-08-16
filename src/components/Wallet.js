import React, { useState } from 'react'
import uuid from 'uuid'
import { Button, Form, Option, Container, Row, Col } from 'react-bootstrap';

const Wallet = (props) => {
    const { result, resultExpend } = props
    const [id, setId] = useState(uuid.v4())
    const [income, setIncome] = useState()
    const [expend, setExpend] = useState()
    const [transfer, setTransfer] = useState()
    const { incomeWallet, expendWallet } = props


    const handleSubmit = (e) => {

        e.preventDefault()
        const data = {
            id,
            balance: result.balance,
            income,
            expend
        }

        if (data.income) {
            incomeWallet(data)
        }
        else if (data.expend) {
            expendWallet(data)
        }
    }

    return (
        <div>
            <Container>
                <p>My Wallet</p>
                <p>Balance {result.balance} baht.</p>
                <Form onSubmit={handleSubmit}>
                    <span>Income </span>
                    <input type="number" name="income" onChange={e => setIncome(e.target.value)} />
                    <button>Enter</button>
                    <br />
                    <br />

                    <span>Expend </span>
                    <input type="number" name="expend" onChange={e => setExpend(e.target.value)} />
                    <button>Enter</button>
                    <br />
                    <br />
                </Form>
            </Container>
        </div>
    )

}

export default Wallet
