package com.example.labce

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class LogActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_log)

        val logeado = true
        val Btn_log = findViewById<Button>(R.id.log_btn)
        Btn_log.setOnClickListener {
            val intent = Intent(this,PrincipalActivity::class.java)
            if(logeado){
                startActivity(intent)
            }else{
                Toast.makeText(this,"No se pudo logear",Toast.LENGTH_LONG).show()
            }
        }

    }
}