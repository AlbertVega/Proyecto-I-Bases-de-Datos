package com.example.labce.ui.request

import java.util.Date

data class RequestRegister(
    val id_request:String,
    val id_lab:String,
    val email:String, val name_request:String, val date: String,
    val date_back: String,
    val init_hour:String, val cant_hour:Int,
    val aprove:Int ) {
}