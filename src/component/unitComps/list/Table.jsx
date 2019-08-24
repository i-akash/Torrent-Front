import React from 'react'


const printDummy=(num)=>{
    let dummies=[]
    for(let i=0;i<num;i++)
        dummies.push(<tr><td style={{color:"white"}}>akash</td><td></td><td></td><td></td><td></td><td></td></tr>)
    return dummies    
}

export default ({header=["type","title","magnet_url","size","seeders","leechers"],list=[],onDetails,onHover,onMouseMove})=>{

    return (
        <table className="ui black loading table">
            <thead className="">
                <tr className="">
                    {header.map((head,index)=><th key={index} className="">{head}</th>)}
                </tr>
            </thead>

            <tbody className="">
                {
                    list.map((item,index)=>
                        <tr className="" key={index}>
                            <td className="">{item["type"][0]["text"]}</td>

                            <td className="" onMouseEnter={()=>onHover(index)} onMouseMove={(e)=>onMouseMove(e,index)} onMouseLeave={()=>onHover(index)} onClick={()=>onDetails(item['id'])} >{item["title"]}</td>
                            
                            <td className=""><a href={item["magnet_url"]}>torrent</a></td>
        
                            <td className="">{item["size"][0]['text']}</td>
                            <td className="ui black">{item["seeders"][0]['text']}</td>
                            <td className="ui black">{item["leechers"][0]['text']}</td>
                        </tr>
                        )       
                }
                {
                  printDummy(20-list.length)   
                }

                
            </tbody>
        </table>
    )
}
