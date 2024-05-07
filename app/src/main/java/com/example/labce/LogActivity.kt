package com.example.labce

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.labce.SQLiteHelper.ProfessorVerify
import com.example.labce.SQLiteHelper.SQLiteHelper
import com.example.labce.SQLiteHelper.SolicitudSQLiteHelper
import com.example.labce.databinding.ActivityLogBinding

class LogActivity : AppCompatActivity() {
    //private lateinit var binding: ActivityLogBinding
    //lateinit var profesorDBhelper: SQLiteHelper
    private lateinit var binding: ActivityLogBinding
    private lateinit var profesorVerify: ProfessorVerify

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)

        binding = ActivityLogBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val profesorDBhelper = SQLiteHelper(this)
        val solicitudDBhelper = SolicitudSQLiteHelper(this)

        //var logeado = false
        /*val Btn_log = findViewById<Button>(R.id.log_btn)
        val email =findViewById<TextView>(R.id.log_email)
        val password = findViewById<TextView>(R.id.log_pwd).toString()
        val pid = findViewById<TextView>(R.id.log_personalid).toString()*/
        val email = binding.logEmail.text
        val pid = binding.logPersonalid.text
        val password = binding.logPwd.text
        var logged = MainActivity.GlobalProfesor.logeado
        //profesorDBhelper.addData(301412951,"pamin","Ruiz","Tepeda","2/6/2001",false,"oamin@gmail.com","5555")




        binding.logBtn.setOnClickListener {
            logged = profesorDBhelper.compareProfesorData(pid.toString(), password.toString(), email.toString())
            val intent = Intent(this,PrincipalActivity::class.java)
            println("LOGER:"+logged)
            if(logged){
                MainActivity.GlobalProfesor.cedula = pid.toString()
                MainActivity.GlobalProfesor.email = email.toString()

                email.clear()
                pid.clear()
                password.clear()
                startActivity(intent)
            }else{
                Toast.makeText(this,"No se pudo logear",Toast.LENGTH_LONG).show()
            }
        }

        binding.logCambiopwdBtn.setOnClickListener {
            val intent = Intent(this,ChangePwdActivity::class.java)
            startActivity(intent)
        }

    }
}