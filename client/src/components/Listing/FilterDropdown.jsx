import React, {useState, useEffect} from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import {useLocation, useHistory} from 'react-router-dom'


export default function FilterDropdown(){
    const location = useLocation()
    const history = useHistory()
    const query = new URLSearchParams(location.search)
    let pre_cat = query.get('category').split(",")
    let pre_ame = query.get('amenities').split(",")
    let pre_pri = query.get('price').split(",")
    let parameters = pre_cat.concat(pre_ame, pre_pri)

    const [filters, setFilters] = useState([
        {name:"house", id:"category"}, 
        {name:"hotel", id:"category"},
        {name:"hostel", id:"category"},
        {name:"apartment", id:"category"}, 
        {name:"bed and breakfast", id:"category"},
        {name:"villa", id:"category"},
        {name:"wifi", id:"amenities"},
        {name:"ac",id:"amenities"} ,
        {name:"kitchen", id:"amenities"},
        {name:"breakfast", id:"amenities"},
        {name:"pool", id:"amenities"},
        {name:"heater", id:"amenities"},
        {name:"frontedesk", id:"amenities"},
        {name:"0-1500", id:"price"},
        {name:"1500-3000", id:"price"},
        {name:"3000-5000", id:"price"},
    ])
    
    const [selected, setSelected] = useState()
    

    useEffect(()=>{
        let temp = []
        parameters.forEach(elem=>{
            let index = filters.findIndex(filter => filter['name'] === elem )
            if (index !== -1){
                temp.push(filters[index])
            }
        })
        setSelected(temp)
    },[])

    const onSelect = (list,item) => {
        let category = []
        let amenities = []
        let price = []
        list.forEach(elem =>{
            if(elem['id'] === 'category'){
                category.push(elem['name'])
            }
            else if(elem['id'] === 'amenities'){
                amenities.push(elem['name'])
            }
            else if(elem['id'] === 'price'){
                price.push(elem['name'])
            }
        })
        
        history.push(`/listing?search_query=${query.get('search_query')}&start_date=${query.get('start_date')}&end_date=${query.get('end_date')}&page=${1}&per_page=${query.get('per_page')}&category=${category}&amenities=${amenities}&price=${price}`)         
    }
    const onRemove = (list, item) => {
        let category = []
        let amenities = []
        let price = []
        list.forEach(elem =>{
            if(elem['id'] === 'category'){
                category.push(elem['name'])
            }
            else if(elem['id'] === 'amenities'){
                amenities.push(elem['name'])
            }
            else if(elem['id'] === 'price'){
                price.push(elem['name'])
            }
        })
        history.push(`/listing?search_query=${query.get('search_query')}&start_date=${query.get('start_date')}&end_date=${query.get('end_date')}&page=${query.get('page')}&per_page=${query.get('per_page')}&category=${category}&amenities=${amenities}&price=${price}`)
    } 

    
    
    return (
        <Multiselect
        options={filters} // Options to display in the dropdown
        selectedValues={selected} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        showCheckbox={true}
        groupBy="id"
        closeOnSelect={false}
        hidePlaceholder={true}
        placeholder="Filters"
        style = {{ chips: { background: "none", color:"black",position:"relative",left:"10px"}, 
        searchBox: {
            "display":"flex",
            "height":"40px", 
            "width":"250px",
            "white-space": "nowrap", 
            "overflow": "hidden",
            "border": "none",
            "text-overflow": "ellipsis",
            "backgroundColor":"white" ,
            "padding":"2px",
            "margin-left":"2px"
            },
        }}
        />
    )

}