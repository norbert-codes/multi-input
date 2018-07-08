import React from 'react';
import { ThemeProvider } from 'styled-components';
import MultiInput from './components/organisms/MultiInput';
import tokens from './tokens';

const App = () => (
    <ThemeProvider theme={tokens}>
        <MultiInput />
    </ThemeProvider>
);

export default App;
