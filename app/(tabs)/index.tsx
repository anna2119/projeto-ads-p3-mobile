import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TIPO_USUARIO = 'Aluno';

export default function Index() {
  if (TIPO_USUARIO === 'Professor') {
    return <HomeProfessor />;
  }

  return <HomeAluno />;
}

function HomeAluno() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, paddingBottom: 30 }}
      >
        <View style={{ marginTop: 45, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Olá, Jorbson! 👋</Text>

            <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 8 }}>
              Encontre o professor ideal
            </Text>

            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
              e <Text style={{ color: '#FF6B1A' }}>avance</Text> nos seus estudos.
            </Text>
          </View>

          <Ionicons name="notifications-outline" size={28} color="#222" />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 28, gap: 12 }}>
          <View
            style={{
              flex: 1,
              height: 58,
              borderWidth: 1,
              borderColor: '#E5E5E5',
              borderRadius: 18,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 16,
            }}
          >
            <Feather name="search" size={22} color="#999" style={{ marginRight: 10 }} />

            <TextInput
              placeholder="Buscar professores, matérias ou habilidades..."
              placeholderTextColor="#AAA"
              style={{ flex: 1, fontSize: 14 }}
            />
          </View>

          <TouchableOpacity
            style={{
              height: 58,
              paddingHorizontal: 18,
              borderWidth: 1,
              borderColor: '#E5E5E5',
              borderRadius: 18,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Feather name="sliders" size={18} color="#222" />
              <Text style={{ fontSize: 16 }}>Filtros</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 28,
            backgroundColor: '#FFF0E7',
            borderRadius: 20,
            padding: 24,
            minHeight: 210,
            flexDirection: 'row',
            overflow: 'hidden',
          }}
        >
          <View style={{ flex: 1.2 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Aprenda com quem</Text>

            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FF6B1A' }}>
              entende do assunto.
            </Text>

            <Text style={{ fontSize: 16, marginTop: 18, lineHeight: 24 }}>
              Mentorias personalizadas para te ajudar a chegar mais longe.
            </Text>

            <TouchableOpacity
              onPress={() => router.push('/professor-detalhes')}
              style={{
                backgroundColor: '#FF6B1A',
                padding: 15,
                borderRadius: 18,
                marginTop: 20,
                alignItems: 'center',
                width: 190,
              }}
            >
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                Explorar professores
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="school" size={90} color="#FF6B1A" />
          </View>
        </View>

        <SectionTitle title="Categorias populares" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            { icon: 'book-open', title: 'Exatas' },
            { icon: 'code', title: 'Tecnologia' },
            { icon: 'edit-3', title: 'Humanas' },
            { icon: 'activity', title: 'Ciências' },
            { icon: 'globe', title: 'Idiomas' },
            { icon: 'bar-chart-2', title: 'Negócios' },
          ].map((item) => (
            <TouchableOpacity
              key={item.title}
              style={{
                width: 105,
                height: 100,
                borderWidth: 1,
                borderColor: '#EEE',
                borderRadius: 14,
                marginRight: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFF',
              }}
            >
              <Feather name={item.icon as any} size={28} color="#FF6B1A" />
              <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <SectionTitle title="Professores em destaque" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            ['Prof. Lucas Rocha', 'Matemática', 'R$ 40,00/h', 'https://i.pravatar.cc/150?img=11'],
            ['Profa. Ana Clara', 'Biologia', 'R$ 45,00/h', 'https://i.pravatar.cc/150?img=47'],
            ['Prof. Rafael Lima', 'Programação', 'R$ 50,00/h', 'https://i.pravatar.cc/150?img=12'],
          ].map((prof) => (
            <TouchableOpacity
              key={prof[0]}
              onPress={() => router.push('/professor-detalhes')}
              style={{
                width: 190,
                borderWidth: 1,
                borderColor: '#EEE',
                borderRadius: 18,
                padding: 14,
                marginRight: 16,
                alignItems: 'center',
                backgroundColor: '#FFF',
              }}
            >
              <View style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#21C55D',
                    marginRight: 6,
                  }}
                />
                <Text style={{ fontSize: 12 }}>Online</Text>
              </View>

              <Image
                source={{ uri: prof[3] }}
                style={{ width: 82, height: 82, borderRadius: 41, marginTop: 8 }}
              />

              <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 12 }}>
                {prof[0]}
              </Text>

              <Text>{prof[1]}</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Ionicons name="star" size={16} color="#FF6B1A" />
                <Text style={{ marginLeft: 5 }}>4,9 avaliações</Text>
              </View>

              <Text style={{ marginTop: 12, color: '#777' }}>A partir de</Text>

              <Text style={{ color: '#0057B8', fontWeight: 'bold', fontSize: 17 }}>
                {prof[2]}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View
          style={{
            marginTop: 28,
            borderWidth: 1,
            borderColor: '#EEE',
            borderRadius: 18,
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <MiniInfo icon="calendar" title="Agende" />
          <MiniInfo icon="message-circle" title="Tire dúvidas" />
          <MiniInfo icon="shield" title="Ambiente" />
          <MiniInfo icon="trending-up" title="Progresso" />
        </View>

        <SectionTitle title="Continue aprendendo" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Cálculo', 'Física', 'Python', 'Inglês'].map((item) => (
            <View
              key={item}
              style={{
                width: 150,
                padding: 16,
                borderWidth: 1,
                borderColor: '#EEE',
                borderRadius: 16,
                marginRight: 12,
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>{item}</Text>
              <Text style={{ color: '#777', marginTop: 4 }}>3 professores</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function HomeProfessor() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, paddingBottom: 30 }}
      >
        <View style={{ marginTop: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Feather name="menu" size={24} color="#222" />

          <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
            Orienta
          </Text>

          <Ionicons name="notifications-outline" size={28} color="#222" />
        </View>

        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 16 }}>Olá, Professor! 👋</Text>

          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 8 }}>
            Gerencie suas aulas,
          </Text>

          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            inspire e <Text style={{ color: '#FF6B1A' }}>transforme vidas.</Text>
          </Text>
        </View>

        <View
          style={{
            marginTop: 22,
            borderWidth: 1,
            borderColor: '#EEE',
            borderRadius: 20,
            padding: 16,
            backgroundColor: '#FFF',
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Resumo geral</Text>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#EEE',
                borderRadius: 12,
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              <Text>Este mês⌄</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <ResumoProfessor icon="award" titulo="Aulas realizadas" valor="24" fundo="#FFF0E7" />
            <ResumoProfessor icon="users" titulo="Alunos atendidos" valor="38" fundo="#EEF5FF" />
            <ResumoProfessor icon="dollar-sign" titulo="Ganhos (R$)" valor="2.480,00" fundo="#EFFBF4" />
            <ResumoProfessor icon="clock" titulo="Horas ministradas" valor="36h" fundo="#F5EEFF" />
          </View>
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 14 }}>
          Acesso rápido
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BotaoRapido icon="calendar" texto="Minha Agenda" />
          <BotaoRapido icon="users" texto="Alunos" />
          <BotaoRapido icon="message-square" texto="Mentorias" />
          <BotaoRapido icon="dollar-sign" texto="Ganhos" />
        </View>

        <View
          style={{
            marginTop: 22,
            backgroundColor: '#FFF0E7',
            borderRadius: 20,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              Defina suas aulas
            </Text>

            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              como pagas ou <Text style={{ color: '#FF6B1A' }}>gratuitas</Text>
            </Text>

            <Text style={{ fontSize: 14, marginTop: 10, lineHeight: 20 }}>
              Você decide o valor do seu conhecimento.
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#FF6B1A',
                paddingVertical: 12,
                paddingHorizontal: 18,
                borderRadius: 14,
                alignSelf: 'flex-start',
                marginTop: 14,
              }}
            >
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                Gerenciar aulas
              </Text>
            </TouchableOpacity>
          </View>

          <MaterialIcons name="school" size={80} color="#FF6B1A" />
        </View>

        <View style={{ marginTop: 24, marginBottom: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Próximas aulas</Text>
          <Text style={{ color: '#FF6B1A', fontWeight: 'bold' }}>Ver todas</Text>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#EEE',
            borderRadius: 18,
            overflow: 'hidden',
            backgroundColor: '#FFF',
          }}
        >
          <AulaProfessor
            nome="João Ferreira"
            materia="Cálculo Diferencial"
            data="20/05/2026"
            hora="10:00"
            status="Confirmada"
            foto="https://i.pravatar.cc/150?img=11"
          />

          <AulaProfessor
            nome="Maria Eduarda"
            materia="Programação em Java"
            data="20/05/2026"
            hora="14:00"
            status="Pendente"
            foto="https://i.pravatar.cc/150?img=47"
          />

          <AulaProfessor
            nome="Pedro Henrique"
            materia="Física Aplicada"
            data="21/05/2026"
            hora="09:00"
            status="Confirmada"
            foto="https://i.pravatar.cc/150?img=12"
          />
        </View>
      </ScrollView>
    </View>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <View
      style={{
        marginTop: 32,
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text style={{ fontSize: 21, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ color: '#FF6B1A', fontWeight: 'bold' }}>Ver todas ›</Text>
    </View>
  );
}

function MiniInfo({ icon, title }: { icon: any; title: string }) {
  return (
    <View style={{ width: '24%', alignItems: 'center' }}>
      <Feather name={icon} size={24} color="#FF6B1A" />
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
          fontSize: 12,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

function ResumoProfessor({
  icon,
  titulo,
  valor,
  fundo,
}: {
  icon: any;
  titulo: string;
  valor: string;
  fundo: string;
}) {
  return (
    <View
      style={{
        width: '48%',
        backgroundColor: fundo,
        borderRadius: 16,
        padding: 14,
        marginBottom: 12,
      }}
    >
      <Feather name={icon} size={22} color="#FF6B1A" />
      <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 10 }}>
        {titulo}
      </Text>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 6 }}>
        {valor}
      </Text>
      <Text style={{ fontSize: 11, color: '#009E55', marginTop: 8 }}>
        ▲ 15% vs mês anterior
      </Text>
    </View>
  );
}

function BotaoRapido({ icon, texto }: { icon: any; texto: string }) {
  return (
    <TouchableOpacity
      style={{
        width: '23%',
        height: 78,
        borderWidth: 1,
        borderColor: '#EEE',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Feather name={icon} size={24} color="#0057B8" />
      <Text style={{ fontSize: 11, fontWeight: 'bold', marginTop: 8, textAlign: 'center' }}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

function AulaProfessor({
  nome,
  materia,
  data,
  hora,
  status,
  foto,
}: {
  nome: string;
  materia: string;
  data: string;
  hora: string;
  status: string;
  foto: string;
}) {
  const pendente = status === 'Pendente';

  return (
    <View
      style={{
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
      }}
    >
      <Image
        source={{ uri: foto }}
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          marginRight: 12,
        }}
      />

      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{nome}</Text>
        <Text style={{ color: '#555', fontSize: 12 }}>{materia}</Text>
        <Text style={{ color: '#777', fontSize: 12, marginTop: 4 }}>
          📅 {data} • {hora}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: pendente ? '#FFF0D9' : '#DDF8E8',
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 10,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            fontSize: 11,
            color: pendente ? '#D88400' : '#008A46',
          }}
        >
          {status}
        </Text>
      </View>

      <Feather name="chevron-right" size={20} color="#999" />
    </View>
  );
}