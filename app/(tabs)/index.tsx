import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Search, Printer, ChevronRight } from 'lucide-react-native';
import { documents } from '@/data/documents';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(documents);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.length === 0) {
      setResults(documents);
      return;
    }

    const filtered = documents.filter(doc => 
      doc.title.toLowerCase().includes(text.toLowerCase()) ||
      doc.description.toLowerCase().includes(text.toLowerCase()) ||
      doc.keywords.some(keyword => keyword.toLowerCase().includes(text.toLowerCase()))
    );
    setResults(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.documentCard}>
      <View style={styles.documentInfo}>
        <Text style={styles.documentTitle}>{item.title}</Text>
        <Text style={styles.documentDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.printButton}>
          <Printer size={24} color="#0066CC" />
        </TouchableOpacity>
        <ChevronRight size={24} color="#666666" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Căutare Documente</Text>
        <Text style={styles.subtitle}>
          Găsiți rapid documentele de care aveți nevoie
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Search size={24} color="#666666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Căutați după nume sau tip document..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  listContainer: {
    padding: 20,
  },
  documentCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  documentInfo: {
    flex: 1,
    marginRight: 15,
  },
  documentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  documentDescription: {
    fontSize: 14,
    color: '#666666',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  printButton: {
    marginRight: 15,
  },
});