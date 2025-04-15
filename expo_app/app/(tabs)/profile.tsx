import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@components/ThemedText';
import { ThemedView } from '@components/ThemedView';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const [currentTab, setCurrentTab] = useState('profile');

  const menuItems = [
    { title: 'Мои заказы', icon: 'receipt-outline', route: '/(tabs)/orders' },
    { title: 'Мои карты', icon: 'card-outline', route: '/(tabs)/cards' },
    { title: 'Мои промокоды', icon: 'pricetag-outline', route: '/(tabs)/promocodes' },
    { title: 'Оплата и Доставка', icon: 'cash-outline', route: '/(tabs)/payment-delivery' },
    { title: 'Настройки', icon: 'settings-outline', route: '/(tabs)/settings' },
    { title: 'О компании', icon: 'information-circle-outline', route: '/(tabs)/about' },
    { title: 'Пригласить друзей', icon: 'people-outline', route: '/(tabs)/invite' },
  ] as const;

  const handleTabPress = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleMenuItemPress = (route: string) => {
    router.push(route as any);
  };

  return (
    <ThemedView style={styles.container}>
      <Header />
      
      <ScrollView style={styles.content}>
        {/* Profile Header */}
        <ThemedView style={styles.profileHeader}>
          <ThemedText style={styles.profileTitle}>Профиль</ThemedText>
          <ThemedText style={styles.username}>санжар</ThemedText>
        </ThemedView>

        {/* Menu Items */}
        <ThemedView style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.menuItem}
              onPress={() => handleMenuItemPress(item.route)}
            >
              <ThemedView style={styles.menuItemContent}>
                <ThemedView style={styles.menuItemLeft}>
                  <Ionicons name={item.icon as any} size={24} color="#666" style={styles.menuItemIcon} />
                  <ThemedText style={styles.menuItemText}>{item.title}</ThemedText>
                </ThemedView>
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </ThemedView>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ScrollView>

      <Footer activeTab={currentTab} onTabPress={handleTabPress} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    padding: 20,
    backgroundColor: '#D92A66',
    alignItems: 'center',
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  username: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  menuContainer: {
    paddingTop: 20,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemIcon: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 16,
  },
}); 