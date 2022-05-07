import {View,Text,StyleSheet,TextInput} from 'react-native';
import { Client } from '@notionhq/client';
import env from '../../env';
import { useEffect } from 'react';

const notion_secret_key = env.notion_secret_key.toString();
const notion_db_id=env.notion_database_id.toString();
const notion_auth = new Client({auth:notion_secret_key});
export default function AddExpense(){
    const apireg= async()=>{
        const res = await notion_auth.databases.retrieve({database_id:notion_db_id});
        console.log(res);

    }
    useEffect(()=>{
        apireg();
    },[])
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'#181818',borderRadius:15,margin:10,height:400,flexDirection:'column'}}>
                <View style={{margin:8}}>
                    <Text style={styles.textstyle}>Amount</Text>
                    <TextInput placeholder='Amount' style={styles.textinputstyle} />
                </View>
                <View style={{margin:8}}>
                    <Text style={styles.textstyle}>Date</Text>
                    <TextInput placeholder='Date' style={styles.textinputstyle} />
                </View>
                <View style={{margin:8}}>
                    <Text style={styles.textstyle}>Tag</Text>
                    <TextInput placeholder='Tag' style={styles.textinputstyle} />
                </View>
            </View>
        </View>
    );

}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        

    },
    textstyle:{
        fontSize:24,
        color:'white',
        fontWeight:'700',
        marginLeft:5,
        marginBottom:3
    },
    textinputstyle:{
    backgroundColor:'white',
    borderRadius:10,
    height:55
    }

})