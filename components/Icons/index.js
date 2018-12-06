import React from 'react'
import style from './icons.module.css'

export const Logo = ({ color = "#fff" }) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.3 88.3" fill={ color } className={ style.logo }>
  <g id="noun_Lighthouse_241343" transform="translate(-5.9 -5.9)">
    <path id="Path_187" d="M60.1,68.8,56.5,31.7H43.6L40,66.4l-3-.3,3.9-37.4H59.3l3.8,39.8Z"/>
    <path id="Path_188" d="M50.1,94.1A44.1,44.1,0,1,1,94.2,50,44.193,44.193,0,0,1,50.1,94.1Zm0-85.2A41.1,41.1,0,1,0,91.2,50,41.184,41.184,0,0,0,50.1,8.9Z"/>
    <path id="Path_189" d="M66.9,79.5a28,28,0,0,1-17-6c-12.4-9.2-24.3-9.3-35.3-.1l-1.9-2.3c12-10,25.5-10,39,0,6,4.5,12.7,6.2,19.3,5,7-1.2,13.5-5.7,17.8-12.3l2.5,1.6A30.522,30.522,0,0,1,71.5,79,23.147,23.147,0,0,1,66.9,79.5Z"/>
    <path id="Path_190" d="M67.7,78.3h-3V70.4H45.3v-3H67.7Z"/>
    <g id="Group_1">
      <rect id="Rectangle_2" width="3" height="6.2" transform="translate(51.3 23.9)"/>
    </g>
    <g id="Group_2">
      <rect id="Rectangle_3" width="3" height="6.2" transform="translate(45.8 23.9)"/>
    </g>
    <path id="Path_191" d="M59.4,31.7H40.7V21.3H59.4Zm-15.7-3H56.4V24.3H43.7Z"/>
    <path id="Path_192" d="M59.4,24.3H40.7V21.6a9.3,9.3,0,1,1,18.6,0v2.7Zm-15.7-3H56.4a6.36,6.36,0,0,0-12.7,0Z"/>
    <g id="Group_3">
      <rect id="Rectangle_4" width="3" height="6.2" transform="translate(51.3 37.9)"/>
    </g>
    <g id="Group_4">
      <rect id="Rectangle_5" width="3" height="6.2" transform="translate(45.8 37.9)"/>
    </g>
  </g>
</svg>
)

export const ArrowDown = ({ color = "#fff" }) => (
  <svg width="50" height="35" baseProfile="full" className="arrow arrow-down">
    <polyline points="0, 0 25, 30 50, 0" fill="none" stroke={ color } pathLength="2" stroke-width="4" stroke-linejoin="round" />
  </svg>
)