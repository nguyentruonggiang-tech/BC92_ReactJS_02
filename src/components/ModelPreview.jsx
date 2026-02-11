function ModelPreview({
    imageSrc,
    altText,
    showOverlay = false,
    overlaySrc = '',
    glassesName = '',
    glassesDesc = '',
}) {
    return (
        <article className={`model-card ${showOverlay ? 'model-card--with-glasses' : ''}`}>
            <img className="model-card_photo" src={imageSrc} alt={altText} />

            {showOverlay && overlaySrc && (
                <>
                    <img className="glasses-overlay" src={overlaySrc} alt="" aria-hidden />
                    <div className="model-card__info">
                        <h2>{glassesName}</h2>
                        <p className="model-card__desc">{glassesDesc}</p>
                    </div>
                </>
            )}
        </article>
    )
}

export default ModelPreview
