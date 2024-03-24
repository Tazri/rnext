import nerdImage from "../assets/images/illustration.png";
import Button from "./Button";
import {
  ButtonContainer,
  ContainerCard,
  ContentContainer,
} from "./styles/Container.style";
import { H1, IMG, P, StyledTitle, Tag } from "./styles/Element.style";

export default function Card() {
  return (
    <ContainerCard>
      <ContentContainer>
        <Tag>EXCLUSIVE</Tag>
        <H1 color="#444">
          <StyledTitle color="#fff" text="React Styled Components" />
        </H1>
        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <ButtonContainer>
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github repo" />
        </ButtonContainer>
      </ContentContainer>
      <IMG src={nerdImage} alt="Nerd" width="300px" />
    </ContainerCard>
  );
}
