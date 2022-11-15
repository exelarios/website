import Head from "next/head";
import styled from "styled-components";

function Simp() {
  return (
    <div>
      <Head>
        <title>Deric - Simp?</title>
      </Head>
      <Content>
        <h1>no madison, deric is <b>NOT</b> a simp.</h1>
      </Content>
    </div>
  )
}

const Content = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Simp;