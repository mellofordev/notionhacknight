import {View,Text,StyleSheet,FlatList} from 'react-native';
import { Client } from '@notionhq/client';
import env from '../../env';
import { useEffect,useState } from 'react';
import BudgetGraphCardComponent from './BudgetGraphCardComponent';

const notion_secret_key = env.notion_secret_key.toString();
const notion_db_id=env.notion_database_id.toString();
const notion_auth = new Client({auth:notion_secret_key});
export default function Home(){
    const [Data,setData]=useState([]);
    const [partialData,setPartialData]=useState([]);
    const apireg= async()=>{
        const res = await notion_auth.databases.query({database_id:notion_db_id});
        
        setData(res.results);

    }
    useEffect(()=>{
        apireg();
    },[])
    return(
        <View style={styles.container}>
           <BudgetGraphCardComponent/>
           {Data.map((i)=>{
               var element = i.properties.ExpenseOn.title[0];
               console.log(element.plain_text);
               return(
                   <View>
                       <Text>Amount</Text>
                   </View>
               );
               
           })
           }
           
        </View>
    );

}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        

    }    

})