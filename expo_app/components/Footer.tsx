import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { useRouter } from 'expo-router';

interface FooterProps {
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

export function Footer({ activeTab, onTabPress }: FooterProps) {
  const router = useRouter();
  
  const tabs = [
    { name: 'home', icon: 'home-outline', label: 'Главная', route: '/' },
    { name: 'cart', icon: 'cart-outline', label: 'Корзина', route: '/cart' },
    { name: 'search', icon: 'search-outline', label: 'Поиск', route: '/search' },
    { name: 'profile', icon: 'person-outline', label: 'Профиль', route: '/profile' },
  ];

  const handlePress = (tab: typeof tabs[0]) => {
    onTabPress(tab.name);
    router.push(tab.route);
  };

  return (
    <ThemedView style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => handlePress(tab)}
        >
          <Ionicons
            name={tab.icon as any}
            size={24}
            color={activeTab === tab.name ? '#D92A66' : '#666'}
          />
          <ThemedText
            style={[
              styles.tabLabel,
              { color: activeTab === tab.name ? '#D92A66' : '#666' }
            ]}
          >
            {tab.label}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Montserrat_500Medium',
  },
});
