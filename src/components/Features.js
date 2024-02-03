import * as React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline center">
    {gridItems.map((item) => (
      <div key={item.name} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            { item.image && <img src={item.image} alt={item.name} style={{ height:'125px', width: '125px' }}/> }
            <p style={{ marginTop: '20px' }}>{item.name}</p>
            { item.level && <p>{item.level}</p> }
            { item.with && <p>{item.with}</p> }
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
    })
  ),
}

export default FeatureGrid
