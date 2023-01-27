import { useFonts } from "expo-font";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { Header } from "./components";
import { colors } from "./constants";
import { StartGame, Game } from "./screens";
import { styles } from "./styles";

const App = () => {
  const [loaded] = useFonts({
    "EduSABeginner-Regular": require("../assets/fonts/EduSABeginner-Regular.ttf"),
    "EduSABeginner-Bold": require("../assets/fonts/EduSABeginner-Bold.ttf"),
    "EduSABeginner-Medium": require("../assets/fonts/EduSABeginner-Medium.ttf"),
    "EduSABeginner-SemiBold": require("../assets/fonts/EduSABeginner-SemiBold.ttf"),
  });
  const [userNumber, setUserNumber] = useState(null);

  const onHandleStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const Content = () =>
    userNumber ? (
      <Game selectedNumber={userNumber} />
    ) : (
      <StartGame onHandleStarGame={onHandleStarGame} />
    );

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="EL NÚMERO INCOGNITO" />
      <Content />
    </View>
  );
};

export default App;
