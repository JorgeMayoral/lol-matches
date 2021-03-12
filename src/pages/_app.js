import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{
          initialColorMode: 'dark',
          useSystemColorMode: false,
        }}
      >
        <Box bgColor="#1f2933" minH="100vh">
          <Component {...pageProps} />
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
