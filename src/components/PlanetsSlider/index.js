import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

class PlanetsSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {planetsList: props.planetsList}
  }

  render() {
    const {planetsList} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="planets-heading">PLANETS</h1>
          <ul testid="planets" className="list-container">
            <Slider {...settings}>
              {planetsList.map(eachPlanet => (
                <PlanetItem key={eachPlanet.id} planetData={eachPlanet} />
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    )
  }
}

export default PlanetsSlider
