import {Dimensions, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { WpnBase, WpnMag, WpnUnjammer } from "../components/SvgImages";


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const magState: boolean = false;
  const jammerState: boolean = false;
  const bioLockState: boolean = false;

  const unlockedColor: string = "rgba(0, 255, 0, .8)";
  const lockedColor: string = "rgba(255, 0, 0, .8)";

  return (
    <View style={styles.container}>
      <Text
          style={
        {
          ...styles.title,
          color: (bioLockState ? unlockedColor : lockedColor)
        }
      }>
        {bioLockState ? "Unlocked" : "Locked"}
      </Text>
      <View>
        <WpnBase
            style={{position: "relative", left: 0, top: 0}}
        />
        <WpnMag
            style={{position: "absolute", left: 132, top: 300}}
            fill={magState ? unlockedColor : lockedColor}
        />
        <WpnUnjammer
            style={{position: "absolute", left: 55, top: 300}}
            fill={jammerState ? unlockedColor : lockedColor}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: Dimensions.get('screen').height / 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
