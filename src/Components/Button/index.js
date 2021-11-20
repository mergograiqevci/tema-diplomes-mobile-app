import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from './styles';

const Button = (props) => {

    return (
        <TouchableOpacity
            style={{ 
                ...Styles.container, 
                ...props.style 
            }}
            activeOpacity={0.7}
            onPress={props.onPress} 
        >
            <Text style={Styles.text}>
                { props.text }
            </Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object
};

export default Button;