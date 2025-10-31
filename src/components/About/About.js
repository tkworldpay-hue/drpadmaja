import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #2c5282;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  color: #4299e1;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const ContentSection = styled.div`
  margin-bottom: 2rem;
  line-height: 1.8;
  color: #2d3748;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`;

const Highlight = styled.div`
  background: #f7fafc;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  border-left: 4px solid #4299e1;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>ABOUT US</Title>
      <ContentSection>
        <SubTitle>Dr. Padmaja Chowdhari</SubTitle>
        <p>
          Dr. Padmaja Chowdhari is a Eminent Clinical Nutriitionist, Diet Consultant 
          and Homoeopathic Physician with a rich experience of over 24 years. She 
          believes in a combination of Holistic Therapeutic, Functional and Integrative 
          Lifestyle Modification approach.
        </p>

        <p>
          She believes in educating people about the importance of developing healthy 
          eating habits. She holds extensive knowledge about nutrition and health and 
          has mastered skills and techniques that help her provide the most effective 
          consultation to her patient.
        </p>

        <Highlight>
          <p>
            Her natural ability to connect with people and her cordial way of counselling 
            brings her closer to their problems and helps understand them on an emotional 
            level rather than just being a consultant.
          </p>
        </Highlight>

        <p>
          Personalized nutrition counseling is a passion; she works with her clients 
          very closely knowing the root causes of illnesses and initiating healthy 
          diets to achieve their health goals with the added advantage of improved 
          muscle & bone mass for overall wellness. She also specialises in Homoeopathic 
          medicines for chronic diseases.
        </p>

        <p>
          Dr Padmaja empowers clients to break free from the diet (Bland food) mindset 
          and discover a revolutionary new approach to healthy, sustainable weight loss 
          without any deprivation, or even a single gimmick. She helps you to create a 
          healthier, happier relationship with food, so you enjoy the health that lasts 
          a lifetime.
        </p>

        <p>
          With expertise in weight management, the key focus is disease management to 
          achieve metabolic wellness. Functional foods and medical nutrition therapy 
          are her forte.
        </p>

        <Highlight>
          <p>
            She provides customised well-balanced metabolic and combination based 
            nutritionally rich diets so that not only fat loss but also reversal or 
            management of a clinical condition is easily attainable and everlasting by 
            eating balanced healthy meals and through your home cooked food.
          </p>
        </Highlight>

        <p>
          An eminent nutritionist she is respected and applauded for having changed 
          many lives and showing them the true meaning of "healthy living".
        </p>
      </ContentSection>
    </AboutContainer>
  );
};

export default About;