
const InputLabel = ({ name, placeholder, error, label, type }) => {
    return (
        <div class="form-group my-2">
            <label for="">{label}</label>
            <input type={type || "text"} name={name} class="form-control" step="0.01" placeholder={placeholder} />
            <small id="helpId" class="text-muted">{error}</small>
        </div>
    )
}

export default InputLabel;