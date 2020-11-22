import { Platform } from "react-native";
import { colors } from "react-native-elements";

module.exports = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
  // Button: {
  //   titleStyle: {
  //     color: "white",
  //   },
  // },
};
