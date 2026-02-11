import { useState } from 'react'
import GlassesGallery from './components/GlassesGallery'
import ModelPreview from './components/ModelPreview'
import glassesData from './data/dataGlasses.json'
import './App.css'

const glassesList = glassesData.map((item) => {
  const overlaySrc = item.url.replace('./', '/')
  const thumbnailSrc = overlaySrc.replace('/v', '/g').replace('.png', '.jpg')

  return {
    ...item,
    overlaySrc,
    thumbnailSrc,
  }
})

function App() {
    const [selectedId, setSelectedId] = useState(glassesList[0]?.id ?? null)
    const selectedGlasses = glassesList.find((item) => item.id === selectedId)

    if (!glassesList.length) {
        return (
            <main className="app empty-state">
                <p>No data found!!!</p>
            </main>
        )
    }

    return (
        <main className="app">
            <header className="app__header">
                <h1>TRY GLASSES APP ONLINE</h1>
            </header>

            <section className="display">
                <div className="display__content">
                    <ModelPreview
                        imageSrc="/glassesImage/model.jpg"
                        showOverlay={Boolean(selectedGlasses)}
                        overlaySrc={selectedGlasses?.overlaySrc}
                        glassesName={selectedGlasses?.name}
                        glassesDesc={selectedGlasses?.desc}
                    />

                    <ModelPreview
                        imageSrc="/glassesImage/model.jpg"
                    />
                </div>
            </section>

            <GlassesGallery
                items={glassesList}
                selectedId={selectedId}
                onSelect={setSelectedId}
            />
        </main>
    )
}

export default App
