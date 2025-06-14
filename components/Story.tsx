import { styles } from "@/styles/feed.styles";
import { View, Text, Image, TouchableOpacity } from "react-native";

type Story = {
  id: string;
  username: string;
  avatar: any; // supports require()
  hasStory: boolean;
};

type StoryProps = {
  story: Story;
};

export default function Story({ story }: StoryProps) {
  return (
    <TouchableOpacity style={styles.storyWrapper}>
      <View style={[styles.storyRing, !story.hasStory && styles.nostory]}>
        <Image source={story.avatar} style={styles.storyAvatar} />
      </View>
      <Text style={styles.storyUsername}>{story.username}</Text>
    </TouchableOpacity>
  );
}
