package com.example.labce.ui.schedule

class ScheduleProvider {

    companion object{
        //Lista: 0 = Disponible, 1 = Solicitado, 2 = Ocupado
        val scheduleMatrix = mutableListOf(
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Ocupado", "Disponible", "Disponible"),
            mutableListOf("Ocupado", "Disponible", "Disponible", "Disponible", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Disponible", "Ocupado", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Disponible", "Ocupado", "Disponible"),
            mutableListOf("Disponible", "Disponible", "Disponible", "Disponible", "Disponible")
            )
    }
}