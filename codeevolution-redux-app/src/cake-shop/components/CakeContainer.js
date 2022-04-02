import React from 'react'
import { connect } from 'react-redux'
import { buyCake }from '../../../src/redux/index'

 function CakeContainer(props) {
  return (
    <div>
        <h2>number of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>buy cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    byCake: () => dispatch(buyCake())
  }
}
export default connect(mapDispatchToProps,mapStateToProps) (CakeContainer)