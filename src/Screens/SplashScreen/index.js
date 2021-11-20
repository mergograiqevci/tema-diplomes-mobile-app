import React from 'react';
import { Image, View } from 'react-native';
import Button from '~/Components/Button';

import Images from '~/Assets/Images';
import Styles from './styles';

const SplashScreen = (props) => {

    const handleNextScreenPressed = () => {
        props.navigation.push('LoginScreen')
    }

    return (
        <View style={Styles.container}>
            
            <Image
                style={Styles.logo}
                source={Images.Logo} />
            
            <Button
                text="Next screen"
                onPress={handleNextScreenPressed}/>

        </View>
    );
}

export default SplashScreen;