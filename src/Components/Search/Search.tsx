import React, { ChangeEvent, SyntheticEvent } from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) => {
    const[search, setSearch] = React.useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    //const onClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {}

    const onClick = (e: SyntheticEvent) => {
        console.log(e);
    }

  return (
    <div>
        <input value={search} onChange={handleChange}></input>
        <button onClick={(e) => onClick(e)} />
    </div>
  )
}
 
export default Search