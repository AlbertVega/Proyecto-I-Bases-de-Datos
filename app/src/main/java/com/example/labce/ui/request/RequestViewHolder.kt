package com.example.labce.ui.request

import android.view.View
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.labce.R

class RequestViewHolder (view: View): RecyclerView.ViewHolder(view) {

    //val prestamos_id = view.findViewById<TextView>(R.id.id_txt)
    //val prestamos_date = view.findViewById<TextView>(R.id.date_txt)
   // val prestamos_hour = view.findViewById<TextView>(R.id.hour_txt)
    val request_pic = view.findViewById<ImageView>(R.id.lab_pic)
    val lab_id = view.findViewById<TextView>(R.id.id_lab_txt)
    val requester_name = view.findViewById<TextView>(R.id.name_requester)
    val request_date = view.findViewById<TextView>(R.id.date_txt)
    val request_hour_cant = view.findViewById<TextView>(R.id.hour_back_txt)
    val request_hour_init = view.findViewById<TextView>(R.id.hour_init_txt)
    val request_state = view.findViewById<TextView>(R.id.aprove_txt)
    fun render(prestamosModel: RequestRegister){

        lab_id.text = prestamosModel.id_lab
        requester_name.text ="Nombre del solicitante: ${prestamosModel.name_request}"
        request_date.text = "Fecha de inicio: ${prestamosModel.date}"
        request_hour_cant.text = "Cantidad de horas: +${prestamosModel.cant_hour}"
        request_hour_init.text = "Hora de inicio: ${prestamosModel.init_hour}"
        if(prestamosModel.aprove == 1){
            request_state.text = "Estado : Aprobado"
        }else{
            request_state.text = "Estado :Pendiente"
        }

        if (lab_id.text=="F4-07"){
            request_pic.setImageResource(R.drawable.hachi)
        } else if (lab_id.text == "F4-08"){
            request_pic.setImageResource(R.drawable.side_nav_bar)
        } else{
            request_pic.setImageResource(R.drawable.ic_launcher_background)
        }
        //Glide.with(prestamos_pic.context).load(prestamosModel.lab_pic).into(prestamos_pic)

    }

}