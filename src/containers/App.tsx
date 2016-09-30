import * as React from 'react'
import {connect} from 'react-redux'
import {RootState} from '../reducers'
import { fetchBoroughs } from '../actions'
import Boroughs from '../components/boroughs'
import { Borough } from '../components/borough'

interface AppProps {
    boroughs: Borough[],
  dispatch?: Function;
}

class App extends React.Component<AppProps,{}> {

    constructor(props: AppProps) {
        super(props);

    }


    componentDidMount() {
        this.props.dispatch(fetchBoroughs())
    }


    render() {

        return (
            <div>
            <Boroughs boroughs={this.props.boroughs}/>
            </div>
        )
    }
}

function mapStateToProps(state: RootState): AppProps {

  return {
        boroughs: state.boroughs || []
    }
}

export default connect(mapStateToProps)(App)
