import React from 'react'
import { Button } from 'react-native'
//functional component
const fetchLocation = props => {
  //return button in jsx
  return (
    <Button title='Get Location' onPress={props.onGetLocation} />
  );
};

export default fetchLocation;
