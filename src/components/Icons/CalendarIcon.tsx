import { SVGProps } from 'react'

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M17 1a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V1ZM5 3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v2Zm13 5v10H2V8h16Zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2V2H6v1c0 1.103-.897 2-2 2s-2-.897-2-2V2H0v18h20V2Zm4 3v19H2v-2h20V5h2ZM7 12H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm-8 4H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Z'
    />
  </svg>
)
