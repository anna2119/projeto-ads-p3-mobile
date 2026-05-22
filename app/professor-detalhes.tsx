import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfessorDetalhes() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 120 }}
      >
        <View style={{ marginTop: 45, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={34} color="#111" />
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', gap: 18 }}>
            <Ionicons name="heart-outline" size={32} color="#FF6B1A" />
            <Ionicons name="share-social-outline" size={32} color="#111" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300?img=11' }}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />

          <View style={{ flex: 1, marginLeft: 18 }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
              Prof. Lucas Rocha
            </Text>
            <Text style={{ fontSize: 18, color: '#666', marginTop: 4 }}>
              Matemática
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
              ⭐ 4,9 (128 avaliações)
            </Text>
            <Text style={{ fontSize: 16, color: '#555', marginTop: 10 }}>
              🎓 Mestre em Matemática • UFPB
            </Text>
          </View>
        </View>

        <Text style={{ fontSize: 16, lineHeight: 25, color: '#444', marginTop: 24 }}>
          Professor apaixonado por ensinar e ajudar alunos a alcançarem seus objetivos
          com uma metodologia prática e personalizada.
        </Text>

        <View style={{ marginTop: 28, backgroundColor: '#FFF', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#EEE' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Sobre mim</Text>
          <Text style={{ fontSize: 16, lineHeight: 25, color: '#444', marginTop: 12 }}>
            Atuo há mais de 6 anos com aulas particulares e mentorias acadêmicas.
            Minha missão é tornar a matemática mais simples e acessível.
          </Text>
        </View>

        <View style={{ marginTop: 18, backgroundColor: '#FFF', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#EEE' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>
            Preço das aulas
          </Text>

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View style={{ flex: 1, backgroundColor: '#FFF0E7', borderRadius: 16, padding: 16 }}>
              <Ionicons name="videocam-outline" size={28} color="#FF6B1A" />
              <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Aula Online</Text>
              <Text style={{ color: '#FF6B1A', fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
                R$ 60,00
              </Text>
            </View>

            <View style={{ flex: 1, backgroundColor: '#EEF5FF', borderRadius: 16, padding: 16 }}>
              <Ionicons name="location-outline" size={28} color="#0057B8" />
              <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Aula Presencial</Text>
              <Text style={{ color: '#0057B8', fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
                R$ 80,00
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 18, backgroundColor: '#FFF', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#EEE' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>
            Matérias que leciono
          </Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {['Matemática Básica', 'Cálculo', 'Álgebra Linear', 'Geometria', 'Estatística'].map((materia) => (
              <View key={materia} style={{ backgroundColor: '#F6F6F6', padding: 12, borderRadius: 12 }}>
                <Text>{materia}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#FF6B1A',
            height: 58,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 30,
          }}
        >
          <Feather name="message-circle" size={22} color="#FFF" />
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>
            Agendar aula
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}