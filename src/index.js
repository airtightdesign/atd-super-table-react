import React from 'react';
import ATDSuperTableDOM from 'atd-super-table/src/js/AtdSuperTable.js';

export default class AtdSuperTable extends React.Component {
    constructor(props) {
        super(props);

        this.superTable = null;
    }

    componentDidMount() {
        let superTable = document.getElementById('super-table');
        this.superTable = new ATDSuperTableDOM(superTable);
    }

    componentDidUpdate() {
        let superTable = document.getElementById('super-table');
        this.superTable = new ATDSuperTableDOM(superTable);
    }

    render() {
        return (
            <div id="super-table" className="super-table" data-super-table data-lockable>
                <div className="responsive">
                    {this.props.children}
                </div>
            </div>
        );
    }
}