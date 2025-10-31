import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaUserMd,
  FaCheckCircle,
  FaHeartbeat,
  FaLightbulb,
  FaRunning,
  FaLeaf,
  FaGraduationCap,
  FaInfinity,
} from 'react-icons/fa';
import Services from '../../components/Services/Services';

const publicUrl = process.env.PUBLIC_URL || '';
const backgroundImg = `${publicUrl}/images/bg.jpg`;
const heroSectionImg = `${publicUrl}/images/hero-bg.jpg`;
const expertiseImg = `${publicUrl}/images/exp.JPG`;

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.8)
    ),
    url('${backgroundImg}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -webkit-transform: translateZ(0);
    will-change: transform;
  }

  @supports (-webkit-overflow-scrolling: touch) {
    &::before {
      position: absolute;
      min-height: 100vh;
    }
  }
`;


const HeroSection = styled.div`
  min-height: 600px;
  display: flex;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  min-height: 600px;
  background: url('${heroSectionImg}') center/cover no-repeat;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 400px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding: 3rem 4rem;
  text-align: left;
  position: relative;
  z-index: 0;
  border-radius: 16px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.78),
        rgba(255, 255, 255, 0.72)
      ),
      url('${backgroundImg}') center/cover no-repeat;
    z-index: -1;
    transform: scale(1.05);
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #2c5282;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: #4299e1;
  }

  .tagline {
    font-size: 1.8rem;
    margin: 1.5rem 0;
    font-weight: 600;
    color: #2d3748;
  }

  .highlight {
    font-size: 1.4rem;
    margin: 1.5rem 0;
    color: #4299e1;
    font-weight: 600;
    line-height: 1.4;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #4a5568;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
    text-align: center;
    border-radius: 12px;

    &::before {
      transform: none;
    }
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #4299e1;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: #2b6cb0;
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.div`
  padding: 5rem 2rem;
  background: #f7fafc;
`;

const FeatureGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const FeatureCard = styled.div`
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f1f8ff 100%);
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 24px 48px rgba(28, 76, 131, 0.14);
  text-align: left;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(66, 153, 225, 0.18);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(28, 76, 131, 0.22);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(66, 153, 225, 0.18), transparent 45%);
    pointer-events: none;
  }

  svg {
    font-size: 3rem;
    color: #2b6cb0;
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1.5rem;
    color: #1a365d;
    font-size: 1.8rem;
    letter-spacing: 0.01em;
  }
`;

const FeatureSplitList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.4rem 2.4rem;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 1.4rem;
    color: #2d3748;
    line-height: 1.75;
    margin-bottom: 0.65rem;

    &::before {
      content: '';
      position: absolute;
      top: 0.55rem;
      left: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(135deg, #63b3ed, #3182ce);
      box-shadow: 0 0 0 4px rgba(99, 179, 237, 0.2);
    }
  }
`;

const FeatureSubheading = styled.h4`
  font-size: 1.15rem;
  color: #1e3a8a;
  margin: 2.2rem 0 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(135deg, #63b3ed, #3182ce);
  }
`;

const FeatureParagraph = styled.p`
  color: #2d3748;
  line-height: 1.8;
  margin: 0.6rem 0 1.2rem;
`;

const FeatureListHeading = styled.h5`
  font-size: 1rem;
  color: #2b6cb0;
  margin: 1.2rem 0 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;


const WhyChooseSection = styled.section`
  position: relative;
  padding: 6rem 2rem 7rem;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 55%, #ffffff 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -160px;
    right: -120px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(99, 179, 237, 0.25), transparent 60%);
    filter: blur(4px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -180px;
    left: -140px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(129, 230, 217, 0.2), transparent 65%);
    filter: blur(6px);
  }
`;

const WhyChooseContent = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 3.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 32px;
  box-shadow: 0 28px 60px rgba(15, 59, 98, 0.12);
  border: 1px solid rgba(66, 153, 225, 0.12);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  backdrop-filter: blur(6px);

  @media screen and (max-width: 768px) {
    padding: 2.4rem;
  }
`;

const Tagline = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #2b6cb0;
  opacity: 0.85;
`;

const WhyTitle = styled.h2`
  font-size: 2.8rem;
  color: #1a365d;
  margin: 0;
  line-height: 1.2;
`;

const WhyParagraph = styled.p`
  max-width: 900px;
  margin: 0 auto;
  color: #2d3748;
  line-height: 1.9;
  font-size: 1.05rem;
`;

const ContactSectionWrapper = styled.section`
  padding: 5rem 2rem 6rem;
  background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
`;

const ContactShell = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h3 {
    font-size: 2rem;
    color: #1a365d;
  }

  p {
    color: #2d3748;
    line-height: 1.8;
  }
`;

const ContactFormCard = styled.form`
  background: #ffffff;
  border-radius: 24px;
  padding: 2.8rem;
  box-shadow: 0 24px 48px rgba(28, 76, 131, 0.14);
  border: 1px solid rgba(66, 153, 225, 0.12);
  display: grid;
  gap: 1.2rem;
`;

const ContactInputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

const ContactInputField = styled.input`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 179, 237, 0.3);
  background: #f8fbff;
  font-size: 0.95rem;
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
    background: #ffffff;
  }
`;

const ContactTextArea = styled.textarea`
  min-height: 140px;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 179, 237, 0.3);
  background: #f8fbff;
  font-size: 0.95rem;
  color: #2d3748;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
    background: #ffffff;
  }
`;

const ContactButton = styled.button`
  justify-self: flex-start;
  padding: 0.9rem 2.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #63b3ed 0%, #3182ce 100%);
  color: #ffffff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(49, 130, 206, 0.25);
  }
`;

const Emphasis = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #fff;
  
  p {
    font-size: 1.8rem;
    color: #4299e1;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  .prevent-protect {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
    color: #2c5282;
    font-weight: 700;
  }
`;

const ExpertiseSection = styled.div`
  position: relative;
  z-index: 0;
  padding: 5rem 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 249, 255, 0.78)),
      url('${backgroundImg}') center/cover no-repeat;
    backdrop-filter: blur(4px);
    z-index: -1;
  }
`;

const ExpertiseContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 2.5rem;
    color: #2c5282;
    margin-bottom: 1rem;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #4299e1;
      margin: 1rem auto;
    }
  }
`;

const ExpertiseWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
  flex-direction: row-reverse; /* Moves image to right */

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ExpertiseImage = styled.div`
  flex: 0 0 350px;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: sticky;
  top: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 1024px) {
    flex: 0 0 250px;
    height: 350px;
    position: static;
  }
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 0 auto;
  max-width: 800px; /* Reduced from 1200px to give space for image */
  flex: 1;
`;

const ExpertiseList = styled.div`
  flex: 1;
`;

const ExpertiseCard = styled.button`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  width: 100%;
  text-align: left;
  outline: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(66, 153, 225, 0.15);
  }

  svg {
    color: #4299e1;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  p {
    color: #2d3748;
    font-size: 1rem;
    text-align: left;
    margin: 0;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-color: #4299e1;
      box-shadow: 0 12px 22px rgba(66, 153, 225, 0.18);
    `}

  &:focus-visible {
    border-color: #2b6cb0;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.25);
  }
`;

const ExpertiseDetailPopover = styled.div`
  position: fixed;
  z-index: 2000;
  width: clamp(260px, 30vw, 360px);
  max-width: calc(100vw - 32px);
  background: white;
  border-radius: 14px;
  box-shadow: 0 24px 60px rgba(28, 72, 126, 0.18);
  padding: 2rem 2.25rem 2.25rem;
  transform: translateY(-50%);
  overflow: visible;

  h3 {
    margin-bottom: 1rem;
    color: #2c5282;
    font-size: 1.5rem;
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    margin: 0;
    font-size: 1.05rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 14px;
    height: 14px;
    background: inherit;
    box-shadow: 0 16px 24px rgba(28, 72, 126, 0.12);
    transform: translateY(-50%) rotate(45deg);
  }

  &[data-side='right']::after {
    left: -7px;
  }

  &[data-side='left']::after {
    right: -7px;
  }

  &[data-side='center'] {
    transform: translate(-50%, -50%);
  }

  &[data-side='center']::after {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: min(92vw, 360px);
  }
`;

const ApproachOverviewSection = styled.section`
  position: relative;
  padding: 5rem 2rem 6rem;
  background: linear-gradient(180deg, #f5faff 0%, #ffffff 68%);
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.55;
    pointer-events: none;
  }

  &::before {
    top: -140px;
    right: -110px;
    background: radial-gradient(circle at center, rgba(99, 179, 237, 0.35), transparent 70%);
  }

  &::after {
    bottom: -180px;
    left: -120px;
    background: radial-gradient(circle at center, rgba(129, 230, 217, 0.28), transparent 70%);
  }
`;

const ApproachOverviewContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.4rem;
    color: #2c5282;
    margin-bottom: 1rem;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 70px;
      height: 3px;
      background: #4299e1;
      margin: 1rem auto 0;
    }
  }

  p.lede {
    max-width: 720px;
    margin: 1rem auto 0;
    color: #4a5568;
    line-height: 1.7;
  }
`;

const ApproachGrid = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  text-align: left;
`;

const ApproachIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.8rem;
  background-image: ${({ $accent }) => $accent};
  box-shadow: 0 12px 26px rgba(66, 153, 225, 0.25);
  transition: transform 0.3s ease;
  margin-bottom: 1.4rem;
`;

const ApproachItem = styled.div`
  flex: 1 1 280px;
  max-width: 340px;
  position: relative;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(240, 249, 255, 0.88));
  border-radius: 24px;
  padding: 2.6rem 2.4rem 2.2rem;
  box-shadow: 0 20px 48px rgba(15, 59, 98, 0.12);
  border: 1px solid rgba(226, 232, 240, 0.7);
  overflow: hidden;
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    right: 18px;
    height: 6px;
    border-radius: 0 0 12px 12px;
    background-image: ${({ $accent }) => $accent};
    opacity: 0.95;
  }

  h3 {
    font-size: 1.32rem;
    color: #1e3a8a;
    margin-bottom: 0.85rem;
  }

  p {
    color: #4a5568;
    line-height: 1.85;
    margin: 0;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 26px 56px rgba(15, 59, 98, 0.2);
  }

  &:hover ${ApproachIcon} {
    transform: scale(1.08) translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    padding: 2.3rem 2rem 2rem;
  }
`;

const Home = () => {
  const contactSectionRef = useRef(null);

  const handleScrollToContact = useCallback(() => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const salientFeatures = [
    'Protects from chronic diseases',
    'Protects from nutritional deficiencies',
    'Improves immunity against pollution, viral, and bacterial infections',
    'Removes toxins from the body',
    'Balances vitamins and minerals through food',
    'Manages food allergies and intolerance',
    'Supports healthy weight loss and weight gain',
    'Anti-ageing diets help you look and feel younger with glowing skin',
    'Prevents hair loss and improves eyesight',
    'Improves memory levels and mental alertness',
    'Scientifically proven with international standards',
    'No fasting and no starving',
    'Tasty home food and delicious recipes',
    'Easy to follow',
  ];

  const customisationPoints = [
    'Your health risks',
    'Your nutritional requirements',
    'Your food allergies and intolerance',
    'Your food preferences',
    'Your lifestyle and convenience',
  ];

  const diagnosisIntro =
    'We diagnose your health risks and their root causes early and accurately by studying the following parameters.';

  const diagnosisGroups = [
    {
      title: 'Physical parameters',
      items: [
        'Body fat analysis (BFA)',
        'Basal metabolic rate (BMR)',
        'Body mass index (BMI)',
        'Age-wise nutritional requirements',
      ],
    },
    {
      title: 'Pathological parameters',
      items: [
        'Blood sugar',
        'Kidney function',
        'Thyroid function',
        'Cholesterols',
        'Liver function',
        'Nutritional deficiencies',
      ],
    },
    {
      title: 'Lifestyle insights',
      items: [
        'Lifestyle and food preferences',
        'Metabolic factors and family health history',
      ],
    },
  ];

  const expertiseItems = [
    {
      title: 'Obesity & Weight Management',
      description:
        'Comprehensive metabolic assessments and lifestyle plans tailored to help you lose weight safely while sustaining energy and hormonal balance.',
    },
    {
      title: 'PCOS/PCOD Nutrition Solutions',
      description:
        'Targeted nutrition therapy that balances insulin levels, supports hormonal harmony, and reduces inflammation associated with PCOS/PCOD.',
    },
    {
      title: 'Diabetes Care & Management',
      description:
        'Personalized meal frameworks and monitoring strategies to maintain blood sugar stability and prevent diabetes-related complications.',
    },
    {
      title: 'Hypertension & Cardiac Health',
      description:
        'Heart-friendly dietary protocols that regulate blood pressure, improve lipid profiles, and strengthen cardiovascular resilience.',
    },
    {
      title: 'Thyroid Wellness Program',
      description:
        'Evidence-based nutrition that supports thyroid function, optimizes metabolism, and combats fatigue or weight fluctuations.',
    },
    {
      title: 'Liver Health & Fatty Liver Care',
      description:
        'Detox-supportive plans that reverse fatty liver progression and build better liver enzyme profiles through mindful eating.',
    },
    {
      title: 'Anaemia & Nutritional Deficiencies',
      description:
        'Customized nutrient repletion programs with food-first strategies to rebuild iron, B12, and other essential micronutrients.',
    },
    {
      title: 'IBS & Gut Health Management',
      description:
        'Gut-calming protocols using elimination strategies, mindful reintroduction, and probiotic guidance for lasting digestive relief.',
    },
    {
      title: 'Bone Health & Arthritis Care',
      description:
        'Anti-inflammatory meal plans enriched with calcium, vitamin D, and joint-protective nutrients to ease pain and improve mobility.',
    },
    {
      title: 'Pre & Post Natal Nutrition',
      description:
        'Holistic prenatal and postnatal nutrition ensuring balanced weight gain, optimal lactation, and recovery-focused nourishment.',
    },
    {
      title: 'Menopause Diet Program',
      description:
        'Supportive menus curated to manage menopausal symptoms, stabilize mood, and maintain bone and heart health.',
    },
    {
      title: 'Hair & Skin Care Nutrition',
      description:
        'Dermatology-aligned nutrition plans that enhance skin texture and strengthen hair with essential fatty acids and micronutrients.',
    },
    {
      title: 'Eating Disorders Treatment',
      description:
        'Gentle, structured nourishment plans coordinated with therapy to rebuild a positive relationship with food and body image.',
    },
    {
      title: 'Kids & Teen Nutrition',
      description:
        'Growth-focused nutrition guidance for children and adolescents to boost immunity, concentration, and healthy eating habits.',
    },
    {
      title: 'Holistic Homeopathic Healing',
      description:
        'Integrated homeopathic support paired with nutrition to address root causes and promote whole-person wellness.',
    },
  ];

  const approachItems = [
    {
      title: 'Preventive & Holistic',
      description:
        'We believe in preventive therapy and a holistic approach by mentoring our clients to adopt functional nutrition and a sustainable lifestyle, resolving the root causes instead of relying on fad diets for temporary results.',
      icon: FaHeartbeat,
      accent: 'linear-gradient(135deg, #63b3ed 0%, #3182ce 100%)',
    },
    {
      title: 'Updated, Intelligent & Unique',
      description:
        'Every program is evaluated and refreshed regularly so it stays progressive and evidence-led. Inspired by the latest research, each plan is personalised, yet kept simple, realistic, practical, and sustainable.',
      icon: FaLightbulb,
      accent: 'linear-gradient(135deg, #f6ad55 0%, #ed8936 100%)',
    },
    {
      title: 'Motivational',
      description:
        'We guide meaningful behavioural changes with easy, doable steps that motivate you daily. The goal is to lose fat, gain strength, and restore verve so you feel energised in both body and mind.',
      icon: FaRunning,
      accent: 'linear-gradient(135deg, #68d391 0%, #48bb78 100%)',
    },
    {
      title: 'Integrative',
      description:
        'Our focus extends beyond fat loss and clinical metrics to the quality of everyday life, nurturing sleep, mental and emotional health, eating behaviour, and attitude toward overall wellbeing.',
      icon: FaLeaf,
      accent: 'linear-gradient(135deg, #9f7aea 0%, #805ad5 100%)',
    },
    {
      title: 'Educate',
      description:
        'Diet counselling reshapes habits by teaching the reasons behind every recommendation. Understand why a plan suits you, recognise overeating triggers, and learn how to dial them down by bio-hacking your system.',
      icon: FaGraduationCap,
      accent: 'linear-gradient(135deg, #f687b3 0%, #ed64a6 100%)',
    },
    {
      title: 'Sustainable',
      description:
        'We keep strategies realistic so you can eat for your body type, stay on track, and maintain a healthy weight and vibrant health for good.',
      icon: FaInfinity,
      accent: 'linear-gradient(135deg, #ecc94b 0%, #d69e2e 100%)',
    },
  ];

  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState(null);
  const popoverRef = useRef(null);

  const handleCloseDetail = useCallback(() => {
    setSelectedExpertise(null);
    setPopoverPosition(null);
  }, []);

  useEffect(() => {
    if (!selectedExpertise) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseDetail();
      }
    };

    const handleResize = () => {
      handleCloseDetail();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedExpertise, handleCloseDetail]);

  const handleExpertiseSelect = (expertise, target) => {
    if (!target) {
      return;
    }

    if (selectedExpertise?.title === expertise.title) {
      handleCloseDetail();
      return;
    }

    const rect = target.getBoundingClientRect();
    const padding = 16;
    const estimatedWidth = 360;
    const estimatedHeight = 260;

    if (window.innerWidth <= 768) {
      setPopoverPosition({
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        side: 'center',
      });
      setSelectedExpertise(expertise);
      return;
    }

    let left = rect.right + padding;
    let side = 'right';

    if (left + estimatedWidth > window.innerWidth - padding) {
      left = rect.left - estimatedWidth - padding;
      side = 'left';
    }

    if (left < padding) {
      left = Math.max(padding, rect.right + padding);
      side = 'right';
    }

    let top = rect.top + rect.height / 2;
    const halfHeight = estimatedHeight / 2;
    const minTop = halfHeight + padding;
    const maxTop = window.innerHeight - halfHeight - padding;
    top = Math.min(Math.max(top, minTop), maxTop);

    setPopoverPosition({ left, top, side });
    setSelectedExpertise(expertise);
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage />
        <HeroContent>
          <h1>Dr. Padmaja Health Care</h1>
          <h2>Clinical Nutritionist and Diet Consultant</h2>
          <h2>Homoeopathic Physician</h2>
          <p className="tagline">MINDFUL NUTRITION MENTORING</p>
          <p className="highlight">Encouraging a positive attitude towards healthy eating using functional foods forms the core principle of her nutrition programs for holistic wellness.</p>
          <p className="highlight">Healthy eating is a way of life. It is important to establish routines that are simple, realistic, and ultimately livable.</p>
          <Button as="button" type="button" onClick={handleScrollToContact}>
            Book Appointment
          </Button>
        </HeroContent>
      </HeroSection>
      
      <WhyChooseSection>
        <WhyChooseContent>
          <Tagline>Why Choose Us</Tagline>
          <WhyTitle>Our Unique Approach</WhyTitle>
          <WhyParagraph>Our unique approach works not just on what people eat but why they overeat-or even sometimes why they eat so little and still gain weight.</WhyParagraph>
          <WhyParagraph>Healthy eating is a way of life. It is important to establish routines that are simple, realistic, and ultimately livable.</WhyParagraph>
          <WhyParagraph>Get the guidance you need to eat right for your body type and create a healthy lifestyle that leaves you energised. Through regular, timely, individualised guidance, we help you build a strong foundation so you feel empowered to eat a balanced diet and fall in love with yourself again.</WhyParagraph>
          <WhyParagraph>We have helped hundreds of people just like you who want to transform their food choices and build sustainable eating habits. Using a heartfelt, practical, and personalised approach, we dive into the root causes of your concerns to help you embrace a holistic healthy lifestyle.</WhyParagraph>
        </WhyChooseContent>
      </WhyChooseSection>

      <ExpertiseSection>
        <ExpertiseContent>
          <h2>Areas of Expertise</h2>
          <ExpertiseWrapper>
            <ExpertiseImage>
              <img 
                src={expertiseImg} 
                alt="Nutrition and Healthcare Expertise"
              />
            </ExpertiseImage>
            <ExpertiseList>
              <ExpertiseGrid>
                {expertiseItems.map((expertise) => (
                  <ExpertiseCard
                    key={expertise.title}
                    type="button"
                    data-expertise-card="true"
                    $isActive={selectedExpertise?.title === expertise.title}
                    onClick={(event) =>
                      handleExpertiseSelect(expertise, event.currentTarget)
                    }
                    onMouseEnter={(event) =>
                      handleExpertiseSelect(expertise, event.currentTarget)
                    }
                    onMouseLeave={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        handleCloseDetail();
                      }
                    }}
                    onFocus={(event) =>
                      handleExpertiseSelect(expertise, event.currentTarget)
                    }
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        handleCloseDetail();
                      }
                    }}
                  >
                    <FaCheckCircle />
                    <p>{expertise.title}</p>
                  </ExpertiseCard>
                ))}
              </ExpertiseGrid>
            </ExpertiseList>
          </ExpertiseWrapper>
        </ExpertiseContent>
      </ExpertiseSection>

      <ApproachOverviewSection>
        <ApproachOverviewContent>
          <h2>Our Approach</h2>
          <p className="lede">
            A science-led methodology that blends prevention, personalisation, motivation, and education
            so every journey feels supported, energised, and achievable.
          </p>
          <ApproachGrid>
            {approachItems.map((item) => (
              <ApproachItem key={item.title} $accent={item.accent}>
                <ApproachIcon $accent={item.accent}>
                  <item.icon />
                </ApproachIcon>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </ApproachItem>
            ))}
          </ApproachGrid>
        </ApproachOverviewContent>
      </ApproachOverviewSection>

      <Services />

      {selectedExpertise && popoverPosition && (
        <ExpertiseDetailPopover
          ref={popoverRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="expertise-detail-title"
          data-side={popoverPosition.side}
          style={{
            top: popoverPosition.top,
            left: popoverPosition.left,
          }}
        >
          <h3 id="expertise-detail-title">{selectedExpertise.title}</h3>
          <p>{selectedExpertise.description}</p>
        </ExpertiseDetailPopover>
      )}

      <FeaturesSection>
        <FeatureGrid>
          <FeatureCard>
            <FaUserMd />
            <h3>Salient Features of Our Nutrition Diets</h3>
            <FeatureList>
              {salientFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </FeatureList>
            <FeatureSubheading>Systematically planned & customised according to</FeatureSubheading>
            <FeatureList>
              {customisationPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </FeatureList>
            <FeatureSubheading>Diagnosis & Treatment</FeatureSubheading>
            <FeatureParagraph>{diagnosisIntro}</FeatureParagraph>
            {diagnosisGroups.map((group) => (
              <React.Fragment key={group.title}>
                <FeatureListHeading>{group.title}</FeatureListHeading>
                <FeatureList>
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item}`}>{item}</li>
                  ))}
                </FeatureList>
              </React.Fragment>
            ))}
          </FeatureCard>
        </FeatureGrid>
      </FeaturesSection>

      <Emphasis>
        <p>She strongly believes Nutritional therapy can</p>
        <div className="prevent-protect">
          <span>PREVENT</span>
          <span>-</span>
          <span>PROTECT</span>
          <span>-</span>
          <span>REVERSE</span>
        </div>
        <p>Metabolic Diseases</p>
      </Emphasis>

      <ContactSectionWrapper ref={contactSectionRef}>
        <ContactShell>
          <ContactInfo>
            <h3>Ready to Begin Your Wellness Journey?</h3>
            <p>
              Share your details and we will design a custom roadmap that adapts to your lifestyle,
              health profile, and goals. Every plan is reviewed by our expert team before we connect
              with you for the next steps.
            </p>
          </ContactInfo>
          <ContactFormCard
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <ContactInputRow>
              <ContactInputField type="text" placeholder="Full Name" required />
              <ContactInputField type="email" placeholder="Email Address" required />
            </ContactInputRow>
            <ContactInputField type="tel" placeholder="Phone Number" />
            <ContactInputField type="text" placeholder="Focus Area (e.g., PCOS, Diabetes, Weight)" />
            <ContactTextArea placeholder="How can we help you?" />
            <ContactButton type="submit">Send Message</ContactButton>
          </ContactFormCard>
        </ContactShell>
      </ContactSectionWrapper>

    </HomeContainer>
  );
};

export default Home;
