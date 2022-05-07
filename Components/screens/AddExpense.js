import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import { Client } from '@notionhq/client';
import env from '../../env';
import { useEffect,useState } from 'react';

const notion_secret_key = env.notion_secret_key.toString();
const notion_db_id=env.notion_database_id.toString();
const notion_expense_id_ =env.notion_expense_id
const notion_auth = new Client({auth:notion_secret_key});
export default function AddExpense(){
    const [loading,setLoading]=useState(false);
    const [expense,setExpense]=useState(0);
    const [date,setDate]=useState(new Date);
    const [tag,setTag]=useState('');
    const apireg= async()=>{
        const res = await notion_auth.databases.retrieve({database_id:notion_db_id});
        console.log(res);


    }
    const createBudget=()=>{
        notion_auth.pages.create({parent:{database_id:env.notion_database_id},
        properties:{
            "ExpenseOn":{
                title:[{
                    type:'text',
                    text:{
                        content:expense
                    }
            }]
            }
        }
    });

    setLoading(false);
    Alert.alert("Added your expense !");
    }
    useEffect(()=>{
        apireg();
    },[]);

    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'#181818',borderRadius:15,margin:10,height:400,flexDirection:'column'}}>
                <View style={{margin:8}}>
                    <Text style={styles.textstyle}>Expense Tag</Text>
                    <TextInput placeholder=' Mention a tag like Food,Entertainment etc' onChangeText={(expense)=>{setExpense(expense)}} style={styles.textinputstyle} />
                </View>
                <View style={{margin:8}}>
                    <Text style={styles.textstyle}>Amount</Text>
                    <TextInput placeholder='Date' style={styles.textinputstyle} />
                </View>
                <View style={{margin:8}}>
                    <Text style={styles.textstyle}>Date</Text>
                    <TextInput placeholder='Tag' style={styles.textinputstyle} />
                </View>
                <TouchableOpacity onPress={()=>{
                    if(expense!=0){
                        createBudget();
                        setLoading(true);
                    }else{
                        Alert.alert("Enter the amount spend !");
                    }
                }} style={{margin:15,backgroundColor:'white',borderRadius:20,justifyContent:'center',alignItems:'center',height:45}}>
                    <Text>{loading==true ? 'Loading...' : 'Add expense'}</Text>
                </TouchableOpacity>
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