// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let id = event.id
  try{
    return await db.collection('todo').where({ _id:id }).remove()
  }catch(e){
    console.error(e)
  }
}