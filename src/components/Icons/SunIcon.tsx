import { SVGProps } from 'react'

export const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M12 6.545a5.455 5.455 0 1 0 0 10.91 5.455 5.455 0 0 0 0-10.91Z'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12 0a1.091 1.091 0 0 1 1.09 1.09v1.092a1.09 1.09 0 1 1-2.18 0V1.09A1.09 1.09 0 0 1 12 0ZM2.501 2.501a1.09 1.09 0 0 1 1.543 0L5.68 4.138A1.09 1.09 0 0 1 4.138 5.68L2.5 4.044a1.09 1.09 0 0 1 0-1.543Zm18.998 0a1.09 1.09 0 0 1 0 1.543L19.861 5.68a1.09 1.09 0 1 1-1.542-1.542L19.956 2.5a1.091 1.091 0 0 1 1.543 0ZM0 12a1.091 1.091 0 0 1 1.09-1.09h1.092a1.09 1.09 0 1 1 0 2.18H1.09A1.09 1.09 0 0 1 0 12Zm20.727 0a1.09 1.09 0 0 1 1.091-1.09h1.091a1.09 1.09 0 1 1 0 2.18h-1.09A1.09 1.09 0 0 1 20.726 12ZM5.68 18.32a1.09 1.09 0 0 1 0 1.542L4.044 21.5a1.09 1.09 0 0 1-1.543-1.543l1.637-1.636a1.09 1.09 0 0 1 1.542 0Zm12.64 0a1.091 1.091 0 0 1 1.542 0l1.637 1.636a1.09 1.09 0 0 1-1.543 1.543l-1.636-1.637a1.091 1.091 0 0 1 0-1.542ZM12 20.727a1.09 1.09 0 0 1 1.09 1.091v1.091a1.09 1.09 0 1 1-2.18 0v-1.09A1.09 1.09 0 0 1 12 20.726Z'
      clipRule='evenodd'
    />
  </svg>
)
