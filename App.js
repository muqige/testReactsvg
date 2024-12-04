import { SafeAreaView, } from 'react-native';
import Svg, { Circle, Rect } from "react-native-svg";

export default function App() {
  return (
    <SafeAreaView>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
      </Svg>
    </SafeAreaView>
  );
}