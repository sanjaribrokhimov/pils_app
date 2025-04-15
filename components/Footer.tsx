import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface FooterProps {
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

export function Footer({ activeTab, onTabPress }: FooterProps) {
  const tabs = [
    { name: 'home', icon: 'home-outline', label: 'Главная' },
    { name: 'cart', icon: 'cart-outline', label: 'Корзина' },
    { name: 'search', icon: 'search-outline', label: 'Поиск' },
    { name: 'profile', icon: 'person-outline', label: 'Профиль' },
  ];

  return (
    <ThemedView style={styles.footer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => onTabPress(tab.name)}
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
