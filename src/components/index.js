import ArithmeticCoder from './arithmetic coder/index'
import React, { useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function Handler() {
    const [code, setCode] = React.useState('')
    const [fineInput, setfineInput] = React.useState('')
    const [probs, setProbs] = React.useState(null)
    const [provided, setProvided] = React.useState(false)
    const [show, setShow] = React.useState(false)

    const result = (e) => {
        e.preventDefault()
        setShow(true)
    }

    const handleCode = (e) => {
        setCode(e.target.value)
        setShow(false)
    }

    const handleVI = (e) => {
        var tmp = {}
        tmp[e.target.name] = parseFloat(e.target.value)
        setProbs({ ...probs, ...tmp })
    }

    useEffect(() => {
        setfineInput([...new Set(code)])
    }, [code])

    return (
        <>
            <AppBar
                position="static"
                color="secondary"
                style={{ height: '3rem', textAlign: 'center' }}
            >
                <div style={{ paddingTop: '0.5rem', fontSize: '1.5rem' }}>
                    Arithmetic Coder
                </div>
            </AppBar>
            <p style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                *general info :
                <hr />
                - You can input only the word to code or can provide the
                probabilities along with word too. <br />- Iteration 1 is the
                initial CDF of probabilities and in the last Iteration only the
                max and min value is of our interest for generating tag value.
            </p>
            <Container maxWidth="sm">
                <form onSubmit={result} style={{ marginTop: '1rem' }}>
                    <TextField
                        name="word"
                        onChange={handleCode}
                        value={code}
                        label="Input Word"
                        fullWidth
                    />
                    <Checkbox
                        onChange={() => setProvided(!provided)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    Select here to input probabilities
                    {provided &&
                        fineInput.map((value, index) => (
                            <>
                                <TextField
                                    key={index}
                                    type="number"
                                    name={value}
                                    fullWidth
                                    inputProps={{
                                        min: '0',
                                        max: '1',
                                        step: '0.01',
                                    }}
                                    style={{ marginBottom: '1rem' }}
                                    onBlur={handleVI}
                                    label={`probablity of ${value}`}
                                />
                            </>
                        ))}
                    <br />
                    <Button
                        style={{ marginRight: '1rem' }}
                        variant="contained"
                        type="submit"
                        color="secondary"
                    >
                        Let's go!
                    </Button>
                    <Button
                        variant="contained"
                        type="reset"
                        onClick={() => {
                            setCode('')
                            setShow(false)
                        }}
                        color="primary"
                    >
                        Reset
                    </Button>
                </form>
                {show && <ArithmeticCoder code={code} prob={probs} />}
            </Container>
        </>
    )
}
