import PropTypes from 'prop-types';
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
                <legend>{this.props.legend}</legend>
                <RemoveableInput isRequired label={this.props.label} />
                <Box
                    bg={tokens.colors.secondary}
                    contentRight
                    m="3em -1em -1em -1em"
                    p={tokens.space.small}
                    tag="footer"
                >
                    <Button aria-label="cancel" isDisabled type="reset">
                        Cancel
                    </Button>
                    <Button aria-label="save" onClick={this.handleSubmit}>Save</Button>
                </Box>
            </Form>
        );
    }
}

MultiInput.propTypes = {
    legend: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default MultiInput;
