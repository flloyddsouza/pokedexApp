import { StyleSheet, Text, View } from "react-native";
import LottieView from 'lottie-react-native';

interface LoadingProps {
  message: string
}

const Loading: React.FC<LoadingProps> = ({ message}) => {
  return (
    <View style={styles.container}>
      <LottieView
        speed={2}
        style={styles.animation}
        source={require("../Assets/Annimations/loading.json")}
        autoPlay>
      </LottieView>
      <Text style={styles.helpText}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  animation: {
    width: 200,
    height: 200
  },
  helpText: {
    fontSize: 22,
    fontWeight: '600'
  }
});

export default Loading;
