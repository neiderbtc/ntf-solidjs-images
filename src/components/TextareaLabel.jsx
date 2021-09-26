
const TextareaLabel = ({name, placeholder, error, label}) => {
    return (
        <div class="form-group my-2">
        <label for="">{label}</label>
        <textarea class="col-2 form-control" name={name} placeholder={placeholder}></textarea>
        <small id="helpId" class="text-muted">{error}</small>
      </div>
    )
}

export default TextareaLabel;