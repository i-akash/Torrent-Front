import React from 'react'

export default ({imgSrc,title,cName})=>{
    return (
        <div class={`ui card ${cName}`}>
            <div class="image">
                <img src={imgSrc} />
            </div>

            <div class="content">
                <div class="meta">{title}</div>
            </div>
            {/* <div class="extra content">
                <a>
                <i aria-hidden="true" class="user icon"></i>
                22 Friends
                </a>
            </div> */}
        </div>
    )
}
