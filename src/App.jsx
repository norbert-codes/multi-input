import React from 'react';
import { ThemeProvider } from 'styled-components';
import tokens from './tokens';
import MultiInput from './components/organisms/MultiInput';

const App = () => (
    <ThemeProvider theme={tokens}>
        <MultiInput />
    </ThemeProvider>
);

export default App;
