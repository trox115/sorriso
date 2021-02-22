import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import moment from 'moment';
import 'moment/locale/pt';
export default function RGP({ cliente }) {
  moment.locale('de')

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
    },
    section: {
      marginRight: 10,
      marginLeft: 10,
      marginTop: 100,
      textAlign: 'justify',
      padding: 10,
      flexGrow: 1,
      fontSize: 15,
    },
    section2: {
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      textAlign: 'left',
      padding: 10,
      flexGrow: 1,
      fontSize: 15,
    },
    header: {
      fontSize: 20,
      justifySelf: 'flex-end',
      marginTop: 100,
      textAlign: 'center',
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text>Consentimento para o tratamento de dados pessoais </Text>
        </View>
        <View style={styles.section}>
          <Text>
            Eu {cliente} declaro, para os efeitos previstos no disposto no artigo 13º do Regulamento
            Geral de Proteção de Dados /EU) 2016/679 do Parlamento Europeu e do Conselho de 27 de
            abril (RGPD), prestar, por este meio, o meu consentimento para o tratamento dos meus
            dados pessoais à Design do Sorriso - Clínica Médica Dentária, Lda, Pessoa Coletiva nº
            516061208, com sede em Avenida Dr.Urze Pires, nº18, Loja 6, 5340-263 Macedo de
            Cavaleiros.
          </Text>
          </View>
        <View style={styles.section2}>
          <Text>
            Macedo de Cavaleiros, {moment().format('DD')} de {moment().locale('pt').format('MMMM')} de {moment().format('YYYY')}
          </Text>
        </View>
        <View style={styles.section2}>
          <Text>
            _____________________________________________
          </Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <div className='rgpd'>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}
