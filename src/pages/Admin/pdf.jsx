import React from 'react';
import { Document, Page, Text, View, StyleSheet,pdf } from '@react-pdf/renderer';

const PrintPDF = (year,subject,points,staff) => {
   
    var year=year;
    var subject=subject;
    var staff=staff;
    var points=points;
  const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
      },
      heading: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
      },
      table: {
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#eaeaea',
        marginBottom: 10,
      },
      tableHeader: {
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderColor: '#eaeaea',
        borderStyle: 'solid',
        paddingHorizontal: 8,
        paddingVertical: 6,
      },
      tableHeaderText: {
        flex: 1,
        fontSize: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        textAlign: 'center',
      },
      tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
        borderStyle: 'solid',
      },
      tableCell: {
        flex: 1,
        fontSize: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        textAlign: 'center',
      },
  });

  const Table = () => (
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Year</Text>
        <Text style={styles.tableHeaderText}>Subject</Text>
        <Text style={styles.tableHeaderText}>Staff</Text>
        <Text style={styles.tableHeaderText}>Points</Text>

      </View>
      {subject.map((i,j) => (
        <View  style={styles.tableRow}>
          <Text style={styles.tableCell}>{year}</Text>
          <Text style={styles.tableCell}>{i}</Text>
          <Text style={styles.tableCell}>{staff[j]}</Text>
          <Text style={styles.tableCell}>{points[j]}</Text>
        </View>
      ))}
    </View>
  );

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>Student Feedback Report</Text>
        <Table />
      </Page>
    </Document>
  );

  const handleDownloadPDF = () => {
    const blobPromise = new pdf(<MyDocument />).toBlob();
    blobPromise.then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'feedback_report.pdf';
      a.click();
      URL.revokeObjectURL(url);
    });
  };    
  handleDownloadPDF();
};

export default PrintPDF;
