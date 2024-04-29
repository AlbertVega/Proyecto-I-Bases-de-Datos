package com.example.labce

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity



class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val Btn_log = findViewById<Button>(R.id.main_btn)
        Btn_log.setOnClickListener {
            val intent = Intent(this,LogActivity::class.java)
            startActivity(intent)
        }

    }
}