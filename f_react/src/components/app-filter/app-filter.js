
import './app-filter.css';

const AppFilter = (props) => {
    const btnData= [
        {name: 'all', label:'Все сотрудники'},
        {name: 'rise', label:'На повышение'},
        {name: 'moreThen100', label:'ЗП больше 100$'}
    ]

    const buttons = btnData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
            key={name} 
            className={`btn ${clazz}`}
            type='button'
            onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;