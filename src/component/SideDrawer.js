import React from 'react'
import './SideDrawer.css'

let topics = [
    'Java Tutorial',
    'Java Overview',
    'Java Introdution',
    'Java Environment Setup',
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

export default function SideDrawer() {
  return (
    <div className='side-drawer'>
        <div className='starter'>
            <p>GFG 160</p>
        </div>
        <div className='starter'>
            <p>Share your Experience</p>
        </div>
        {
            topics.map((topic,index)=>{
                return<div key={index} className='topic-side-drawer'>
                    <p>{topic}</p>
                </div>
            })
        }
    </div>
  )
}
