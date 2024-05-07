package com.example.labce.SQLiteHelper

import android.content.ContentValues
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Locale
import java.util.Random

class SolicitudSQLiteHelper (context: Context) : SQLiteOpenHelper(context,"solicitud.db",null,2) {
    override fun onCreate(db: SQLiteDatabase?) {
        val ordenCreacionSolicitudes = "CREATE TABLE solicitud( " +
                "email TEXT NOT NULL," +
                "cant_horas INT," +
                "hora TEXT NOT NULL," +
                "fecha_prestamo DATE NOT NULL," +
                "fecha_devolucion DATE," +
                "nombre TEXT NOT NULL," +
                "apellido1 TEXT NOT NULL," +
                "apellido2 TEXT NOT NULL," +
                "id_solicitud INTEGER PRIMARY KEY AUTOINCREMENT," +
                "UNIQUE(email, fecha_prestamo, hora))"
        db!!.execSQL(ordenCreacionSolicitudes)

        val ordenCreacionSolicitudLaboratorio = """
                 CREATE TABLE solicitud_laboratorio(
                 id_sol INT NOT NULL,
                 lab_id NVARCHAR(10) NOT NULL,
                 descripcion TEXT NOT NULL,
                PRIMARY KEY(id_sol, lab_id))""".trimIndent()
        db.execSQL(ordenCreacionSolicitudLaboratorio)
    }

    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {
        val ordenBorrado = "DROP TABLE IF EXISTS solicitud"
        //val ordenBorradoSolicitudLaboratorio = "DROP TABLE IF EXISTS solicitud_laboratorio"

        db!!.execSQL(ordenBorrado)
        //db.execSQL(ordenBorradoSolicitudLaboratorio)
        onCreate(db)
    }


    fun addSolicitud(id_lab: String, descripcion: String, email: String, cantHoras: Int, hora: String, fechaPrestamo: String, fechaDevolucion: String, nombre: String, apellido1: String, apellido2: String) {
        val db = this.writableDatabase
        val datos = ContentValues().apply {
            put("email", email)
            put("cant_horas", cantHoras)
            put("hora", hora)
            put("fecha_prestamo", fechaPrestamo)
            put("fecha_devolucion", fechaDevolucion)
            put("nombre", nombre)
            put("apellido1", apellido1)
            put("apellido2", apellido2)
        }

        // Insertar en la tabla 'solicitud'
        val idSolicitud: Long = db.insert("solicitud", null, datos)

        // Verificar si la inserción fue exitosa
        if (idSolicitud != -1L) {
            // Insertar en la tabla 'solicitud_laboratorio'
            addSolicitudLaboratorio(db, idSolicitud.toInt(), id_lab, descripcion)
        }
        db.close()
    }

    fun addSolicitudLaboratorio(db: SQLiteDatabase, idSolicitud: Int, labId: String, descripcion: String) {
        val datos = ContentValues().apply {
            put("id_sol", idSolicitud)
            put("lab_id", labId)
            put("descripcion", descripcion)
        }
        db.insert("solicitud_laboratorio", null, datos)
    }


    fun obtenerHorarioSolicitudesLaboratorio(laboratorio: String): MutableList<MutableList<String>> {
        val horarioSolicitudes = MutableList(7) { MutableList(5) { "Disponible" } } // Horario de lunes a viernes por segmentos de tiempo con descripción
        val db = this.readableDatabase
        val consulta = """
        SELECT s.id_solicitud, sl.lab_id, sl.descripcion, s.fecha, s.hora
        FROM solicitud s
        LEFT JOIN solicitud_laboratorio sl ON s.id_solicitud = sl.id_sol
        WHERE sl.lab_id = '$laboratorio' AND s.fecha_prestamo >= date('now', 'weekday 1', '-7 days') """.trimIndent()
        //AND s.fecha <= date('now', 'weekday 1', '+5 days')

        val cursor = db.rawQuery(consulta, null)
        cursor.use { cursor ->
            while (cursor.moveToNext()) {
                val idSolicitud = cursor.getInt(cursor.getColumnIndexOrThrow("id_sol"))
                val idLaboratorio = cursor.getString(cursor.getColumnIndexOrThrow("lab_id"))
                val descripcion = cursor.getString(cursor.getColumnIndexOrThrow("descripcion"))
                val fecha = cursor.getString(cursor.getColumnIndexOrThrow("fecha"))
                val horaInicio = cursor.getString(cursor.getColumnIndexOrThrow("hora"))

                val diaSemana = obtenerDiaSemana(fecha)
                val lote = obtenerLoteHoraInicio(horaInicio)

                if (diaSemana != -1 && lote != -1) {
                    val descripcionCortada = if (descripcion.length > 12) descripcion.substring(0, 12) else descripcion
                    horarioSolicitudes[lote][diaSemana] = descripcionCortada
                }
            }
        }
        return horarioSolicitudes
    }

    // Función para obtener el índice correspondiente al lote de hora de inicio en el horario
    fun obtenerLoteHoraInicio(horaInicio: String): Int {
        // Mapeo de horas de inicio a lotes de hora de inicio
        return when (horaInicio) {
            "07:30:00" -> 0
            "09:30:00" -> 1
            "11:30:00" -> 2
            "13:00:00" -> 3
            "15:00:00" -> 4
            "17:00:00" -> 5
            "19:00:00" -> 6
            else -> -1
        }
    }
    fun obtenerDiaSemana(fecha: String): Int {
        val dateFormat = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())
        val date = dateFormat.parse(fecha) ?: return -1
        val calendar = Calendar.getInstance()
        calendar.time = date
        val diaSemana = calendar.get(Calendar.DAY_OF_WEEK)
        return if (diaSemana in Calendar.MONDAY..Calendar.FRIDAY) {
            diaSemana - Calendar.MONDAY
        } else {
            -1
        }
    }
}