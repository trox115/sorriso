import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import moment from 'moment';
import 'moment/locale/pt';

export default function Justificacao({cliente, inicio, fim}) {
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'column',
      },
      section: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 50,
        textAlign: 'left',
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
      }
    });
  
    const MyDocument = () => (
      <Document>
        <Page size='A4' style={styles.page}>
          <View style={styles.section}>
            <Text>
               Design do Sorriso - Clínica Médica Dentária, {"\n"}
               Avenida Dr.Urze Pires, nº18, Loja 6, 5340-263 {"\n"}
               Macedo de Cavaleiros.
            </Text>
            
            </View>
          <View style={styles.section2}>
            <Text>
              Para os devidos efeitos se declara que {cliente}, esteve presente neste consultório entre as {moment(inicio).format('HH:mm')} do dia {moment(inicio).format('DD/MM')}  e as {moment(fim).format('HH:mm')} do dia {moment(fim).format('DD/MM')}.
            </Text>
          </View>
          <View style={styles.section2}>
            <Text>
               Por ser verdade vai assinada e autenticada a presente declaração.{"\n"}
              Macedo de Cavaleiros, {moment().format('DD')} de {moment().locale('pt').format('MMMM')} de {moment().format('YYYY')}{"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              ______________________
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
