import type { StaticImageData } from 'next/image'

export interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  sourceCode: string;
  liveDemo: string;
}