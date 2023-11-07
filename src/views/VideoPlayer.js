/* eslint-disable prettier/prettier */

import React, {forwardRef} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import Video from 'react-native-video';
const App = forwardRef(function VideoPlayer({src, type, width}, videoRef) {
  return (
    <View>
      <Video
        // eslint-disable-next-line no-shadow
        ref={videoRef => {
          this.player = videoRef;
        }}
        source={{
          uri: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        }}
        style={styles.videoPlayer}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  videoPlayer: {
    width: 300,
    height: 200,
  },
});

export default App;
