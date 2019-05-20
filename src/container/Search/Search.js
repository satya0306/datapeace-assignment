import React,{Component} from 'react';
import SearchBar from './SearchBar';
import CandidateRow from './CandidateRow';

class Search extends Component {
    constructor(props){
        super(props);
            this.state={
                filterText:"",
                candidates:this.props.candidates
            }
        }
    


    handleUserInput = (filterText)=> {
        this.setState({filterText: filterText});
    };

    handleCandidateTable = (evt) => {
        var item = {
          id: evt.target.id,
          name: evt.target.name,
          value: evt.target.value
        };
        var candidates = this.state.candidates.slice();
        var newcandidates = candidates.map(candidate=> {
    
            for (var key in candidate) {
            if (key === item.name && candidate.id === item.id) {
                candidate[key] = item.value;
        
            }
        }
            return candidate;
      });
        this.setState({candidates:newcandidates});
    };

    render(){
        console.log(this.props.candidates);
        console.log(this.state.candidates);
        return(
            <div>
                <SearchBar filterText={this.state.filterText} 
                            onUserInput={this.handleUserInput} />
                <CandidateRow onCandidateTableUpdate={this.handleCandidateTable} 
                            candidates={this.state.candidates} 
                            filterText={this.state.filterText}/>
            </div>
        )
    }

};

export default Search;