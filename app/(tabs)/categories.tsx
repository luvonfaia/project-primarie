import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FileText, Users, Building, Calculator, Car, Chrome as Home } from 'lucide-react-native';

const categories = [
  {
    id: '1',
    title: 'Acte Personale',
    description: 'Certificate de naștere, căsătorie, deces',
    icon: Users,
    color: '#FF6B6B',
  },
  {
    id: '2',
    title: 'Urbanism',
    description: 'Autorizații de construcție, certificate urbanism',
    icon: Building,
    color: '#4ECDC4',
  },
  {
    id: '3',
    title: 'Taxe și Impozite',
    description: 'Plăți, declarații fiscale',
    icon: Calculator,
    color: '#45B7D1',
  },
  {
    id: '4',
    title: 'Transport',
    description: 'Permise, înmatriculări auto',
    icon: Car,
    color: '#96CEB4',
  },
  {
    id: '5',
    title: 'Locuințe',
    description: 'Contracte, închirieri, vânzări',
    icon: Home,
    color: '#D4A5A5',
  },
];

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categorii Documente</Text>
        <Text style={styles.subtitle}>
          Alegeți categoria dorită pentru a vedea documentele disponibile
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, { borderLeftColor: category.color }]}>
              <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
                <Icon size={32} color="#FFFFFF" />
              </View>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDescription}>{category.description}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
  categoriesContainer: {
    padding: 20,
  },
  categoryCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  categoryInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666666',
  },
});