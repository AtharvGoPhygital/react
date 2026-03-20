import React, { JSX } from 'react'
import Card, { Card1, Card2 } from '../Card/Card'

// type Props = {}
interface Props{}

const CardList = (props: Props) => {
  return (
    <div>

       <Card />
        <Card1 companyName="Apple" ticker="AAPL" price={150} />
        <Card1 companyName="Microsoft" ticker="MSFT" price={300} />
        <Card1 companyName="Google" ticker="GOOGL" price={250} />
       
    </div>
    
  )
}

export const CardList1 : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
        <Card2 companyName="Apple" ticker="AAPL" price={150} />
        <Card2 companyName="Microsoft" ticker="MSFT" price={300} />
        <Card2 companyName="Google" ticker="GOOGL" price={250} />
    </div>
    
  )
}

export default CardList