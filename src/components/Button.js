export default function Button(props) {
    return (
        <button className={"btn "+ props.classProp}>{props.name}</button>
    )
}