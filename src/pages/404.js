import React from "react";
import Layout from "components/Layout";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const MainContainer = styled.div`
    padding-top: 5em;
    min-height: 70vh;
`

const Container = styled.div`
    max-width: 680px;
`

const NotFoundPage = () => (
    <Layout>
        <MainContainer>
            <Link to="/">Back to homepage</Link>
            <h1>
                We couldn’t find that page 😶
        </h1>
            <Container>

                <h3>
                    This is either because: </h3>
                <h3>
                    ・ There is an error in the URL entered into your web  browser. Please check the URL and try again. </h3>
                <h3>・ The page you are looking for has been moved or deleted.
        </h3>
            </Container>
        </MainContainer>
    </Layout>
)

export default NotFoundPage;