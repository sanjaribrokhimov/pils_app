import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { 
  useFonts,
  Montserrat_700Bold,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';

const GRADIENT_COLORS = [
  '#D92A66', // R: 217, G: 42, B: 102
  '#D92270', // R: 217, G: 34, B: 112
  '#D9227F', // R: 217, G: 34, B: 127
  '#D92284', // R: 217, G: 34, B: 132
  '#D92486'  // R: 217, G: 36, B: 134
] as const;

export function Header() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient 
      colors={GRADIENT_COLORS}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.header}
    >
      <ThemedText style={styles.language}>RU</ThemedText>
      <ThemedView style={styles.logoContainer}>
        <ThemedText style={styles.logo}>PILS</ThemedText>
        <LinearGradient
          colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0)']}
          style={styles.logoGlow}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      </ThemedView>
      <ThemedView style={styles.headerRight}>
        <TouchableOpacity style={styles.iconButton}>
          <ThemedView style={styles.iconContainer}>
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <ThemedView style={styles.iconContainer}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <ThemedView style={styles.badge}>
              <ThemedText style={styles.badgeText}>0</ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.15)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  language: {
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    color: '#fff',
    opacity: 0.9,
    width: 80,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Montserrat_700Bold',
    letterSpacing: 4,
    textShadowColor: 'rgba(255, 255, 255, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    
  },
  logoGlow: {
    position: 'absolute',
    top: -10,
    left: -20,
    right: -20,
    bottom: -10,
    borderRadius: 20,
    opacity: 0.2,
    backgroundColor: 'transparent',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: 80,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  iconButton: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
  iconContainer: {
    padding: 8,
    backgroundColor: 'transparent',
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: GRADIENT_COLORS[0],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  badgeText: {
    fontSize: 10,
    color: GRADIENT_COLORS[0],
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
  },
}); 