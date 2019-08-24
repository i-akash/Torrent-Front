import React from 'react'
import { Dropdown,Label, Icon} from 'semantic-ui-react';

export default ({text="",icon="dropdown icon",onClick=()=>{},list=[]})=>{
    const trigger=<span><Icon name={icon} /> {text}</span> 
    return (
      <Dropdown  trigger={trigger} item>
          <Dropdown.Menu>
            {list.map((item,index)=><Dropdown.Item key={index} onClick={()=>onClick(`/${text}/${item}`)} text={item}/>)}
         </Dropdown.Menu>
      </Dropdown>
  )
}   
