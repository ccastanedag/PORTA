import React from 'react'

const PortafolioDetail = ({ match }) => {
  return (
    <div>
      <p>Portafolio Detail {match.params.categoryId}/{match.params.projectId}</p>
    </div>
  )
}

export default PortafolioDetail
