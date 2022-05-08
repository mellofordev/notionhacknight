import {View,Text,StyleSheet,ScrollView} from 'react-native';
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
           <ScrollView>
           {Data.map((i)=>{
               
               var element = i.properties.ExpenseOn.title[0];
               var amount =i.properties.Amount.rich_text[0];
               
               return(
                   <View style={styles.budgetContainer}>
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'white',margin:15,fontSize:24}}>{element.plain_text}</Text>
                        <Text style={{color:'white',backgroundColor:'red',borderRadius:10,margin:15,fontSize:20}}>{amount!=undefined&&amount.plain_text}</Text>
                       </View>
                   </View>
               );
               
           })
           }
           </ScrollView>
           
        </View>
    );

}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        

    },
    budgetContainer:{
        backgroundColor:'#181818',
        borderRadius:15,
        margin:15,
        height:80,
        flexDirection:'column',
        
    }   

})