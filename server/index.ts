const express = require("express");
const cors = require("cors")
const app = express();
const pool = require("./db")

app.use(cors())

app.listen(5000, ()=>{
    console.log("server has started on port 5000")
    console.log(getUsername())
})

async function selectFrom(data: string | number, table: any, condition: any) {
    try {
      const res = await pool.query(
        `SELECT ${data} FROM ${table} ${condition}`
      );
      return res.rows[0][data];
    } catch (err:any) {
      return err.stack;
    }
  }

  async function getUsername(){
    var result = await selectFrom('username', 'users', "where users.username = 'og'")
    console.log(result)
  }
