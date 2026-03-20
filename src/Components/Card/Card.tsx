import "./Card.css";
import horseImg from '../../Assets/running_horse.webp';
import { JSX } from "react/jsx-runtime";


type Props = {}


interface Props1{
  companyName: string;
  ticker: string;
  price: number;
}

 const Card = (props: Props) => {
  return (
    <div className="card1">
        <h2>Card 1</h2>
        <p>This is the first card.</p>
    </div>
  )
}

// when multiple components are there in a file then we have to export them with name and 
// default export one of them


export const Card1 = ({companyName, ticker, price}:Props1) => {
  return (
    <div className='card'>
        <img src={horseImg} alt="Image" />
        <div>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="INFON">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quis?</p>
        
    </div>
  )
}


// we can also write the above component in this way by using React.FC and defining the return type as JSX.Element

export const Card2 : React.FC<Props1> = ({companyName, ticker, price}:Props1) :JSX.Element => {
  return (
    <div className='card'>
        <img src={horseImg} alt="Image" />
        <div>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="INFON">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quis?</p>
        
    </div>
  )
}



export default Card