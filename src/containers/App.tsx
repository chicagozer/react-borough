import * as React from "react";
import {connect} from "react-redux";
import {fetchBoroughs} from "../actions";
import {Borough} from "../components/borough";
import Boroughs from "../components/boroughs";
import {IRootState} from "../reducers";
import {RtdbService} from "../rtdb/rtdb.service";

interface IAppProps {
    boroughs: Borough[];
    dispatch?: Function;
}

class App extends React.Component<IAppProps, {}> {

    public rtdb: RtdbService;

    constructor(props: IAppProps) {
        super(props);

        this.rtdb = new RtdbService();
    }

    public componentDidMount() {
        this.props.dispatch(fetchBoroughs(this.rtdb));
    }

    public render() {

        return (
            <div>
                <Boroughs boroughs={this.props.boroughs}/>
            </div>
        );
    }
}

function mapStateToProps(state: IRootState): IAppProps {

    return {
        boroughs: state.boroughs || [],
    };
}

export default connect(mapStateToProps)(App);
