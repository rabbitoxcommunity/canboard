import React from 'react'
import './Subtitle.scss'
export default function Subtitle({title}) {
  return (
    <div className="subtitle">
    <svg xmlns="http://www.w3.org/2000/svg" width="270" height="89" viewBox="0 0 270 89" fill="none">
      <g filter="url(#filter0_f_915_348)">
        <ellipse cx="134.857" cy="44.3681" rx="114.992" ry="22" transform="rotate(-5.21861 134.857 44.3681)" fill="url(#paint0_linear_915_348)" fillOpacity="0.7" />
      </g>
      <defs>
        <filter id="filter0_f_915_348" x="0.324463" y="0.0849609" width="269.066" height="88.5662" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_915_348" />
        </filter>
        <linearGradient id="paint0_linear_915_348" x1="22.5608" y1="47.062" x2="249.849" y2="43.9162" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFCE69" stopOpacity="0" />
          <stop offset="0.5" stopColor="#FFCE69" />
          <stop offset="1" stopColor="#FFCE69" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <h4>{title}</h4>
  </div>
  )
}
