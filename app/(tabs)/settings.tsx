import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Printer, RefreshCw, CircleHelp as HelpCircle, Info } from 'lucide-react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [isAutoPrint, setIsAutoPrint] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Setări</Text>
        <Text style={styles.subtitle}>
          Personalizați experiența de utilizare
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Imprimare</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Printer size={24} color="#333333" />
            <Text style={styles.settingText}>Imprimare automată</Text>
          </View>
          <Switch
            value={isAutoPrint}
            onValueChange={setIsAutoPrint}
            trackColor={{ false: '#767577', true: '#0066CC' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accesibilitate</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Info size={24} color="#333333" />
            <Text style={styles.settingText}>Contrast ridicat</Text>
          </View>
          <Switch
            value={isHighContrast}
            onValueChange={setIsHighContrast}
            trackColor={{ false: '#767577', true: '#0066CC' }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sistem</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <RefreshCw size={24} color="#333333" />
            <Text style={styles.settingText}>Actualizare documente</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <HelpCircle size={24} color="#333333" />
            <Text style={styles.settingText}>Ajutor</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 15,
  },
});