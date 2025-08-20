import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const fonts = {
  heading: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
      color: props.colorMode === "dark" ? "gray.100" : "gray.800",
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      rounded: "md",
      fontWeight: 600,
    },
    variants: {
      primary: (props) => ({
        bgGradient: props.colorMode === "dark" ? "linear(to-r, blue.400, cyan.400)" : "linear(to-r, blue.500, cyan.400)",
        color: "white",
        _hover: { filter: "brightness(1.05)" },
        _active: { filter: "brightness(0.95)" },
      }),
      subtle: (props) => ({
        bg: props.colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.50",
        _hover: { bg: props.colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.100" },
        _active: { bg: props.colorMode === "dark" ? "whiteAlpha.300" : "blackAlpha.200" },
      }),
    },
  },
  Container: {
    baseStyle: {
      px: { base: 4, md: 6 },
    },
  },
  Input: {
    defaultProps: {
      focusBorderColor: "blue.400",
      size: "md",
    },
  },
};

export const theme = extendTheme({ config, fonts, styles, components });

export default theme;


