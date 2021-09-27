
type Props = {
    text: string;
    onClick?: Function;
    primary?: boolean;
    secondary?: boolean;
    danger?: boolean;
    success?: boolean;
    type?: 'button' | 'submit'
}

const ButtonAction = ({ onClick, text, primary, secondary, danger, success, type }: Props) => {
    return (
        <div className="d-grid">
            <button
                className={`btn btn-block  ${primary ? 'btn-primary' : ''}  ${secondary ? 'btn-secondary' : ''} 
            ${danger ? 'btn-danger' : ''} ${success ? 'btn-success' : ''}`}
                onClick={() => onClick}
                type={type || 'button'}
            >{text}</button>
        </div>
    )
}

export default ButtonAction;