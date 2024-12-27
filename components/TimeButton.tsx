import { colors } from "@/constants/Colors";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  title: string;
}

const TimeButton: React.FC<Props> = ({ title }) => {
  const [clicked, setClicked] = useState(false);
  const [time, setTime] = useState<Date>();

  return (
    <TouchableOpacity
      onPress={() => setClicked(true)}
      style={{
        borderRadius: 100,
        boxShadow:
          "2px 2px 2px rgba(0, 0, 0, 1), inset 2px 2px 2px rgba(255, 255, 255, .25)",
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Text
        style={{
          fontFamily: "ComfortaaRegular",
          color: colors.dark.text,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: colors.dark.textTint,
          fontFamily: "ComfortaaRegular",
          fontSize: 16,
        }}
      >
        {time ? time.getHours() : "__"}:{time ? time.getMinutes() : "__"}
      </Text>
      {clicked ? (
        <RNDateTimePicker
          mode="time"
          display="spinner"
          value={time || new Date()}
          onChange={(event, selectedDate) => {
            setTime(selectedDate || time);
            setClicked(false);
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default TimeButton;
