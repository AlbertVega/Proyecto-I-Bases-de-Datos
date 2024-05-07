package com.example.labce.ui.schedule

import android.graphics.Color
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.Toast
import com.example.labce.R
import android.widget.TableLayout
import androidx.core.view.marginEnd
import androidx.core.view.marginLeft as marginLeft


class ScheduleFragment(var schedule: MutableList<MutableList<String>>) : Fragment() {

    private lateinit var tableLayout: TableLayout

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val rootView = inflater.inflate(R.layout.fragment_schedule, container, false)
        tableLayout = rootView.findViewById(R.id.schedule_table_dos)
        render(schedule)
        return rootView
    }

    private fun render(schedule: MutableList<MutableList<String>>) {
        tableLayout.removeAllViews()

        for (i in 0 until schedule.size) {
            val registro = layoutInflater.inflate(R.layout.item_schedule, null)
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

            /*if (schedule[i][0].length>=12) tvMonday.marginLeft+20
            if (schedule[i][1].length>=12) tvTuesday.marginLeft+20
            if (schedule[i][2].length>=12) tvWednesday.marginLeft+20
            if (schedule[i][3].length>=12) tvThursday.marginLeft+20
            if (schedule[i][4].length>=12) tvFriday.marginLeft+20*/

            if (schedule[i][0] != "Disponible") tvMonday.setBackgroundColor(Color.RED)
            if (schedule[i][1] != "Disponible") tvTuesday.setBackgroundColor(Color.RED)
            if (schedule[i][2] != "Disponible") tvWednesday.setBackgroundColor(Color.RED)
            if (schedule[i][3] != "Disponible") tvThursday.setBackgroundColor(Color.RED)
            if (schedule[i][4] != "Disponible") tvFriday.setBackgroundColor(Color.RED)

            if (schedule[i][0] == "Solicitado") tvMonday.setBackgroundColor(Color.GRAY)
            if (schedule[i][1] == "Solicitado") tvTuesday.setBackgroundColor(Color.GRAY)
            if (schedule[i][2] == "Solicitado") tvWednesday.setBackgroundColor(Color.GRAY)
            if (schedule[i][3] == "Solicitado") tvThursday.setBackgroundColor(Color.GRAY)
            if (schedule[i][4] == "Solicitado") tvFriday.setBackgroundColor(Color.GRAY)

            tvMonday.setOnClickListener {
                if (schedule[i][0] != "Disponible") {
                    Toast.makeText(this.context, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                }
                else if (schedule[i][0] == "Disponible") {
                    ScheduleProvider.scheduleMatrix[i][0] = "Solicitado"
                    tvMonday.text = "Solicitado"
                    tvMonday.setBackgroundColor(Color.GRAY)
                }
            }

            tvTuesday.setOnClickListener {
                if (schedule[i][1] != "Disponible") {
                    Toast.makeText(this.context, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                }
                else if (schedule[i][1] == "Disponible") {
                    ScheduleProvider.scheduleMatrix[i][1] = "Solicitado"
                    tvTuesday.text = "Solicitado"
                    tvTuesday.setBackgroundColor(Color.GRAY)
                }
            }

            tvWednesday.setOnClickListener {
                if (schedule[i][2] != "Disponible") {
                    Toast.makeText(this.context, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                }
                else if (schedule[i][2] == "Disponible") {
                    ScheduleProvider.scheduleMatrix[i][2] = "Solicitado"
                    tvWednesday.text = "Solicitado"
                    tvWednesday.setBackgroundColor(Color.GRAY)
                }
            }

            tvThursday.setOnClickListener {
                if (schedule[i][3] != "Disponible") {
                    Toast.makeText(this.context, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
                }
                else if (schedule[i][3] == "Disponible") {
                    ScheduleProvider.scheduleMatrix[i][3] = "Solicitado"
                    tvThursday.text = "Solicitado"
                    tvThursday.setBackgroundColor(Color.GRAY)
                }
            }

            tvFriday.setOnClickListener {
                if (schedule[i][4] != "Disponible") {
                    Toast.makeText(this.context, "Fecha ocupada.", Toast.LENGTH_SHORT).show()
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