import { SectionMain } from "./Section.styled";

export const Section = ({title,children}) => {
    return (
      <SectionMain>
      <h2>{title}</h2>
      {children}
    </SectionMain>
    )
  }
  
  export default Section;