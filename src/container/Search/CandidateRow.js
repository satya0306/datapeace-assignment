import React, { Component } from 'react';
import TableRow from './TableRow';

class CandidateRow extends Component {

    render() {
        console.log(this.props.candidates)
        var onProductTableUpdate = this.props.onCandidateTableUpdate;
        // var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var candidate = this.props.candidates.map(candidate =>{
        if (candidate.first_name.indexOf(filterText) === -1) {
          return;
        }
        return (<TableRow onProductTableUpdate={onProductTableUpdate} 
                        candidate={candidate} 
                        key={candidate.id}/>)
      });
        return (
            <div>
                {candidate}
            </div>
        );
    }
}

export default CandidateRow;