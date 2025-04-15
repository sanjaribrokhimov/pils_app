import { StyleSheet, ScrollView, Vibration } from 'react-native';
import { ThemedText } from '@components/ThemedText';
import { ThemedView } from '@components/ThemedView';
import { useState } from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState('home');

  const handleTabPress = (tab: string) => {
    Vibration.vibrate([0, 25, 15, 25]);
    setCurrentTab(tab);
  };

  return (
    <ThemedView style={styles.container}>
      <Header />

      {/* Content */}
      <ScrollView style={styles.content}>
        <ThemedView style={styles.sliderPlaceholder}>
          <ThemedText style={styles.sliderText}>Слайдер изображений</ThemedText>
        </ThemedView>
      </ScrollView>

      <Footer activeTab={currentTab} onTabPress={handleTabPress} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  sliderPlaceholder: {
    width: '100%',
    height: 400,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  sliderText: {
    fontSize: 18,
    color: '#666',
  },
});
