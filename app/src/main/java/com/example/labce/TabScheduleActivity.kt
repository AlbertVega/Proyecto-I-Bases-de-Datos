package com.example.labce

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.fragment.app.Fragment
import androidx.viewpager.widget.ViewPager
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.example.labce.SQLiteHelper.SQLiteHelper
import com.example.labce.SQLiteHelper.SolicitudSQLiteHelper
import com.example.labce.databinding.ActivityTabScheduleBinding
import com.example.labce.ui.schedule.ScheduleFragment
import com.example.labce.ui.schedule.ScheduleProvider

import com.google.android.material.tabs.TabLayoutMediator


class TabScheduleActivity : AppCompatActivity() {

    private lateinit var binding : ActivityTabScheduleBinding

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        binding = ActivityTabScheduleBinding.inflate(layoutInflater)
        binding.viewPager.adapter = ScheduleAdapter(this)
        setContentView(binding.root)
        val sqliteHelper = SolicitudSQLiteHelper(this)
        //println(sqliteHelper.obtenerHorarioSolicitudesLaboratorio("F4-07"))



        val tabLayoutMediator = TabLayoutMediator(binding.tabLayout, binding.viewPager) { tab, position ->
            //tab.text = "Semana ${(position + 1)}"
            when (position) {
                0 -> tab.text = "Semana 1"
                1 -> tab.text = "Semana 2"
                2 -> tab.text = "Semana 3"
                3 -> tab.text = "Semana 4"
            }
        }
        tabLayoutMediator.attach()
    }
    class ScheduleAdapter(activity:AppCompatActivity) : FragmentStateAdapter(activity) {
        override fun getItemCount(): Int {
                return 4
        }
        override fun createFragment(position: Int): Fragment {

            return when (position) {
                0 -> ScheduleFragment(ScheduleProvider.scheduleMatrix1)
                1 -> ScheduleFragment(ScheduleProvider.scheduleMatrix2)
                2 -> ScheduleFragment(ScheduleProvider.scheduleMatrix3)
                3 -> ScheduleFragment(ScheduleProvider.scheduleMatrix4)
                else -> throw RuntimeException("Invalid position $position")
            }
        }
    }
}