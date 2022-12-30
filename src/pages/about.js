import React from "react"
import Link from "gatsby"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <header>
        <div className="container">
          <h1>About me</h1>
          <p className="description">
            21 Year-old Student Aspiring to be a Software Engineer, Adventurer,
            and Part-time Pianist. I also do some cooking from time to time
          </p>
        </div>
      </header>
      <div className="container">
        <h4 className="main-header">What i&apos;m doing now</h4>
        <ul>
          <li>Working on this website</li>
          <li>Learning about angular.js</li>
          <li>Writing about my experience with React</li>
          <li>Adjusting my office setup</li>
        </ul>

        <h4 className="header">Connect</h4>
        <p>
          Leave a comment under my articles! or you can email me at
          mo_elmaki01@hotmail.com. Social links below
        </p>
        <ul>
          <li></li>
          <li></li>
        </ul>

        <h4 className="header">Hobbies </h4>
        <ul>
          <li>
            Playing the piano, currently learning to play with my left hand
          </li>
          <li>Basketball, I played on the Senior team in highschool</li>
          <li>Reading books, currently reading: </li>
          <li>Playing video games like Valorant, GTA and Rocket League</li>
        </ul>
        <h4 className="main-header">Random Facts About Me </h4>
        <ul>
          <li>
            I started programming when I was 15 years old, I coded pixel art
            using{" "}
          </li>
          <li>
            Before getting into software development I wanted to become a
            neuroscientist
          </li>
          <li>
            I was born in Dubai, UAE but raised in Khartoum, Sudan. It wasnt
            until 2006 when me and my family came to Canada
          </li>
          <li>
            I used to be a sound engineer and produced music for various artists
          </li>
          <li>
            My elementary school nickname was Mojo (to this day my close friends
            call me by it)
          </li>
          <li>
            My favourite artist is the Weeknd, I enjoy learning to play his
            songs on piano{" "}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default About
