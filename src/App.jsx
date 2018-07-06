import React from 'react';
import { ThemeProvider } from 'styled-components';
import tokens, { GlobalStyles } from './tokens';
import MultiInput from './components/molecules/MultiInput';

const App = () => (
    <ThemeProvider theme={tokens}>
        <GlobalStyles />
        <MultiInput />
    </ThemeProvider>
);

export default App;
