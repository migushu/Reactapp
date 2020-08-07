import React from 'react';
import Global from './Global';

var DataConn={
   RunSql: async function(sql) {
    let map={
      method:'POST'
    };
    //console.log(global.userKey);
    let privateHeaders={
      'Authorization':global.userKey,
      'Content-Type':"text/plain",
      'User-Agent':'testAgent'
    }
    map.headers=privateHeaders;
    map.follow=20;
    map.timeout=0;
    map.size=0;
    map.body=JSON.stringify({
      "jsonrpc":"2.0",
      "method":"api.db.connsql",
      "params":[
        "default",
        sql
      ],
      "id":"7b1c353f-f92c-4265-b6a3-cbbf5b32d708"
      });
    var res;
    console.log('in DataConn');

    //尝试await来进行同步操作
    const response=await fetch(global.APIAddress,map);
    const obj= await response.json();
    //console.log(obj.result);
    return obj.result;

    
    fetch(global.APIAddress,map).then(
      (result)=>{
        //console.log(result.url);
        //console.log(result.ok);
        //console.log(result.status);
         result.json().then(
          (obj)=>{
            //console.log('result body');
            //console.log(obj);
            if (result.ok==true){
              //return obj.result;
              res=obj.result;
              console.log(res);
              return "AAA";
          }
          return "BBB";
          }
        ).catch(
          (error)=>{
            console.log('get an error');
            console.log(error);
          } 
        )
        //return "BBB";
      }
    ).catch((error)=>{
      console.log('error'+error);
    });
  },
  ExSql: async function(sql){
    var res=await this.RunSql(sql);
    return res;
  },
  TestClick:function(){
  alert(global.userKey);
  },
}
export default DataConn;
