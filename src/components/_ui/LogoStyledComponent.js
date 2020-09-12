import styled from "@emotion/styled";
import colors from "styles/colors";

export const LogoWithStyles = styled("svg")`

    fill: ${colors.orange};
    &:hover {
        fill: ${colors.onHoverOrange};
      }

`