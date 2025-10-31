import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLeaf, FaHeart, FaCheckCircle } from 'react-icons/fa';

const publicUrl = process.env.PUBLIC_URL || '';

const ServicesContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    color: #2c5282;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #4299e1;
    font-size: 1.3rem;
    font-style: italic;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }
`;

const ProgramTypes = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProgramCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 400px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #2c5282;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    color: #718096;
    line-height: 1.6;
  }
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const Program = styled.button`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  text-align: left;
  cursor: pointer;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(66, 153, 225, 0.1);
  }

  h3 {
    color: #2d3748;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: #718096;
    line-height: 1.6;
  }
  ${({ $isActive }) =>
    $isActive &&
    `
      border-color: #4299e1;
      box-shadow: 0 10px 24px rgba(66, 153, 225, 0.18);
      transform: translateY(-6px);
    `}

  &:focus-visible {
    outline: 3px solid rgba(66, 153, 225, 0.35);
    outline-offset: 2px;
  }
`;

const ProgramDetailWrapper = styled.div`
  margin-top: 3rem;
  background: linear-gradient(135deg, rgba(240, 249, 255, 0.85), rgba(255, 255, 255, 0.96));
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 16px 36px rgba(45, 114, 182, 0.15);
`;

const ProgramDetailHeading = styled.h3`
  color: #1e3a8a;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const ProgramDetailText = styled.p`
  color: #2d3748;
  line-height: 1.85;
  margin-bottom: 1.2rem;
`;

const ProgramDetailList = styled.ul`
  margin: 1rem 0 1.5rem 1.2rem;
  color: #2d3748;
  line-height: 1.75;

  li + li {
    margin-top: 0.75rem;
  }
`;

const ProgramDetailSubheading = styled.h4`
  color: #2c5282;
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ProgramDetailImage = styled.img`
  margin: 2.5rem auto 0;
  width: min(100%, 520px);
  max-height: 360px;
  border-radius: 24px;
  object-fit: cover;
  display: block;
  border: 1px solid rgba(66, 153, 225, 0.15);
  box-shadow: 0 20px 46px rgba(30, 72, 123, 0.18);
`;

const weightLossDetail = {
  heading: 'Weight Loss Program Highlights',
  overview: [
    'We are pioneers in online weight loss diet programs with more than 20 years of specialised experience.',
    'We design weight loss diet charts around your lifestyle, work routine, home schedule, meal preferences, eating times, allergies, medical history, bloodwork, emotional cues, and personal cultural practices.',
    'Long-term results matter most to us, so your plan is never a quick fix-it is built for sustainable change.',
  ],
  sections: [
    {
      heading: 'Why It Works',
      type: 'list',
      items: [
        'Expertise: Decades of coaching experience help us anticipate the hurdles people face and remove the need for drastic measures.',
        'Complete wellness advice: Functional nutrition blends with mindset coaching so your habits feel natural and lasting.',
        'Constant monitoring and support: We make consistency easier with regular check-ins, accountability, and timely adjustments.',
        'Enjoyable nutrition: Every plan keeps flavour front and centre while staying aligned with your health and fitness targets.',
        'Lasting fat loss: Structured protocols help you burn fat, stay lean for the long term, and feel confident in your progress.',
        'Holistic uplift: Improved energy, sharper focus, and emotional balance flow from habits that honour body and mind.',
      ],
    },
    {
      heading: 'Steps We Take',
      type: 'list',
      items: [
        'In-depth consultation: We start with a candid conversation about lifestyle, habits, goals, and medical history.',
        'Customised diet plan: Dr. Padmaja personally crafts each plan so it fits your routine and preferences-no generic templates.',
        'Regular monitoring: Continuous tracking and feedback loops keep progress on course and help us navigate plateaus quickly.',
        'Long-term sustenance: We equip you with maintenance strategies so your results thrive long after the initial program.',
      ],
    },
  ],
  closing: [
    'Weight and fat loss success comes from nurturing the right relationship with food. Our plans focus on the type, variety, and combination of foods rather than aggressive calorie cuts.',
    'Holistic nutrition considers body, mind, and soul to restore balance. With an abundance of delicious options tailored to you, weight loss becomes safe, simple, and sustainable.',
    'Simply. Safely. Easily.',
  ],
};

const weightGainDetail = {
  heading: 'Weight Gain Program Highlights',
  overview: [
    'The saying "eat with your eyes" rings true: every meal should look inviting, lift your spirit, and be a joy-not a chore.',
    'Our nutritional therapy targets long-term, healthy weight gain by matching your daily calorie needs with nutrient-dense foods rather than overwhelming portion sizes.',
    'We create Indian, international, and fusion plans around your schedule, preferences, allergies, medical concerns, bloodwork, emotions, and cultural practices so every chart feels like it was made just for you.',
  ],
  sections: [
    {
      heading: 'Weight Gain Diet Essentials',
      type: 'paragraphs',
      paragraphs: [
        'Being underweight can stem from genetics, stress, illness, or eating disorders, and it becomes medically significant when deficiencies appear.',
        'Malnutrition often travels alongside underweight conditions. It occurs when the body cannot absorb enough energy or loses nutrients faster than they can be replaced-through illness, restrictive dieting, or substance misuse.',
        'Many people assume gaining weight is simple, yet anyone naturally lean knows that adding healthy kilos can be a serious challenge without guidance.',
      ],
    },
    {
      heading: 'Why Healthy Gain Matters',
      type: 'list',
      items: [
        'Underweight bodies deserve the same empathy as weight-loss journeys; sustainable gain takes strategy and steady support.',
        'Our customised plans build abundance, not deprivation, so eating remains enjoyable while fuelling your body effectively.',
        'We align nourishment with your mental and physical wellbeing, helping you rebuild energy, resilience, and confidence.',
      ],
    },
    {
      heading: 'How We Help',
      type: 'list',
      items: [
        'Tailored menus that taste great while delivering the calories, protein, and micronutrients you need.',
        'Holistic coaching that addresses lifestyle rhythms, stress, and sleep so your whole system can thrive.',
        'Ongoing monitoring and adjustments that keep you on track and celebrate every milestone.',
      ],
    },
  ],
  closing: [
    'We offer an exciting variety of foods in our customised plans, creating a sense of abundance rather than restriction. You can eat to appetite, avoid empty calories, and gain weight safely with the right guidance.',
    'Simply! Safely! Healthily!',
  ],
};

const pcosDetail = {
  heading: 'PCOS / PCOD Program Highlights',
  overview: [
    'We specialise in diet plans tailored for PCOS and PCOD, recognising that these conditions require holistic management rather than quick fixes.',
    'Our approach blends integrative nutrition, functional medicine, lifestyle coaching, and stress support to calm symptoms and rebalance hormones.',
    'Each chart reflects your schedule, food preferences, allergies, medical needs, lab work, emotional cues, and cultural background so the plan fits naturally.',
    'We focus on training your body to balance hormones, reduce stubborn fat, and maintain a leaner physique long after the programme ends.',
  ],
  sections: [
    {
      heading: 'Understanding PCOS / PCOD',
      type: 'paragraphs',
      paragraphs: [
        'Polycystic Ovary Syndrome (PCOS) is a metabolic disorder and a leading reason many women struggle with fertility worldwide.',
        'Excess androgen hormones can trigger irregular periods, acne, hair thinning on the scalp, and increased facial or body hair.',
        'Infertility and miscarriage are tragically common, so ongoing lifestyle and nutrition support becomes essential for lasting relief.',
      ],
    },
    {
      heading: 'How Our Plans Help',
      type: 'list',
      items: [
        'Distinctive nutrition combines fibre-rich foods, balanced macros, and anti-inflammatory choices to steady insulin and hormone levels.',
        'Lifestyle coaching covers movement, stress relief, restorative sleep, and mindset practices that ease PCOS symptoms.',
        'Personalised monitoring keeps you accountable and allows timely adjustments as your cycle, skin, and energy improve.',
      ],
    },
  ],
  closing: [
    'We supply an abundant menu so you never feel deprived, eating in sync with your appetite while naturally reducing excess weight and inflammation.',
    'Simply! Safely! Harmoniously!',
  ],
};

const diabetesDetail = {
  heading: 'Diabetes Care Program Highlights',
  overview: [
    'Nutrition and regular movement form the foundation of diabetes therapy, even when medication is part of your plan.',
    'Intentional eating patterns can support a 10 percent reduction in excess weight, dramatically improving glucose control.',
    'Balanced blood sugar protects both large and small vessels, lowering the risk of long-term complications.',
  ],
  sections: [
    {
      heading: 'Diabetes Diet Insights',
      type: 'paragraphs',
      paragraphs: [
        'Diabetes mellitus describes several metabolic disorders characterised by elevated blood sugar due to insufficient insulin or reduced insulin sensitivity.',
        'Type 1 and Type 2 diabetes are the most common forms; both benefit from thoughtful nutrition and lifestyle support.',
        'Improving insulin sensitivity can reduce reliance on medications while preventing dangerous highs and lows in sugar levels.',
      ],
    },
    {
      heading: 'Our Approach',
      type: 'list',
      items: [
        'Early programmes lean on lifestyle adjustments, mindful movement, and stress reduction before escalating medication.',
        'Regular check-ins with your nutritionist and doctor keep progress steady and decisions data-driven.',
        'Menus maintain energy and flavour while supporting liver, kidney, heart, and nerve health.',
      ],
    },
  ],
  closing: [
    'If left unmanaged, diabetes can lead to fatty liver, kidney disease, heart issues, nerve damage, vision loss, and more. Timely nutrition support helps prevent these complications.',
    'Our tailored plans provide satisfying variety so you can eat to appetite, manage glucose, and feel in control every day.',
  ],
};

const gutHealthDetail = {
  heading: 'Gut Health Program Highlights',
  overview: [
    'Your diet shapes a thriving gut microbiome; what you eat feeds the beneficial bacteria that support digestion, immunity, and mood.',
    'Our gut health programmes explore digestive disorders, their triggers, and both conventional and natural treatments to restore balance.',
    'We focus on the mind-gut-liver axis, recognising that nutrition, stress, sleep, and emotional wellbeing all influence digestive harmony.',
  ],
  sections: [
    {
      heading: 'What We Address',
      type: 'paragraphs',
      paragraphs: [
        'Age, gender, genetics, and especially diet continuously shape the composition of your gut microbiota.',
        'When the microbiome becomes imbalanced, symptoms such as bloating, irregularity, fatigue, and brain fog can appear.',
        'Our distinctive plans use fibre diversity, fermented foods, hydration, and mindful eating to rebuild resilience and reduce inflammation.',
      ],
    },
    {
      heading: 'Programme Focus',
      type: 'list',
      items: [
        'Personalised food guidance that nurtures beneficial bacteria while calming gut irritation.',
        'Holistic coaching to align movement, stress management, and sleep hygiene with digestive healing.',
        'Progress tracking that highlights triggers and celebrates improvements in energy, mood, and digestion.',
      ],
    },
  ],
  closing: [
    'We provide abundant, varied meal ideas so you can eat generously, add colourful plant combinations, and enjoy a thriving gut with expert support.',
  ],
};

const thyroidDetail = {
  heading: 'Thyroid Wellness Program',
  overview: [
    'Our dietitians specialise in nutritional support for thyroid disorders and tailor strategies to your unique needs.',
    'Trace elements like iodine and selenium, along with calcium, iron, vitamins A and D, are carefully woven into daily menus.',
    'Plans are fully customised around your lifestyle, medical reports, emotional cues, and cultural preferences.',
  ],
  sections: [
    {
      heading: 'How We Support You',
      type: 'list',
      items: [
        'Personalised diet charts featuring Indian, international, and fusion meal options.',
        'Nutrient timing and supplementation guidance to stabilise thyroid hormone function.',
        'Coaching that syncs lifestyle, stress relief, and movement with thyroid wellness.',
      ],
    },
  ],
  closing: [
    'We help you manage your thyroid the healthy, smart way, and at a pace that feels achievable.',
  ],
};

const pregnancyDetail = {
  heading: 'Pregnancy Wellness Program',
  overview: [
    'We support you from preconception through postpartum recovery and reshaping.',
    'Pre- and post-natal plans balance weight, energy, and staged nutrient requirements for every trimester.',
    'Custom diets align with your schedule, cravings, allergies, medical guidance, and cultural rituals.',
  ],
  sections: [
    {
      heading: 'During Pregnancy',
      type: 'paragraphs',
      image: `${publicUrl}/images/img.png`,
      imageAlt: 'Expecting mother enjoying mindful nutrition',
      paragraphs: [
        'Early pregnancy calls for additional vitamins and minerals-especially folic acid, iodine, and iron-before energy intake rises.',
        'By the second and third trimester we safely add 300 to 500 calories, adjusting to your baby\'s growth while monitoring weight gain.',
        'We prioritise myth-free education, mindful calorie tracking, and nutrient-dense foods to keep mother and child thriving.',
      ],
    },
    {
      heading: 'After Pregnancy',
      type: 'paragraphs',
      paragraphs: [
        'Postpartum plans replenish nutrients, boost energy, and support milk production or recovery as needed.',
        'We guide gentle weight loss, body recomposition, and hormonal balance without compromising immunity.',
        'Beauty, skin, and hair nourishment are interwoven so you feel confident and energised day by day.',
      ],
    },
  ],
  closing: [
    'Our pre and post pregnancy plans make sustainable weight management feel simple and supportive.',
  ],
};

const beautyDetail = {
  heading: 'Beauty, Skin & Hair Nutrition',
  overview: [
    'True radiance comes from within; nutrient-dense meals fuel a healthy glow, shiny hair, and resilient nails.',
    'We curate collagen-supporting, antioxidant-rich, anti-inflammatory foods to power cellular renewal.',
    'Custom charts reflect your lifestyle, preferences, and the root causes behind skin or hair concerns.',
  ],
  sections: [
    {
      heading: 'Glow From Within',
      type: 'list',
      items: [
        'Collagen-rich pairings that protect elasticity and hydration.',
        'Vitamin- and mineral-focused menus to strengthen hair follicles, nails, and skin barriers.',
        'Delicious, long-term anti-ageing combinations that enhance metabolism and energy.',
      ],
    },
  ],
  closing: [
    'We help you feel energised, confident, and radiant with every bite.',
  ],
};

const immunityDetail = {
  heading: 'Immunity Boost Program',
  overview: [
    'A balanced, toxin-aware diet is the foundation of strong immunity and metabolic resilience.',
    'Our plans use integrative nutrition to remove allergens, restore gut health, and stabilise hormones.',
    'Every chart is personalised to lifestyle, stress patterns, medical conditions, and cultural habits.',
  ],
  sections: [
    {
      heading: 'What You Gain',
      type: 'list',
      items: [
        'Detox-supportive foods that cleanse and rebalance your system naturally.',
        'Research-backed strategies to close nutrient gaps and reduce infection frequency.',
        'Education and coaching that empower you to maintain immunity long after the programme.',
      ],
    },
  ],
  closing: [
    'We train your body to respond intelligently to stressors, keeping you energised and illness-resistant.',
  ],
};

const programDetails = {
  'weight-loss': weightLossDetail,
  'weight-gain': weightGainDetail,
  'pcos-management': pcosDetail,
  'diabetes-care': diabetesDetail,
  'gut-health': gutHealthDetail,
  'thyroid-management': thyroidDetail,
  'pregnancy-care': pregnancyDetail,
  'beauty-care': beautyDetail,
  'immunity-care': immunityDetail,
};

const programCards = [
  {
    slug: 'weight-loss',
    title: 'Weight Loss',
    description:
      'Customized weight loss programs with 20+ years of expertise, focusing on sustainable results.',
  },
  {
    slug: 'weight-gain',
    title: 'Weight Gain',
    description:
      'Healthy weight gain programs through wholesome nutrition and balanced caloric intake.',
  },
  {
    slug: 'pcos-management',
    title: 'PCOS/PCOD Management',
    description:
      'Specialised diet plans that stabilise hormones and ease PCOS/PCOD symptoms.',
  },
  {
    slug: 'diabetes-care',
    title: 'Diabetes Care',
    description:
      'Comprehensive diabetes nutrition to balance blood sugar and protect organs.',
  },
  {
    slug: 'gut-health',
    title: 'Gut Health',
    description:
      'Targeted gut healing plans that restore microbiome diversity and digestion.',
  },
  {
    slug: 'thyroid-management',
    title: 'Thyroid Management',
    description:
      'Customized nutrition plans for optimal thyroid function and hormone balance.',
  },
  {
    slug: 'pregnancy-care',
    title: 'Pregnancy Care',
    description:
      'Pre and post-natal nutrition support for healthy pregnancy and recovery.',
  },
  {
    slug: 'beauty-care',
    title: 'Beauty, Skin & Hair',
    description:
      'Nutrition plans that promote glowing skin, strong hair, and lasting vitality.',
  },
  {
    slug: 'immunity-care',
    title: 'Immunity Boost',
    description:
      'Integrative diets that strengthen your defence system and resilience.',
  },
];

const Services = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const handleProgramSelect = (slug) => {
    setActiveProgram((prev) => (prev === slug ? null : slug));
  };

  const activeDetail = programDetails[activeProgram];

  return (
    <ServicesContainer>
      <Header>
        <h1>DIET PROGRAMS</h1>
        <p>
          The purpose is to get healthy, not skinny & maintain a healthy lifestyle 
          through functional nutrition..!
        </p>
      </Header>

      <ProgramTypes>
        <ProgramCard>
          <FaLeaf size={40} color="#4299e1" />
          <h2>Holistic Diet Programs</h2>
          <p>Comprehensive approach to nutrition focusing on overall wellness.</p>
        </ProgramCard>
        <ProgramCard>
          <FaHeart size={40} color="#4299e1" />
          <h2>Therapeutic Diet Programs</h2>
          <p>Specialized nutrition plans for specific health conditions.</p>
        </ProgramCard>
      </ProgramTypes>

      <ProgramGrid>
        {programCards.map((program) => (
          <Program
            key={program.slug}
            type="button"
            onClick={() => handleProgramSelect(program.slug)}
            $isActive={activeProgram === program.slug}
          >
            <h3>
              <FaCheckCircle color="#4299e1" /> {program.title}
            </h3>
            <p>{program.description}</p>
          </Program>
        ))}
      </ProgramGrid>

      {activeDetail && (
        <ProgramDetailWrapper>
          <ProgramDetailHeading>{activeDetail.heading}</ProgramDetailHeading>
          {activeDetail.overview?.map((paragraph, index) => (
            <ProgramDetailText key={`overview-${index}`}>{paragraph}</ProgramDetailText>
          ))}

          {activeDetail.sections?.map((section, sectionIndex) => (
            <React.Fragment key={`section-${sectionIndex}`}>
              <ProgramDetailSubheading>{section.heading}</ProgramDetailSubheading>
              {section.type === 'list' && (
                <ProgramDetailList>
                  {section.items.map((item, itemIndex) => (
                    <li key={`section-${sectionIndex}-item-${itemIndex}`}>{item}</li>
                  ))}
                </ProgramDetailList>
              )}
              {section.type === 'paragraphs' &&
                section.paragraphs.map((paragraph, paragraphIndex) => (
                  <ProgramDetailText
                    key={`section-${sectionIndex}-paragraph-${paragraphIndex}`}
                  >
                    {paragraph}
                  </ProgramDetailText>
                ))}

              {section.image && (
                <ProgramDetailImage
                  src={section.image}
                  alt={section.imageAlt || section.heading}
                />
              )}
            </React.Fragment>
          ))}

          {activeDetail.closing?.map((paragraph, index) => (
            <ProgramDetailText key={`closing-${index}`}>{paragraph}</ProgramDetailText>
          ))}

          {activeDetail.image && (
            <ProgramDetailImage
              src={activeDetail.image}
              alt={activeDetail.imageAlt || activeDetail.heading}
            />
          )}
        </ProgramDetailWrapper>
      )}
    </ServicesContainer>
  );
};

export default Services;
