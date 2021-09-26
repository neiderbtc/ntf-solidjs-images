
const ButtonAction = ({ onClick, text, primary, secondary, danger, success, type }) => {
    return (
        <div class="d-grid">
            <button 
            class={`btn btn-block  ${primary ? 'btn-primary' : ''}  ${secondary ? 'btn-secondary' : ''} 
            ${danger ? 'btn-danger' : ''} ${success ? 'btn-success' : ''}`}
            onClick={onClick}
            type={type || 'button'}
            >{text}</button>
        </div>
    )
}

export default ButtonAction;