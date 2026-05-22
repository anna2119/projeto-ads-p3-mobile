import { Feather, Ionicons } from '@expo/vector-icons';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TIPO_USUARIO = 'Aluno';
// Troque para 'Professor' para testar.

export default function Perfil() {
  if (TIPO_USUARIO === 'Professor') {
    return <PerfilProfessor />;
  }

  return <PerfilAluno />;
}
function PerfilAluno() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 100,
        }}
      >
        <HeaderPerfil />

        <CardUsuario
          nome="Jorbson Sebastião"
          tipo="Aluno"
          email="jorbson@email.com"
          telefone="(83) 99999-0000"
          cidade="João Pessoa, PB"
          foto="https://i.pravatar.cc/300?img=12"
        />

        <View style={cardAzul}>
          <View style={linhaEntre}>
            <Text style={tituloAzul}>Seu progresso geral</Text>
            <Text style={linkAzul}>Ver detalhes</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 24,
            }}
          >
            <Metrica
              icon="book-open"
              valor="7"
              texto="Matérias cursando"
            />

            <Metrica
              icon="trending-up"
              valor="12"
              texto="Mentorias realizadas"
            />

            <Metrica
              icon="clock"
              valor="45h"
              texto="Horas de estudo"
            />
          </View>
        </View>

        <TituloSecao texto="Sobre você" />

        <CardOpcao
          icon="user"
          titulo="Apresentação (Bio)"
          descricao="Estudante dedicado em busca de conhecimento e evolução."
        />

        <TituloSecao texto="Conta" />

        <ListaOpcoes
          itens={[
            ['user', 'Informações pessoais'],
            ['book-open', 'Preferências de estudo'],
            ['bell', 'Notificações'],
            ['shield', 'Segurança e privacidade'],
          ]}
        />

        <LinhaTitulo
          titulo="Atividade recente"
          link="Ver todas"
        />

        <ListaAtividades>
          <Atividade
            icon="calendar"
            titulo="Mentoria com Prof. Lucas Rocha"
            subtitulo="Matemática • 20/05/2026"
            status="Concluída"
            cor="#DDF8E8"
            corTexto="#008A46"
          />

          <Atividade
            icon="book"
            titulo="Aula de Programação em Java"
            subtitulo="Prof. Rafael Lima • 18/05/2026"
            status="Confirmada"
            cor="#EAF2FF"
            corTexto="#0057B8"
          />

          <Atividade
            icon="activity"
            titulo="Aula de Biologia"
            subtitulo="Profa. Ana Clara • 17/05/2026"
            status="Pendente"
            cor="#FFF0D9"
            corTexto="#D88400"
          />
        </ListaAtividades>

        <BotaoEditar />
      </ScrollView>
    </View>
  );
}
function PerfilProfessor() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 100,
        }}
      >
        <HeaderPerfil />

        <CardUsuario
          nome="Prof. Lucas Rocha"
          tipo="Professor"
          email="lucas.rocha@email.com"
          telefone="(83) 99999-1111"
          cidade="Campina Grande, PB"
          foto="https://i.pravatar.cc/300?img=11"
        />

        <View style={cardLaranja}>
          <View style={linhaEntre}>
            <Text style={tituloLaranja}>Resumo do mês</Text>
            <Text style={linkLaranja}>Ver detalhes</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 24,
            }}
          >
            <Metrica
              icon="award"
              valor="24"
              texto="Aulas realizadas"
            />

            <Metrica
              icon="users"
              valor="38"
              texto="Alunos atendidos"
            />

            <Metrica
              icon="clock"
              valor="36h"
              texto="Horas ministradas"
            />

            <Metrica
              icon="dollar-sign"
              valor="R$ 2480"
              texto="Ganhos"
            />
          </View>
        </View>

        <TituloSecao texto="Conta e configurações" />

        <ListaOpcoes
          itens={[
            ['user', 'Informações pessoais'],
            ['briefcase', 'Perfil profissional'],
            ['sliders', 'Preferências de aulas'],
            ['bell', 'Notificações'],
            ['shield', 'Segurança e privacidade'],
            ['credit-card', 'Métodos de pagamento'],
          ]}
        />

        <LinhaTitulo
          titulo="Atividade recente"
          link="Ver todas"
        />

        <ListaAtividades>
          <Atividade
            icon="calendar"
            titulo="Nova aula agendada"
            subtitulo="Mentoria com João Ferreira • 20/05/2026"
            status="Confirmada"
            cor="#DDF8E8"
            corTexto="#008A46"
          />

          <Atividade
            icon="users"
            titulo="Novo aluno"
            subtitulo="Maria Eduarda se matriculou • 19/05/2026"
            status="Novo"
            cor="#EAF2FF"
            corTexto="#0057B8"
          />

          <Atividade
            icon="dollar-sign"
            titulo="Pagamento recebido"
            subtitulo="Mentoria • 18/05/2026"
            status="R$ 120"
            cor="#F2FFF5"
            corTexto="#009E55"
          />
        </ListaAtividades>

        <BotaoEditar />
      </ScrollView>
    </View>
  );
}
function HeaderPerfil() {
  return (
    <View
      style={{
        marginTop: 45,
        marginBottom: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        Meu Perfil
      </Text>

      <Ionicons
        name="notifications-outline"
        size={28}
        color="#222"
        style={{
          position: 'absolute',
          right: 0,
        }}
      />
    </View>
  );
}

function CardUsuario({
  nome,
  tipo,
  email,
  telefone,
  cidade,
  foto,
}: any) {
  return (
    <View style={cardPrincipal}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
            source={{ uri: foto }}
            style={{
              width: 110,
              height: 110,
              borderRadius: 55,
            }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: -4,
              bottom: 0,
              width: 38,
              height: 38,
              borderRadius: 19,
              backgroundColor: '#FFF',
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 3,
            }}
          >
            <Feather
              name="camera"
              size={18}
              color="#222"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            marginLeft: 22,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {nome}
          </Text>

          <Text
            style={{
              color: '#0057B8',
              fontSize: 16,
              marginTop: 3,
            }}
          >
            {tipo}
          </Text>

          <InfoLinha icon="mail" texto={email} />
          <InfoLinha icon="phone" texto={telefone} />
          <InfoLinha icon="map-pin" texto={cidade} />
        </View>

        <Feather
          name="chevron-right"
          size={24}
          color="#999"
        />
      </View>
    </View>
  );
}

function InfoLinha({ icon, texto }: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <Feather
        name={icon}
        size={16}
        color="#777"
      />

      <Text
        style={{
          marginLeft: 12,
          color: '#333',
        }}
      >
        {texto}
      </Text>
    </View>
  );
}

function Metrica({ icon, valor, texto }: any) {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
      }}
    >
      <View
        style={{
          width: 58,
          height: 58,
          borderRadius: 29,
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}
      >
        <Feather
          name={icon}
          size={24}
          color="#FF6B1A"
        />
      </View>

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
        }}
      >
        {valor}
      </Text>

      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          marginTop: 4,
        }}
      >
        {texto}
      </Text>
    </View>
  );
}
function TituloSecao({ texto }: any) {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 14,
      }}
    >
      {texto}
    </Text>
  );
}

function CardOpcao({
  icon,
  titulo,
  descricao,
}: any) {
  return (
    <View style={cardOpcao}>
      <View style={iconeBolinha}>
        <Feather
          name={icon}
          size={22}
          color="#0057B8"
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          {titulo}
        </Text>

        <Text
          style={{
            color: '#666',
            marginTop: 4,
            lineHeight: 20,
          }}
        >
          {descricao}
        </Text>
      </View>

      <Feather
        name="chevron-right"
        size={22}
        color="#999"
      />
    </View>
  );
}

function ListaOpcoes({ itens }: any) {
  return (
    <View style={listaCard}>
      {itens.map((item: any) => (
        <View
          key={item[1]}
          style={linhaOpcao}
        >
          <View style={iconeBolinha}>
            <Feather
              name={item[0]}
              size={21}
              color="#0057B8"
            />
          </View>

          <Text
            style={{
              flex: 1,
              fontSize: 15,
              fontWeight: '500',
            }}
          >
            {item[1]}
          </Text>

          <Feather
            name="chevron-right"
            size={22}
            color="#999"
          />
        </View>
      ))}
    </View>
  );
}

function LinhaTitulo({ titulo, link }: any) {
  return (
    <View
      style={{
        marginTop: 28,
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        {titulo}
      </Text>

      <Text
        style={{
          color: '#FF6B1A',
          fontWeight: 'bold',
        }}
      >
        {link}
      </Text>
    </View>
  );
}

function ListaAtividades({ children }: any) {
  return (
    <View style={listaCard}>
      {children}
    </View>
  );
}

function Atividade({
  icon,
  titulo,
  subtitulo,
  status,
  cor,
  corTexto,
}: any) {
  return (
    <View style={linhaAtividade}>
      <View style={iconeBolinha}>
        <Feather
          name={icon}
          size={21}
          color="#0057B8"
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>
          {titulo}
        </Text>

        <Text
          style={{
            color: '#666',
            fontSize: 13,
            marginTop: 3,
          }}
        >
          {subtitulo}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: cor,
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: corTexto,
            fontSize: 12,
            fontWeight: '600',
          }}
        >
          {status}
        </Text>
      </View>
    </View>
  );
}

function BotaoEditar() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FF6B1A',
        borderRadius: 12,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 26,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        Editar perfil
      </Text>
    </TouchableOpacity>
  );
}

const cardPrincipal = {
  backgroundColor: '#FFF',
  borderRadius: 18,
  padding: 18,
  marginBottom: 20,
  borderWidth: 1,
  borderColor: '#EEE',
};

const cardAzul = {
  backgroundColor: '#EEF5FF',
  borderRadius: 18,
  padding: 18,
  marginBottom: 24,
};

const cardLaranja = {
  backgroundColor: '#FFF0E7',
  borderRadius: 18,
  padding: 18,
  marginBottom: 24,
};

const linhaEntre = {
  flexDirection: 'row' as const,
  justifyContent: 'space-between' as const,
  alignItems: 'center' as const,
};

const tituloAzul = {
  color: '#003B73',
  fontSize: 16,
  fontWeight: 'bold' as const,
};

const tituloLaranja = {
  color: '#BA4A00',
  fontSize: 16,
  fontWeight: 'bold' as const,
};

const linkAzul = {
  color: '#0057B8',
  fontWeight: 'bold' as const,
};

const linkLaranja = {
  color: '#FF6B1A',
  fontWeight: 'bold' as const,
};

const cardOpcao = {
  backgroundColor: '#FFF',
  borderRadius: 16,
  padding: 16,
  marginBottom: 22,
  borderWidth: 1,
  borderColor: '#EEE',
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
};

const iconeBolinha = {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#EEF5FF',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  marginRight: 14,
};

const listaCard = {
  backgroundColor: '#FFF',
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '#EEE',
  overflow: 'hidden' as const,
};

const linhaOpcao = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  padding: 16,
  borderBottomWidth: 1,
  borderBottomColor: '#EEE',
};

const linhaAtividade = {
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  padding: 16,
  borderBottomWidth: 1,
  borderBottomColor: '#EEE',
};