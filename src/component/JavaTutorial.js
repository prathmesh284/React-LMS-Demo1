import React from 'react'
import './JavaTutorial.css'
import { FaRegStar,FaRegComment,FaPenToSquare,FaBars,FaCircleDot} from 'react-icons/fa6'
import JDoodleEmbed from './Editor'

let javaTutorialContent1 = [
    'Used to develop mobile apps, desktop apps, web apps, web servers, games, and enterprise-level systems.',
    'Java was invented by James Gosling and Oracle currently owns it. JDK 23 is the latest version of Java.',
    'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    'Java\'s syntax is similar to C/C/++',
    'Popular platforms like LinkedIn, Amazon, and Netflix rely on Java for their back-end architecture, showcasing its stability and scalability across different environments.',
    'Java is a platform-independent language, which means that it is not tied to any specific hardware or operating system. This makes it a versatile language that can be used across different platforms.',
    'Popularity is so high that 3 Billion+ devices use Java across the world.'
]

export function Divider() {
  return (
    <div className='divider'>
    </div>
  )
}

export default function JavaTutorial() {
  return (
    <div className='java-tutorial'>
        <div className='header-content'>
            <div>
                <h1>Java Tutorial</h1>
                <p>Last Updated:20 Jan,2025</p>
            </div>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <FaRegStar size={20} color="grey" />
                <FaRegComment size={20} color="gray" />
                <FaPenToSquare size={20} color="grey" />
                <FaBars size={20} color="black" /> {/* Menu Icon */}
            </div>
        </div>
        <Divider />
        <p>Java is one of the most popular and widely used programming languages.</p>
        {
            javaTutorialContent1.map((content,index)=>{
                return <div className='content1' key={index}>
                    <FaCircleDot size={10} color='black'/>
                    <p key={index}>{content}</p>
                </div>;
            })
        }
        <div className='editor'>
            <h2>Java Hello World Program</h2>
            <JDoodleEmbed/>
        </div>
    </div>
  )
}
