import './index.css'

const PlanetItem = props => {
  const {planetData} = props
  const {name, imageUrl, description} = planetData

  return (
    <li className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default PlanetItem
