function GlassesItem({ item, isSelected = false, onClick }) {
    return (
        <button
            type="button"
            className={`gallery__item ${isSelected ? 'is-selected' : ''}`}
            onClick={() => onClick(item.id)}
        >
            <img src={item.thumbnailSrc} loading="lazy" />
        </button>
    )
}

export default GlassesItem
