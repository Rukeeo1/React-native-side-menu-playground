import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import { AntDesign } from '@expo/vector-icons';

import { getPhotos } from '../../redux/actions/photosActions';

import { SafeArea, Header } from '../../components';

import constants from '../../constants';

const { colors, screenWidth, screenHeight } = constants;

const Photos = ({ navigation }) => {
  const dispatch = useDispatch();

  const { photos, loading } = useSelector((state) => ({
    photos: state.photos.photos,
    loading: state.loading.loading,
  }));

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  const handleNavigation = (navigationPath, params) => () =>
    navigation.navigate(navigationPath, params);

  const toggleDrawer = () => navigation.toggleDrawer();

  const renderItem = ({ item }) => {
    return loading ? (
      <Placeholder Animation={Fade}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
    ) : (
      <TouchableOpacity
        style={styles.renderItem}
        onPress={handleNavigation('PhotoDetail', { photoId: item.id })}
      >
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={{ height: screenHeight * 0.15 }}
        />
        <View style={{ padding: '5%' }}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeArea>
      <Header
        title='Photos'
        renderIcon={() => (
          <AntDesign name='menu-fold' size={24} color='black' />
        )}
        onIconPress={toggleDrawer}
      />
      <FlatList
        data={photos}
        numColumns={2}
        style={{ paddingHorizontal: '3%' }}
        keyExtractor={(item) => '_' + item.id}
        renderItem={renderItem}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    width: screenWidth * 0.42,
    backgroundColor: colors.grey100,
    margin: 10,
    borderRadius: 8,
  },
});

export default Photos;
