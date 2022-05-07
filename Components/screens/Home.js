import {View,Text,StyleSheet} from 'react-native';
import { Client } from '@notionhq/client';
import env from '../../env';
import { useEffect } from 'react';

const notion_secret_key = env.notion_secret_key.toString();
const notion_db_id=env.notion_database_id.toString();
const notion_auth = new Client({auth:notion_secret_key});
export default function Home(){
    const apireg= async()=>{
        const res = await notion_auth.databases.retrieve({database_id:notion_db_id});
        console.log(res);

    }
    useEffect(()=>{
        apireg();
    },[])
    return(
        <View style={styles.container}>
           <View style={{backgroundColor:'#181818',borderRadius:15,margin:10,height:200,flexDirection:'column'}}>
               <Text>Budget graph viewer !</Text>
           </View> 
        </View>
    );

}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        

    }    

})