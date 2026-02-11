import GlassesItem from './GlassesItem'

function GlassesGallery({ items, selectedId = null, onSelect }) {
    return (
        <section className="gallery" aria-label="Danh sách kính">
            {items.map((glasses) => (
                <GlassesItem
                    key={glasses.id}
                    item={glasses}
                    isSelected={selectedId === glasses.id}
                    onClick={onSelect}
                />
            ))}
        </section>
    )
}

export default GlassesGallery
