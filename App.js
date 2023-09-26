import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button ,Image} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
         alignItems: 'center',
        justifyContent: 'center',
    },
    // text:{
    //     color: '#111',
    //     textAlign: 'center',
    //     fontFamily: 'Roboto',
    //     fontSize: '25px',
    //     fontStyle: normal,
    //     fontWeight: 700,
    //     lineHeight: normal,
   //}
});
export default function App() {
    return ( < View style = { styles.container }>
        <svg  xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
        <circle cx="70" cy="70" r="62.5" stroke="black" stroke-width="15"/>
        </svg>
        {/* <View>
            <Text style={styles.text}>GROW YOUR BUSINESS</Text>
        </View> */}
        </View>
       
   
    );

}

