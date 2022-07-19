import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import Rat from "../assets/images/rat.jpg";

export default function NotFound() {
  return (
    <Container>
      <Content>
        <Image src={Rat} alt="scared rat"/> <br/>
        <Link href="/">no noes, im scared. pls go back</Link>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  text-align: center;
`;