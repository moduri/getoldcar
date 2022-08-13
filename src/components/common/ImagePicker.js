import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

function ImagePicketComponent() {
  const [imageUrl, setImageUrl] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const uploadImg = async () => {
    if (!status?.granted) {
      const permissoin = await requestPermission();
      if (!permissoin.granted) {
        return null;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });
    if (result.cancelled) {
      return null;
    }
    console.log(result);
    setImageUrl(result.uri);
  };

  return <input type="file" />;
}

export default ImagePicketComponent;
