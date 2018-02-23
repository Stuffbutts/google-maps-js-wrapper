import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

const SuggestionsContainerPropTypes = {
    predictions: PropTypes.array.isRequired,
    inputElm: PropTypes.node.isRequired,
    display: PropTypes.bool
};

const SuggestionsContainerDefaultProps = {
    display: false
};

class SuggestionsContainer extends React.Component {
    getInputPosition(inputElm){
        let posObj,
            elmH,
            elmW,
            posX,
            posY;

        if(!inputElm){
            throw new Error('An inputElm is required');
        }

        posObj = inputElm.getBoundingClientRect();

        elmW = posObj.width;
        elmH = posObj.height;
    }

    render() {
        return <div>
        </div>;
    }
}

SuggestionsContainer.propTypes = SuggestionsContainerPropTypes;

export default SuggestionsContainer
 