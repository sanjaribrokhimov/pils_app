import { StyleSheet } from 'react-native';
import { ThemedText } from '@components/ThemedText';
import { ThemedView } from '@components/ThemedView';
import { Header } from '@components/Header';

export default function CartScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header />
      <ThemedView style={styles.content}>
        <ThemedText>Корзина</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 