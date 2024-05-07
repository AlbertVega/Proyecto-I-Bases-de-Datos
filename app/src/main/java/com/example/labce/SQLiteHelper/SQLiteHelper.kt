package com.example.labce.SQLiteHelper

import android.annotation.SuppressLint
import android.content.ContentValues
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

class SQLiteHelper(context: Context) : SQLiteOpenHelper(context,"profesores.db",null,1) {

    override fun onCreate(db: SQLiteDatabase?) {
        val ordenCreacionProfesores = "CREATE TABLE profesores(" +
                "nombre NVARCHAR(50) NOT NULL," +
                " apellido1 NVARCHAR(50) NOT NULL," +
                " apellido2 NVARCHAR(50) NOT NULL," +
                " fecha_nacimiento DATE NOT NULL," +
                "es_admin BIT," +
                "email NVARCHAR(50) NOT NULL," +
                " p_password VARBINARY(128) NOT NULL," +
                "cedula INT NOT NULL," +
                "PRIMARY KEY (cedula))"
        db!!.execSQL(ordenCreacionProfesores)

    }

    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {
        val ordenBorrado = "DROP TABLE IF EXISTS profesores"
        db!!.execSQL(ordenBorrado)
        onCreate(db)
    }

    fun addData(cedula:Int,nombre:String,apellido1:String,apellido2:String,fecha_nacimiento:String,es_admin:Boolean,email:String,pwd:String){
        val datos = ContentValues()
        datos.put("cedula",cedula)
        datos.put("nombre",nombre)
        datos.put("apellido1",apellido1)
        datos.put("apellido2",apellido2)
        datos.put("fecha_nacimiento",fecha_nacimiento)
        datos.put("es_admin",es_admin)
        datos.put("email",email)
        datos.put("p_password",pwd)
        val db = this.writableDatabase
        db.insert("profesores",null,datos)
        db.close()
    }


    fun compareProfesorData(cedula:String,pwd:String,email: String): Boolean {
        val db = this.readableDatabase
        val cursor = db.rawQuery(
            "SELECT * FROM profesores ",
            null)
        if(cursor.moveToFirst()){
            do{
                val cedulaDB = cursor.getString(7)
                val pwdDB = cursor.getString(6)
                val emailDB = cursor.getString(5)
                if(cedula == cedulaDB && pwd == pwdDB && email == emailDB){
                    cursor.close()
                    db.close()
                    return true
                }
            } while (cursor.moveToNext())
        }
        cursor.close()
        db.close()
        return false
    }

    fun changePassword(cedula: String, pwd: String, newpwd: String): Boolean {
        val db = this.writableDatabase
        return db.use {
            if (comparePwd(cedula, pwd)) {
                val datos = ContentValues().apply {
                    put("p_password", newpwd)
                }
                val rowsAffected = db.update("profesores", datos, "cedula = ?", arrayOf(cedula))
                rowsAffected > 0 // Devuelve true si se actualizó al menos una fila
            } else {
                false // Las contraseñas no coinciden
            }
        }
    }

    // Función para comparar la contraseña existente con la proporcionada
    private fun comparePwd(cedula: String, pwd: String): Boolean {
        val db = this.readableDatabase
        val cursor = db.query(
            "profesores",
            arrayOf("p_password"),
            "cedula = ?",
            arrayOf(cedula),
            null,
            null,
            null
        )
        val existingPwd = if (cursor.moveToFirst()) {
            cursor.getString(cursor.getColumnIndexOrThrow("p_password"))
        } else {
            null
        }
        cursor.close()
        return existingPwd == pwd
    }


}