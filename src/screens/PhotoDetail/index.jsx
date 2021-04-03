import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';

import { SafeArea, Header } from '../../components';

import { getPhotoById } from '../../redux/actions/photosActions';

import constants from '../../constants';

const { screenHeight } = constants;

const PhotoDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { photo, loading } = useSelector((state) => ({
    photo: state.photos.photo,
    loading: state.loading.loading,
  }));

  const photoId = route.params?.photoId;

  useEffect(() => {
    if (photoId) {
      dispatch(getPhotoById(photoId));
    }
  }, [photoId]);

  return (
    <SafeArea>
      <Header title='Details' onIconPress={() => navigation.goBack()} />
      {!photoId ? (
        <View style={styles.container}>
          <Text>
            No Photo selected. Please go back to the homepage and pick a photo
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          {loading ? (
            <Placeholder Animation={Fade}>
              <PlaceholderLine width={80} />
              <PlaceholderLine />
              <PlaceholderLine width={30} />
            </Placeholder>
          ) : (
            <>
              <Image
                source={{ uri: photo?.thumbnailUrl }}
                style={styles.image}
              />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>Abulm Id: {photo?.albumId}</Text>
                <Text>{photo?.title}</Text>
              </View>
            </>
          )}
        </View>
      )}
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: '5%' },
  image: { height: screenHeight * 0.3, width: '100%' },
  detailContainer: { marginTop: '3%' },
  title: {
    fontWeight: 'bold',
  },
});

export default PhotoDetail;
