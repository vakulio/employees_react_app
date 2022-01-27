import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }
    
    onUpdateSeach = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSeach(term)
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control seach-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSeach}/>
    
        )
    }
}

export default SearchPanel;