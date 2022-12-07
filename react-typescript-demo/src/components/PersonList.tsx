type PersonListProps = {
    names: {
        first: string;
        last: string;
    }[]
}
export const PersonList = ({names}: PersonListProps) =>{
    return (
        <div>
            {names.map((name, index) => {
                return <h2 key={index}>{name.first} {name.last}</h2>
            })}
        </div>
    )
}