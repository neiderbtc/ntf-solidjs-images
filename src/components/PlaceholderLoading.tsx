type Props = {
    text?: string;
}

const PlaceholderLoading = ({ text }: Props) => {
    return (
        <div className="text-center">
            <p>{text || 'loading...'}</p>
        </div>
    )
}

export default PlaceholderLoading;