import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

function App() {
    const data = [
        {name: "Олег К.", salary:800, increase: true, id: 1},
        {name: "Владимир В.", salary:2000, increase: false, id: 2},
        {name: "Дмитрий Б.", salary:3000, increase: false, id: 3},
        {name: "Михаил Т.", salary:2100, increase: true, id: 4},
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <EmployeesList data={data}/>
                <EmployeesAddForm/>
            </div>
        </div>
    )
}

export default App;