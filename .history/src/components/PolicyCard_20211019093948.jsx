import React from 'react'
import PropTypes from 'prop-types'

const PolicyCard = props => {
    return (
        <div className="policy-card">
            <div className="policy-card__icon">
                <i className={props.icon}></i>
            </div>
            .pol
        </div>
    )
}

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default PolicyCard
