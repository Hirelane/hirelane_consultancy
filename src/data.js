import tech from './assets/tech.png';
import hr from './assets/hr.png';
import creative from './assets/creative.png';
import analytics from './assets/analytics.png'

const talents = [
    {
        title: "Alignment",
        desc: "Precisely matching talent with company objectives.",
        icon: tech
    }, {
        title: "Integration",
        desc: "Fostering success through seamless cultural alignment",
        icon: hr
    }, {
        title: "Recruitment",
        desc: "Going beyond traditional methods for superior results",
        icon: creative
    }, {
        title: "Precision",
        desc: "Tailored solutions for sustainable business growth",
        icon: analytics
    }
];

const expertises = [
    {
        title: "Sales and Marketing",
        icon: tech,
        iconBg: "#f07663",
        points: [
            "Strategic market insight for talent identification.",
            "Proven record in recruiting revenue-driven professionals.",
            "Customized solutions aligning with dynamic industry needs."

        ]
    },
    {
        title: "HR",
        icon: tech,
        iconBg: "#f07663",
        points: [
            "Precision talent solutions, culture-centric approach.",
            "Strategic recognition of HR's pivotal role in success.",
            "Collaborative partnerships for long-term talent synergy."

        ]
    },
    {
        title: "Customer Support",
        icon: tech,
        iconBg: "#f07663",
        points: [
            "Expertise in recruiting key customer satisfaction roles.",
            "Focus on individuals fostering loyalty and growth.",
            "Tailored solutions for enhancing customer experiences."

        ]
    },
    {
        title: "Business Operation",
        icon: tech,
        iconBg: "#f07663",
        points: [
            "In-depth understanding of diverse industry intricacies.",
            "Sourcing top talent for streamlined, efficient operations.",
            "Solutions that contribute to overall business success."

        ]
    }
]

const reasons = [
    {
        title: "Top Talent",
        icon: creative,
        desc: "Elevate your workforce with our top-tier talent solutions."
    }, {
        title: "Customized Solutions",
        icon: tech,
        desc: "Tailored strategies for your unique business needs and goals."
    }, {
        title: "Quality",
        icon: creative,
        desc: "Delivering excellence in talent solutions for lasting business impact."
    }, {
        title: "Cost Effectiveness",
        icon: tech,
        desc: "Achieve strategic goals with our budget-friendly, efficient solutions."
    }, {
        title: "Retention Focus",
        icon: creative,
        desc: "Achieve strategic goals with our budget-friendly, efficient solutions."
    }, 
]

const processes = [
    {
        title: 'Strategic Needs Assessment',
        desc: 'We start by understanding your unique requirements and strategic goals.',
        icon: tech
    }, {
        title: 'Precision Candidate Sourcing',
        desc: 'Utilizing targeted approaches, we identify and source top-tier candidates.',
        icon: tech
    }, {
        title: 'Customized Assessment & Screeing',
        desc: 'We customize assessments to ensure the perfect match for your needs.',
        icon: tech
    }, {
        title: 'Cliend-Candidate Collaboration',
        desc: 'Collaborate closely with you and candidates to build successful partnerships.',
        icon: tech
    }, {
        title: 'Post-Placement Integration Support',
        desc: 'Our commitment doesn\'t end at placement; we offer ongoing integration support',
        icon: tech
    }
]

const helps = [
    {
        title: '96.5%',
        desc: 'unfit candidates are filtered out'
    }, {
        title: 'Eliminates',
        desc: 'the need for HR for cultural, language, and background checks'
    }, {
        title: 'Zero',
        desc: 'reliance on technical recruiters'
    }, {
        title: '75%',
        desc: 'Reduction in the guesswork for hiring managers'
    }
]

const howItWorks = [
    {
        title: 'Step 1: Share the Job Description',
        points: ['Fill out our user-friendly form, providing comprehensive details about the role, responsibilities, required skills, market experience, and budget.',
                'We also inquire about behavioral preferences to ensure a cultural fit.',],
        icon: tech,
        noteTitle: [],
        noteDesc: []
    }, {
        title: 'Step 2: Review & Shortlist the Matches',
        points: ['Within a few days, we present the best-fit profiles for your review.',
                'Shortlist candidates and share preferred interview slots.',
                'For rare roles, we commit to super-sourcing efforts to find the right talent.'],
        icon: tech,
        noteTitle: ['Pre-interview Assessments: '],
        noteDesc:['If needed, you can request additional assessments to evaluate technical capabilities.']
    }, {
        title: 'Step 3: Interview & Hire',
        points: ['Conduct thorough assessments until you\'re confident.',
                'Our pre-vetting process minimizes guesswork, enabling even non-technical interviewers to assess candidates based on the vibe.',
                'No obligation to hire until you are fully satisfied.'],
        icon: tech,
        noteTitle: ['No Risk Trial: ',],
        noteDesc: ['Opt for a trial period (up to 2 weeks, based on availability) to build trust before making a final hiring decision.']
    }, {
        title: 'Step 4: Onboard & Manage',
        points: ['Once you confirm a hire, we handle legalities, contracts, and ensure a seamless onboarding process.',
                'A talent success coach remains involved to ensure optimal engagement.'],
        icon: tech,
        noteTitle: ['30-Days Replacement: ', 'Easy Cancellation: '],
        noteDesc:['You have the option for a replacement within 30 days if you encounter challenges with the talent.', 'In case talent needs change, cancellation is an option with a 30-day notice period.']
    }
]

const professions = [
    'ReactJs Developers',
    'PHP Developers',
    'SEM & PPC Specialist',
    'UX/UI Designers',
    'WordPress Developers',
    'NodeJs Developers',
    'SEO Specialists',
    'Laravel Developers',
    'Programmatic Experts',
]

const packages = [
    {
      title: 'Hire a talent for short-term',
      desc: 'Ideal when you want to hire contractors for a fixed-term',
      salary: '$499',
      platformFee: '25%',
      features: ['Resume Screening', 'Payout Management', 'Email Support', '14 Days Easy Cancellation'],
    },
    {
      title: 'Hire a talent for long-term',
      desc: 'Best when you want to hire on ongoing basis',
      salary: '$799',
      platformFee: '35%',
      features: ['Resume Screening', 'Payout Management', 'Phone Support', 'Candidate Matching', '30 Days Easy Cancellation'],
    },
    {
      title: 'Direct-hire on your payroll',
      desc: 'Perfect when you want to hire and manage payroll on your own',
      salary: '$1299',
      platformFee: '10%',
      features: ['Resume Screening', 'Account management and support', 'Phone and Email Support', '90 Days Replacement'],
    },
  ];

export { talents, expertises, reasons, processes, helps, howItWorks, professions, packages };