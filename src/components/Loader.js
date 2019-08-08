import React from 'react'

//https://loading.io/css/
//Appears upon refresh when logged in

const Loader = () => {
  return (
    <div className="loader">
    <div className="lds-heart"><div></div></div>
    </div>
  )
}

export default Loader
