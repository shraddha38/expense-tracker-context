import { useState } from 'react'


import { Button, Container, Stack } from '@mui/material'
import BudgetCard from './components/BudgetCard'

function App() {


  return (

    <Container sx={{
      boder: "1px solid red",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      m: 10,
      pl: "20%"
    }}>
      <Stack direction="horizontal" gap={4} className="mb-4">
        <h1 className='me-auto'> Budgets</h1>
        <Button variant="contained" color="primary">Add Budget</Button>
        <Button variant="contained" color="primary">Add  Expense </Button>
      </Stack>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
        alignItems: "flex-start"
      }}>
        <BudgetCard name={"Entertainment"} amount={600} max={1000} />
        <BudgetCard name={"Food"} amount={500} max={1000} />
      </div>
    </Container>

  )
}

export default App
