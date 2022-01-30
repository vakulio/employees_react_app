import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Олег К.", salary:800, increase: false, rise: true, id: 1},
                {name: "Владимир В.", salary:2000, increase: false, rise: false, id: 2},
                {name: "Дмитрий Б.", salary:3000, increase: false, rise: false, id: 3},
                {name: "Михаил Т.", salary:2100, increase: false, rise: false, id: 4},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    seachEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSeach = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
                break
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
                break
            default: 
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.seachEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSeach={this.onUpdateSeach}/>
                    <AppFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                    <EmployeesList 
                    data={visibleData}

                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                    <EmployeesAddForm onAdd={this.addItem}/>
                </div>
            </div>
        )
    }
}

export default App;