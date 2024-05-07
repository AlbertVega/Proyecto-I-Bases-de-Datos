package com.example.labce

import android.content.Intent
import android.os.Bundle
import android.os.SystemClock.sleep
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowInsetsCompat
import com.example.labce.SQLiteHelper.SQLiteHelper
import com.example.labce.databinding.ActivityChangePwdBinding
import com.example.labce.databinding.ActivityLogBinding

class ChangePwdActivity : AppCompatActivity() {

    private lateinit var binding : ActivityChangePwdBinding
    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        binding = ActivityChangePwdBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val DBhelper = SQLiteHelper(this)

        var pid = binding.chPersonalid.text
        var pwd = binding.chPwd.text
        var newPwd = binding.chNewpwd.text

        binding.btnCh.setOnClickListener {
            if(DBhelper.changePassword(pid.toString(), pwd.toString(), newPwd.toString())){
                pid.clear()
                pwd.clear()
                newPwd.clear()
                Toast.makeText(this,"Contraseña cambiada",Toast.LENGTH_LONG).show()
                sleep(1500)
                val intent = Intent(this,LogActivity::class.java)
                startActivity(intent)
            } else {
                Toast.makeText(this,"No se pudo cambiar la contraseña",Toast.LENGTH_LONG).show()
            }

        }

    }
}