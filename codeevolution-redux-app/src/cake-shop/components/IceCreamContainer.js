import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../../redux' 

 function IceCreamContainer(props) {
  return (
    <div>
        <h2>number of icecreams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>buy iceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}
export default connect(mapDispatchToProps,mapStateToProps) (IceCreamContainer)