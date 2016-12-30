import * as React from 'react';
import { Borough } from './borough';
//import * as Config  from 'config';
var Config = require('config');
interface BoroughsProps {
    boroughs: Borough[];
}

class Boroughs extends React.Component< BoroughsProps, {} > {

    constructor(props: BoroughsProps) {
        super(props);

    }

    render() {

        return (
            <div>
                <div className="page-header">
                    <h1>React Borough List<small>[{Config.version}]</small></h1>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Valuation</td>
                        <td>Count</td>
                    </tr>
                    </thead>
                    <tbody>

                        { this.props.boroughs.map(borough =>
                            <tr key={borough.name}>
                                <td> { borough.name } </td>
                                <td> { borough.valuation } </td>
                                <td> { borough.count }</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>)
    }
}

export default Boroughs
