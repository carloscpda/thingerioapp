import React from "react";
import PropTypes from "prop-types";
import ThingerStyles, {
  FONT_SIZE_P,
  MARGIN,
  PADDING
} from "../constants/ThingerStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet } from "react-native";
import { DARK_BLUE } from "../constants/ThingerColors";
import RoundedButton from "./buttons/RoundedButton";

export default class ErrorMessage extends React.Component {
  propsType = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onPressButton: PropTypes.func
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.props.icon && (
          <Icon
            name={this.props.icon}
            size={30}
            style={{ color: DARK_BLUE, margin: MARGIN }}
          />
        )}
        <Text style={styles.message}>{this.props.message}</Text>
        {this.props.onPressButton && (
          <RoundedButton
            color={DARK_BLUE}
            text="Reload"
            onPress={() => this.props.onPressButton()}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    margin: MARGIN,
    fontSize: FONT_SIZE_P,
    color: DARK_BLUE
  }
});
