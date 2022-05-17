import React from 'react';
import BlankScreen from '@screens/Bottom/ProfileMain/InfoScreen/components/BlankScreen';

const SecurityScreen = ({route}) => {
  const {title} = route?.params;
  return (
    /*<HeaderWithButton title={title} isBackHeader={true} />*/
    <BlankScreen route={route} />
  );
};

export default SecurityScreen;
