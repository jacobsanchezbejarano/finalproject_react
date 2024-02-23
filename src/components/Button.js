export default function Button(props) {
    return (
        <button className={"btn "+ props.classProp} aria-label="On Click">{props.name}</button>
    )
}