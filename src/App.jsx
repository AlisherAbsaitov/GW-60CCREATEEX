import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Event from './pages/Event';
import EventList from './pages/EventList';
import Course from './pages/Course';
import SigIn from './auth/SigIn';
import SignUp from './auth/SignUp';
import SingleProst from './pages/SingleProst';
import Footer from './components/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/course" element={<Course />} />
        <Route path="/sign" element={<SigIn />} />
        <Route path="/sigup" element={<SignUp />} />
        <Route path="/singlepost" element={<SingleProst />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
