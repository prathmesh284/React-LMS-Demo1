import React from 'react'
import './ScrollBar.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

let topics = [
    'Java Cources',
    'Java Arrays',
    'Java Collections',
    'Java Exception Handling',
    'Java File Handling',
    'Java Multithreading',
    'Java Networking',
    'Java String Handling',
    'Java Genetric',
    'Java Applet'
];

export default function ScrollBar() {
  return (
    <div>
        <FaChevronLeft className='left'/>
        <div className='scroll-bar'>
        {
            topics.map((topic,index)=>{
                return <div key={index} className='topic'>
                    <p>{topic}</p>
                </div>
            })
        }
        </div>
        <FaChevronRight className='right'/>
    </div>
  )
}
