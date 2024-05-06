package com.example.labce.SQLiteHelper


class ProfessorVerify(private val dbHelper: SQLiteHelper)  {

    private lateinit var profesorDBhelper: SQLiteHelper
    init {
       profesorDBhelper = dbHelper
    }
    public fun verifyProfessorData(email:String,cedula: String, pwd: String): Boolean {
        if (email.isEmpty() || cedula.isEmpty() || pwd.isEmpty()) {
            throw IllegalArgumentException("Campos vacíos")
        } else if(!verifyEmail(email)&&!verifyCedula(cedula)&&!verifyPwd(pwd)){
            throw IllegalArgumentException("Datos inválidos")
        } else if(!profesorDBhelper.compareProfesorData(cedula,pwd,email)){
            throw IllegalArgumentException("Datos incorrectos")
        } else {
            return true
        }

    }

    private fun verifyCedula(cedula: String): Boolean {
        if(cedula.length != 9) {
            throw IllegalArgumentException("Cédula debe tener 9 dígitos")
        }else if(!cedula.matches(Regex("[0-9]+"))) {
            throw IllegalArgumentException("Cédula debe tener solo dígitos")
        } else {
            return true
        }
    }

    private fun verifyEmail(email: String): Boolean {
        if (!email.matches(Regex("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}"))) {
            throw IllegalArgumentException("Email inválido")
        } else if (email.length > 50) {
            throw IllegalArgumentException("Email debe tener menos de 50 caracteres")
        } else if (email.isEmpty()) {
            throw IllegalArgumentException("Email vacío")
        } else {
            return false
        }
    }

    private fun verifyPwd(pwd: String): Boolean {
        if (pwd.length < 8) {
            throw IllegalArgumentException("Contraseña debe tener al menos 8 caracteres")
        } else if (!pwd.matches(Regex(".*[0-9].*"))) {
            throw IllegalArgumentException("Contraseña debe tener al menos un número")
        } else if (!pwd.matches(Regex(".*[a-z].*"))) {
            throw IllegalArgumentException("Contraseña debe tener al menos una letra minúscula")
        } else if (!pwd.matches(Regex(".*[A-Z].*"))) {
            throw IllegalArgumentException("Contraseña debe tener al menos una letra mayúscula")
        } else{
            return true
        }




    }


}