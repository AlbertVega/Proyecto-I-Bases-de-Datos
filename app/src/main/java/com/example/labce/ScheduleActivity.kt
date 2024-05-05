package com.example.labce

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Bundle
import android.view.LayoutInflater
import android.widget.Button
import android.widget.TableLayout
import android.widget.TableRow
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.labce.ui.schedule.ScheduleData
import com.example.labce.ui.schedule.ScheduleProvider

class ScheduleActivity : AppCompatActivity() {

    private lateinit var tableLayout: TableLayout

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_schedule)
        val scmatrix = ScheduleProvider.scheduleMatrix
        render(scmatrix)
    }


    @SuppressLint("ResourceAsColor")
    private fun render(schedule:MutableList<MutableList<String>>){

            tableLayout = findViewById(R.id.schedule_table)
            tableLayout?.removeAllViews()

            // Aquí puedes cargar los datos del horario desde tu base de datos o cualquier otra fuente de datos
            // Por ahora, solo vamos a llenar el horario con datos de prueba
            for(i in (0 until schedule.size)) {
                val registro = LayoutInflater.from(this).inflate(R.layout.item_schedule, null)
                val tvMonday = registro.findViewById<Button>(R.id.id_lunes)
                val tvTuesday = registro.findViewById<Button>(R.id.id_martes)
                val tvWednesday = registro.findViewById<Button>(R.id.id_miercoles)
                val tvThursday = registro.findViewById<Button>(R.id.id_jueves)
                val tvFriday = registro.findViewById<Button>(R.id.id_viernes)
                tvMonday.text = schedule[i][0]
                tvTuesday.text = schedule[i][1]
                tvWednesday.text = schedule[i][2]
                tvThursday.text = schedule[i][3]
                tvFriday.text = schedule[i][4]

                if(schedule[i][0] == "Ocupado") tvMonday.setBackgroundColor(Color.RED)
                if(schedule[i][1] == "Ocupado") tvTuesday.setBackgroundColor(Color.RED)
                if(schedule[i][2] == "Ocupado") tvWednesday.setBackgroundColor(Color.RED)
                if(schedule[i][3] == "Ocupado") tvThursday.setBackgroundColor(Color.RED)
                if(schedule[i][4] == "Ocupado") tvFriday.setBackgroundColor(Color.RED)


                if(schedule[i][0] == "Solicitado") tvMonday.setBackgroundColor(Color.GRAY)
                if(schedule[i][1] == "Solicitado") tvTuesday.setBackgroundColor(Color.GRAY)
                if(schedule[i][2] == "Solicitado") tvWednesday.setBackgroundColor(Color.GRAY)
                if(schedule[i][3] == "Solicitado") tvThursday.setBackgroundColor(Color.GRAY)
                if(schedule[i][4] == "Solicitado") tvFriday.setBackgroundColor(Color.GRAY)


                tvMonday.setOnClickListener {
                    if (schedule[i][0] == "Ocupado") {
                        Toast.makeText(this, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                    }
                    else if (schedule[i][0] == "Disponible") {
                        ScheduleProvider.scheduleMatrix[i][0] = "Solicitado"
                        tvMonday.text = "Solicitado"
                        tvMonday.setBackgroundColor(Color.GRAY)
                    }
                }

                tvTuesday.setOnClickListener {
                    if (schedule[i][1] == "Ocupado") {
                        Toast.makeText(this, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                    }
                    else if (schedule[i][1] == "Disponible") {
                        ScheduleProvider.scheduleMatrix[i][1] = "Solicitado"
                        tvTuesday.text = "Solicitado"
                        tvTuesday.setBackgroundColor(Color.GRAY)
                    }
                }

                tvWednesday.setOnClickListener {
                    if (schedule[i][2] == "Ocupado") {
                        Toast.makeText(this, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                    }
                    else if (schedule[i][2] == "Disponible") {
                        ScheduleProvider.scheduleMatrix[i][2] = "Solicitado"
                        tvWednesday.text = "Solicitado"
                        tvWednesday.setBackgroundColor(Color.GRAY)
                    }
                }

                tvThursday.setOnClickListener {
                    if (schedule[i][3] == "Ocupado") {
                        Toast.makeText(this, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                    }
                    else if (schedule[i][3] == "Disponible") {
                        ScheduleProvider.scheduleMatrix[i][3] = "Solicitado"
                        tvThursday.text = "Solicitado"
                        tvThursday.setBackgroundColor(Color.GRAY)
                    }
                }

                tvFriday.setOnClickListener {
                    if (schedule[i][4] == "Ocupado") {
                        Toast.makeText(this, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                    }
                    else if (schedule[i][4] == "Disponible") {
                        ScheduleProvider.scheduleMatrix[i][4] = "Solicitado"
                        tvFriday.text = "Solicitado"
                        tvFriday.setBackgroundColor(Color.GRAY)
                    }

                }

                tableLayout.addView(registro)

            }

    }

}