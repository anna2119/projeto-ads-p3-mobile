import { Feather, Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AgendaScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titulo}>Minha Agenda</Text>
          <Text style={styles.subtitulo}>
            Gerencie suas aulas, mentorias e compromissos.
          </Text>
        </View>

        <View style={styles.iconsHeader}>
          <Feather name="calendar" size={26} color="#555" />
          <Ionicons name="notifications-outline" size={30} color="#555" />
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabAtiva}>
          <Feather name="calendar" size={20} color="#FFF" />
          <Text style={styles.tabAtivaTexto}>Calendário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Feather name="list" size={20} color="#666" />
          <Text style={styles.tabTexto}>Lista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Feather name="inbox" size={20} color="#666" />
          <Text style={styles.tabTexto}>Solicitações</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.calendarioCard}>
        <View style={styles.calendarioHeader}>
          <Feather name="chevron-left" size={24} color="#222" />
          <Text style={styles.mesTexto}>Maio 2026</Text>

          <TouchableOpacity style={styles.hojeBtn}>
            <Text style={styles.hojeTexto}>Hoje</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.diasSemana}>
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((dia) => (
            <Text key={dia} style={styles.diaSemana}>
              {dia}
            </Text>
          ))}
        </View>

        <View style={styles.gridCalendario}>
          {Array.from({ length: 35 }, (_, i) => i + 1).map((dia) => {
            const ativo = dia === 20;
            const temEvento = [5, 7, 12, 14, 18, 20, 22, 25, 27, 29].includes(dia);

            return (
              <TouchableOpacity
                key={dia}
                style={ativo ? styles.diaAtivo : styles.diaNormal}
              >
                <Text style={ativo ? styles.textDiaAtivo : styles.textDia}>
                  {dia}
                </Text>

                {temEvento && (
                  <View
                    style={[
                      styles.bolinha,
                      {
                        backgroundColor:
                          dia % 2 === 0 ? '#FF6B1A' : '#0057B8',
                      },
                    ]}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.legenda}>
          <Legenda cor="#FF6B1A" texto="Aulas" />
          <Legenda cor="#0057B8" texto="Confirmadas" />
          <Legenda cor="#BBB" texto="Disponibilidade" />
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Aulas e compromissos do dia</Text>
        <Text style={styles.dataAgenda}>20 de Maio, Quarta-feira</Text>
      </View>

      <View style={styles.listaAulas}>
        <AulaItem
          hora="10:00"
          fim="11:00"
          nome="João Ferreira"
          materia="Cálculo Diferencial"
          tipo="Mentoria Online"
          status="Confirmada"
          cor="#FF6B1A"
        />

        <AulaItem
          hora="14:00"
          fim="15:00"
          nome="Maria Eduarda"
          materia="Programação em Java"
          tipo="Sala Virtual"
          status="Confirmada"
          cor="#0057B8"
        />

        <AulaItem
          hora="16:30"
          fim="17:30"
          nome="Pedro Henrique"
          materia="Física Aplicada"
          tipo="Mentoria Online"
          status="Pendente"
          cor="#FF6B1A"
        />
      </View>

      <TouchableOpacity style={styles.horariosBtn}>
        <Feather name="clock" size={22} color="#777" />
        <Text style={styles.horariosTexto}>Ver horários disponíveis</Text>
        <Feather name="chevron-right" size={22} color="#777" />
      </TouchableOpacity>
    </ScrollView>
  );
}

function Legenda({ cor, texto }: { cor: string; texto: string }) {
  return (
    <View style={styles.itemLegenda}>
      <View style={[styles.corLegenda, { backgroundColor: cor }]} />
      <Text style={styles.textoLegenda}>{texto}</Text>
    </View>
  );
}

function AulaItem({ hora, fim, nome, materia, tipo, status, cor }: any) {
  const pendente = status === 'Pendente';

  return (
    <View style={styles.aulaCard}>
      <View style={[styles.linhaCor, { backgroundColor: cor }]} />

      <View style={styles.horaContainer}>
        <Text style={[styles.hora, { color: cor }]}>{hora}</Text>
        <Text style={styles.horaFim}>{fim}</Text>
      </View>

      <View style={styles.infoAula}>
        <Text style={styles.nomeAluno}>{nome}</Text>
        <Text style={styles.materia}>{materia}</Text>
        <Text style={styles.tipoAula}>{tipo}</Text>
      </View>

      <View style={pendente ? styles.statusPendente : styles.statusConfirmado}>
        <Text style={pendente ? styles.statusPendenteTexto : styles.statusTexto}>
          {status}
        </Text>
      </View>

      <Feather name="more-vertical" size={20} color="#777" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF6B1A',
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
  },

  iconsHeader: {
    flexDirection: 'row',
    gap: 18,
    marginTop: 18,
    paddingRight: 8,
  },

  tabsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 8,
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tabAtiva: {
    backgroundColor: '#FF6B1A',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },

  tabAtivaTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },

  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  tabTexto: {
    color: '#666',
    fontWeight: '600',
    marginLeft: 6,
  },

  badge: {
    backgroundColor: '#FF6B1A',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },

  badgeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  calendarioCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 18,
    marginTop: 22,
  },

  calendarioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  mesTexto: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  hojeBtn: {
    borderWidth: 1,
    borderColor: '#EEE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
  },

  hojeTexto: {
    color: '#FF6B1A',
    fontWeight: 'bold',
  },

  diasSemana: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 26,
  },

  diaSemana: {
    width: 38,
    textAlign: 'center',
    color: '#666',
  },

  gridCalendario: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },

  diaNormal: {
    width: '14.28%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  diaAtivo: {
    width: '14.28%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textDia: {
    fontSize: 18,
  },

  textDiaAtivo: {
    backgroundColor: '#FF6B1A',
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    width: 42,
    height: 42,
    borderRadius: 21,
    textAlign: 'center',
    lineHeight: 42,
  },

  bolinha: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginTop: 3,
  },

  legenda: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 18,
    flexWrap: 'wrap',
  },

  itemLegenda: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  corLegenda: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 5,
  },

  textoLegenda: {
    fontSize: 12,
    color: '#555',
  },

  sectionHeader: {
    marginTop: 28,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  dataAgenda: {
    color: '#FF6B1A',
    fontWeight: '600',
    marginTop: 4,
  },

  listaAulas: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
  },

  aulaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  linhaCor: {
    width: 4,
    height: 55,
    borderRadius: 2,
    marginRight: 14,
  },

  horaContainer: {
    width: 60,
  },

  hora: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  horaFim: {
    color: '#777',
    marginTop: 4,
  },

  infoAula: {
    flex: 1,
  },

  nomeAluno: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  materia: {
    color: '#555',
    marginTop: 3,
  },

  tipoAula: {
    color: '#777',
    marginTop: 3,
  },

  statusConfirmado: {
    backgroundColor: '#DDF8E8',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 8,
  },

  statusTexto: {
    color: '#008A46',
    fontWeight: 'bold',
    fontSize: 12,
  },

  statusPendente: {
    backgroundColor: '#FFF0D9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 8,
  },

  statusPendenteTexto: {
    color: '#D88400',
    fontWeight: 'bold',
    fontSize: 12,
  },

  horariosBtn: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 18,
    marginTop: 18,
    marginBottom: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },

  horariosTexto: {
    flex: 1,
    marginLeft: 12,
    fontWeight: 'bold',
  },
});