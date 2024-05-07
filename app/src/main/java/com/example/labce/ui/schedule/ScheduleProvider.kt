package com.example.labce.ui.schedule
import com.example.labce.SQLiteHelper.SQLiteHelper
import java.text.SimpleDateFormat
import java.util.*

class ScheduleProvider {

    //instance of SQLiteHelper



    companion object{
        //Lista: 0 = Disponible, 1 = Solicitado, 2 = Ocupado
        val scheduleMatrix = mutableListOf(
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Paradigmas", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Examen de Bases", "Disponible", "Examen de paradigmas", "Ocupado", "Disponible"),
            mutableListOf("Examen de Bases", "Disponible", "Examen de paradigmas", "Ocupado", "Disponible"),
            mutableListOf("Examen de Bases", "Disponible", "Disponible", "Disponible", "Disponible")
            )

        var scheduleMatrix1 = mutableListOf(
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Paradigmas", "Disponible", "Disponible", "Disponible"),
            mutableListOf("ExamenBases", "Disponible", "Examenparadigmas", "Ocupado", "Disponible"),
            mutableListOf("ExamenBases", "Disponible", "Examenparadigmas", "Ocupado", "Disponible"),
            mutableListOf("ExamenBases", "Disponible", "Disponible", "Disponible", "Disponible")
        )

        val scheduleMatrix2 = mutableListOf(
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Disponible", "Ocupado", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Disponible", "Ocupado", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible")
            )
        val scheduleMatrix3 = mutableListOf(
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Ocupado", "Disponible", "Solicitado"),
            mutableListOf("Ocupado", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Disponible", "Ocupado", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Ocupado", "Ocupado", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Solicitado", "Disponible", "Disponible")
            )
        val scheduleMatrix4 = mutableListOf(
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Ocupado", "Solicitado", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Solicitado", "Ocupado", "Ocupado"),
            mutableListOf("Disponible", "Disponible", "Solicitado", "Ocupado", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible")
            )
    }


}