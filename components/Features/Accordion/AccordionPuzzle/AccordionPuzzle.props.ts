import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AccordionPuzzleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text: string;
}
