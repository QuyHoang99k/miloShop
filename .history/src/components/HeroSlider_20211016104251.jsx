import React from 'react'
import PropTypes from 'prop-types'

const HeroSlider = props => {
    return (
        <div className="herp-slider">
            HeroSlider
        </div>
    )
}

HeroSlider.propTypes = {
    data:PropTypes.array.isRequired
}

export default HeroSlider
