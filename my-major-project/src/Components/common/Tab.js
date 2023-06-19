import React from 'react'

const Tab = ({tabData,field,setField}) => {
  return (
    <div className='tab'>
     {
        tabData.map((tab)=>{
            <button key={tab.id}
            onClick={()=>setField(tab.type)}
            className={field===tab.type?"selected-tab-active":"selected-tab-deactive"}>{tab?.tabName}</button>
        })
     }
      
    </div>
  )
}

export default Tab
