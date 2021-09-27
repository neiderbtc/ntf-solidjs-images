
type Props = {
    name: string;
    placeholder: string;
    error?: string;
    label: string;
    type: 'text' | 'number'
}

const InputLabel = ({ name, placeholder, error, label, type }: Props) => {
    return (
        <div className="form-group my-2">
            <label htmlFor="">{label}</label>
            <input type={type || "text"} name={name} className="form-control" step="0.01" placeholder={placeholder} />
            <small id="helpId" className="text-muted">{error}</small>
        </div>
    )
}

export default InputLabel;