import './styling/Background.css'

export function Background() {
  return (
    <>
      <div className="lake-background" aria-hidden="true">
        <div className="lake-glow" />
        <div className="lake-sheen" />
      </div>
      <div className="snowfall" aria-hidden="true">
        <div className="snow-layer snow-layer-small" />
        <div className="snow-layer snow-layer-medium" />
        <div className="snow-layer snow-layer-near" />
      </div>
    </>
  )
}
