export const Checkbox = ({children}) => {
    return <label>
        <input type="checkbox"/>
        <p>{children}</p>
    </label>
}