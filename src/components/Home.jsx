import React, { useState } from 'react';
import Button from './shared/Button';
import { Link } from 'react-router-dom';
import { sponsoredImages, boxContent, countries, questions } from '../data';
import {
  Container,
  Section,
  Wrapper,
  Content,
  SectionTwo,
  SectionThree,
  SectionFour,
  Footer,
} from './styles/Home.style';
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowForward,
  MdVideocam,
} from 'react-icons/md';

import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Wrapper>
        <div className="box">
          <div className="img">
            <img src="assets/img_1.png" alt="" />
          </div>
          <div className="content">
            <p>
              Since 2015, we've trained over 700,000 people, to help them find a
              job, grow their career or business. Across Britain, local
              businesses, communities and people are using Google tools and
              training to thrive. Discover how Google is helping the UK economy
              to grow.
            </p>
            <Button
              color="var(--borderColorLight)"
              background="transparent"
              title="Explore now"
              border="var(--borderColorLight)"
              hoverBackground="var(--borderColorLight)"
              hoverBorder="var(--borderColorLight)"
            />
          </div>
        </div>
      </Wrapper>
      <Section>
        <section>
          <div className="content">
            <h3>Learn the skills of the future</h3>
            <p>
              Accelerate your career or business with an online digital skills
              course in everything from marketing to coding and beyond.
            </p>
            <Button
              color="var(--mainWhite)"
              background="var(--borderColorLight)"
              title="Find your course"
              border="var(--borderColorLight)"
              hoverBackground="var(--borderColor)"
              hoverBorder="var(--borderColor)"
            />
          </div>
          <div className="img">
            <img src="assets/undraw_designer_girl_re_h54c.svg" alt="" />
          </div>
        </section>
      </Section>
      <Content>
        <div className="content">
          <p>
            We provide courses along with leading institutions and companies
          </p>
          <div className="imageContainer">
            {sponsoredImages.map((images) => (
              <img src={images.img} alt="" key={images.id} className="image" />
            ))}
          </div>
        </div>
      </Content>
      <SectionTwo>
        <div className="iconContainer">
          <MdVideocam className="icon" />
        </div>
        <div className="content">
          <h1>Did you know we also have webinars?</h1>
          <p>
            Online sessions designed to help you develop skills in less than an
            hour. You can watch webinars live or register to take part in what
            is coming up
          </p>
        </div>
        <div className="button">
          <span>Explore our webinars</span>
          <Link to="f2f" className="btn">
            <MdOutlineArrowForward />
          </Link>
        </div>
      </SectionTwo>
      <SectionThree>
        <div className="courses">
          <h2>Do things you never thought possible</h2>
          <p>
            Discover courses in topics designed to help expand your career,
            business and horizons and to upgrade your skills for a new digital
            world.
          </p>
          <div className="boxContainer">
            {boxContent.map((item) => {
              const { id, title, summary, img } = item;
              return (
                <div className="box" key={id}>
                  <img src={img} alt="" className="img" />
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <MdOutlineArrowForward className="icon" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="faqs">
          <h2>FAQs</h2>

          {questions.map((question) => {
            const { id, title, summary } = question;
            return (
              <div className="content">
                <div className="title" key={id} onClick={() => setShow(!show)}>
                  <h3>{title}</h3>
                  <span class={show ? 'icon active' : 'icon'}>
                    <MdOutlineArrowDropDown />
                  </span>
                </div>
                {show && <p>{summary}</p>}
              </div>
            );
          })}
          <div className="button">
            <Button
              color="var(--mainWhite)"
              background="var(--linkColor)"
              title="See all FAQs"
              border="var(--linkColor)"
              hoverBackground="var(--linkColor)"
              hoverBorder="var(--linkColor)"
            />
          </div>
        </div>
      </SectionThree>
      <SectionFour>
        <img src="assets/google_2.png" alt="" />
        <div className="content">
          <p>Privacy & Terms </p>
          <select name="country" id="country">
            {countries.map((country) => {
              const { id, abbr, name } = country;
              return (
                <option value={abbr} key={id}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </SectionFour>
      <Footer>
        <div className="title">
          <p>Share</p>
        </div>
        <FaFacebookSquare className="facebook" />
        <FaTwitter className="twitter" />
        <FaLinkedin className="linkedin" />
      </Footer>
    </Container>
  );
};

export default Home;
