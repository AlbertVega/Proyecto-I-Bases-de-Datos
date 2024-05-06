package com.example.labce

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity



class MainActivity : AppCompatActivity() {

    object GlobalProfesor{
        var cedula: String = ""
        var nombre: String = ""
        var apellido1: String = ""
        var apellido2: String = ""
        var fecha_nacimiento: String = ""
        var email: String = ""
        var logeado: Boolean = false

    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val Btn_log = findViewById<Button>(R.id.main_btn)
        Btn_log.setOnClickListener {

            val intent = Intent(this,LogActivity::class.java)
            val intent2 = Intent(this,PrincipalActivity::class.java)
            if (GlobalProfesor.logeado) {
                startActivity(intent2)
            } else {
                startActivity(intent)
            }
        }

    }
}