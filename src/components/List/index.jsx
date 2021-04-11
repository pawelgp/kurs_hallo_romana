import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import { twitterAccounts } from '../../data/twitterAccounts'

const List = () => (
    <ul className="list">
        {twitterAccounts.map(({name, image, description, twitterLink})=>(
            <li className="list__item">
                <h4 className="item__title">{name}</h4>
                <img className="item__image" src={image} alt="" srcset="" />
                <p className="item__text">{description}</p>
                <a href={twitterLink}>{twitterLink}</a>
            </li>
        ))}
    </ul>
)

List.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired
}

// use only for setting default values
List.defaultProps = {
    name: "Name",
    image: "Portrait",
    description: "description",
    twitterLink: "#"
}

export default List