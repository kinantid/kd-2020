import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import globalStyles from 'styles/global';
import typeStyles from 'styles/typography';
import dimensions from "styles/dimensions";
import Footer from "components/Footer";
import Header from "components/Header";
import 'styles/fonts.scss';

const LayoutContainer = styled.div`

    .Layout__content {
        padding-bottom: 5em;
    }

`;

const ChildrenContainer = styled.div`
max-width:  ${dimensions.maxwidthDesktop}px;
@media(max-width: ${dimensions.maxwidthDesktop}px) {
padding-left: ${dimensions.paddingHorizontalDesktop}em;
padding-right: ${dimensions.paddingHorizontalDesktop}em;
}
@media(max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
}

@media(max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
}
margin: 0 auto;
padding-top: 5em;
margin-bottom: 0.8em;
`

const Layout = ({ children }) => (
    <>
    <LayoutContainer className="div">
        <Global styles={[globalStyles, typeStyles]} />
        <div className="Layout">
            <Header />
            <ChildrenContainer>
                <main className="Layout__content">
                    {children}
                </main>
            </ChildrenContainer>
            <Footer />
        </div>
    </LayoutContainer>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
