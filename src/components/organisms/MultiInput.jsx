import React, { Component } from 'react';
import tokens from '../../tokens';
import Box from '../atoms/Box';
import Button from '../atoms/Button';
import Form from '../atoms/Form';
import RemoveableInput from '../molecules/RemoveableInput';

class MultiInput extends Component {
    state = {
        showComponent: false,
    };

    toggleComponent = prevState => ({
        showComponent: !prevState.showComponent,
    });

    render() {
        return (
            <Form>
                <label>Test</label>
                <RemoveableInput />
                <RemoveableInput />
                <RemoveableInput />
                <RemoveableInput />

                <Box
                    bg={tokens.colors.secondary}
                    contentRight
                    m={tokens.space.small}
                    p={tokens.space.small}
                >
                    <Button isDisabled type="reset">
                        Cancel
                    </Button>
                    <Button type="submit">Save</Button>
                </Box>
            </Form>
        );
    }
}

export default MultiInput;
