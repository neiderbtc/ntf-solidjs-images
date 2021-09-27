
type Props = {
  name: string;
  placeholder: string;
  error?: string;
  label: string;
}

const TextareaLabel = ({name, placeholder, error, label}: Props) => {
    return (
        <div className="form-group my-2">
        <label htmlFor="">{label}</label>
        <textarea className="col-2 form-control" name={name} placeholder={placeholder}></textarea>
        <small id="helpId" className="text-muted">{error}</small>
      </div>
    )
}

export default TextareaLabel;