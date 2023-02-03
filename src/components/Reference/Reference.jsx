import {
  ReferenceBlock, 
  ReferenceItem,
  ReferenceItemLabel,
  ReferenceItemInput, 
  ReferenceItemMainTextBlock,
  ReferenceItemMainText
} from './Reference.styled';

export const Reference = () =>{
  return(
    <ReferenceBlock>
      <ReferenceItem>

      <ReferenceItemInput 
          type="checkbox" 
          name="faq" 
          id ="faq_1"/>

        <ReferenceItemLabel htmlFor="faq_1">What is going on?</ReferenceItemLabel>

        <ReferenceItemMainTextBlock>
          <ReferenceItemMainText>Hello! It is my test task for PortaOne Education Center.</ReferenceItemMainText>
        </ReferenceItemMainTextBlock>
      </ReferenceItem>

      <ReferenceItem>
        <ReferenceItemInput 
            type="checkbox" 
            name="faq" 
            id ="faq_2"/>
          <ReferenceItemLabel htmlFor="faq_2">What was I supposed to do?</ReferenceItemLabel>
        
        <ReferenceItemMainTextBlock>
          <ReferenceItemMainText> I had to design an algorithm for a program that should do the following: </ReferenceItemMainText>
          <ReferenceItemMainText> - the program accepts an arbitrary text as input and finds in each word of this text the first symbol that is NOT repeated in the analyzed word </ReferenceItemMainText>
          <ReferenceItemMainText> - further, from the received set of symbols, the program must select the first unique one (that is, the one, that is no longer found in the set) and return it. </ReferenceItemMainText>
        </ReferenceItemMainTextBlock>
      </ReferenceItem>

      <ReferenceItem>
        <ReferenceItemInput 
            type="checkbox" 
            name="faq" 
            id ="faq_3"/>
        <ReferenceItemLabel htmlFor="faq_3">What tools did I use?</ReferenceItemLabel>

        <ReferenceItemMainTextBlock>
          <ReferenceItemMainText> HTML, JS, React.js, Redux, styled-components, Mockapi.io (Backend) </ReferenceItemMainText>
        </ReferenceItemMainTextBlock>
      </ReferenceItem>
    </ReferenceBlock>
  );
};