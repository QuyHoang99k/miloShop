import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const ProductCard = props => {
    return (
        <div>
            
        </div>
    )
}

ProductCard.propTypes = {
    img01:PropTypes.string.isRequired,
    img02:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    slug:PropTypes.string.isRequired,
}

export default ProductCard
