import { useState } from 'react';
//styled
import styled from 'styled-components';
import { About } from '../styles.js';
import Toggle from './toggle.js';
//animation
import { AnimateSharedLayout } from 'framer-motion';
const FaqSection = () => {
  const [faqToggle, setFaqToggle] = useState(false);
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              quia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              quia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              quia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              quia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    h4 {
      color: white;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem;
    }
  }
`;
export default FaqSection;
