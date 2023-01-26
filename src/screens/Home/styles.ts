import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      padding: 24,
    },
    eventName: {
      color: '#fff',
      fontSize: 24,
      marginTop: 32,
    },
    eventDate: {
      color: '#7d7979',
    },
    input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        fontSize: 16,
        padding: 16,
        color: '#fff',
        backgroundColor: '#1f1e25',
        marginRight: 12,
    }, 
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom:7,
    },
    participantContainer: {
      marginTop: 16,
    },
    listEmptyText: {
      textAlign: 'center',
      color: '#fff',
      marginTop: 16,
    }
 
  });
  