export type CourseCategory = "light" | "heavy" | "emergency";

export type Course = {
  slug: string;
  title: string;
  /** Full formal IMI award title shown on detail pages */
  formalTitle?: string;
  ofqualId?: string;
  summary: string;
  category: CourseCategory;
  /** OPF proposed package — only set for initial light-vehicle courses */
  duration?: string;
  fee?: string;
  feeNote?: string;
  image: string;
  detailImage?: string;
  workshopImage?: string;
  overview: string;
  overviewExtra?: string;
  objectives: string[];
  curriculum: { month: string; topics: string[] }[];
  entryRequirements: string[];
  trainingMode: string;
  trainingExperience?: string[];
  assessment: string[];
  certification: string;
};

export type CourseLevelGroup = {
  slug: string;
  levelNumber: number;
  name: string;
  role: string;
  description: string;
  image: string;
  courses: Course[];
};

export const levels: CourseLevelGroup[] = [
  {
    slug: "level-1",
    levelNumber: 1,
    name: "Level 1",
    role: "Beginner",
    description:
      "EV introduction, major components, and hazard awareness.",
    image: "/images/courses/level-1.png",
    courses: [
      {
        slug: "electric-hybrid-vehicle-awareness",
        title: "Electric/Hybrid Vehicle Awareness",
        formalTitle:
          "IMI Level 1 Award in Hybrid and Electric Vehicle Awareness",
        summary:
          "EV introduction, major components, and hazard awareness.",
        category: "light",
        duration: "1 Month",
        fee: "PKR 65,000",
        image: "/images/courses/level-1.png",
        overview:
          "This L1 Award provides learners with the skills and knowledge to work safely around Hybrid (HEV), Plug In Hybrid (PHEV) and Electric Vehicles (BEV) at an awareness level. It introduces electric and hybrid vehicle technology, major components, charging basics and workplace hazard awareness for beginners entering the EV pathway.",
        overviewExtra:
          "An IMI Award is a formally recognised VRQ qualification (Vocationally Recognised Qualification). This VRQ provides recognition of the skills and competencies associated to the awarding body's standards, and will stay with the successful candidate for life.",
        objectives: [
          "Understand electric and hybrid vehicle layouts and main systems",
          "Identify key EV components, batteries, motors and charging hardware",
          "Apply basic high-voltage hazard awareness and safe working practices",
          "Explain charging modes, connectors and everyday EV operating concepts",
        ],
        curriculum: [
          {
            month: "Month 1",
            topics: [
              "Introduction to electric and hybrid vehicle technology",
              "EV powertrain overview: battery, inverter, motor and control systems",
              "Charging systems, connectors and infrastructure basics",
              "High-voltage awareness and personal protective equipment",
              "Workshop safety routines and EV terminology",
            ],
          },
        ],
        entryRequirements: [
          "Basic secondary education or equivalent",
          "Interest in automotive or technical trades",
          "No prior EV experience required",
        ],
        trainingMode:
          "Instructor-led sessions with guided demonstrations at OPF EV Academy, Islamabad.",
        trainingExperience: [
          "Once you have enrolled onto this course, you will get structured access to online learning materials so you can study when and where it suits you.",
          "Upon successful completion of the online element you will attend face-to-face awareness and assessment activities at OPF EV Academy, included within the course package.",
          "We advise completing the training within the first weeks of your package, then completing assessment. You can revisit key topics for revision during your access period.",
        ],
        assessment: [
          "Knowledge checks during the programme",
          "Safety awareness observation",
          "End-of-course review aligned to IMI Level 1 outcomes",
        ],
        certification:
          "Successful learners receive OPF recognition and pathway support toward this IMI Level 1 qualification.",
      },
    ],
  },
  {
    slug: "level-2",
    levelNumber: 2,
    name: "Level 2",
    role: "Foundation Technician",
    description:
      "Routine maintenance, EV safety, and heavy vehicle preparation.",
    image: "/images/courses/level-2.jpeg",
    courses: [
      {
        slug: "ev-hazard-management-emergency-recovery",
        title:
          "Electric/Hybrid Vehicle Hazard Management for Emergency and Recovery Personnel",
        summary:
          "EV hazard management for emergency and recovery personnel.",
        category: "emergency",
        image: "/images/courses/level-2.jpeg",
        overview:
          "This IMI Level 2 qualification prepares emergency and recovery personnel to manage hazards around electric and hybrid vehicles safely.",
        objectives: [
          "Identify EV-specific hazards in emergency and recovery scenarios",
          "Apply safe approach and isolation awareness for damaged EVs",
          "Use appropriate PPE and communication during recovery operations",
        ],
        curriculum: [
          {
            month: "Programme modules",
            topics: [
              "EV hazard identification for first responders",
              "Safe working near high-voltage systems after incidents",
              "Recovery and stabilization considerations for EVs",
              "Assessment against IMI Level 2 emergency/recovery outcomes",
            ],
          },
        ],
        entryRequirements: [
          "Relevant emergency, recovery or automotive background preferred",
          "Commitment to high-voltage safety standards",
        ],
        trainingMode:
          "Practical and classroom delivery. OPF schedule to be announced for this qualification.",
        assessment: [
          "Scenario-based safety assessments",
          "Knowledge checks mapped to IMI outcomes",
        ],
        certification:
          "Aligned to the official IMI Level 2 emergency and recovery qualification pathway.",
      },
      {
        slug: "ev-routine-maintenance-activities",
        title: "Electric/Hybrid Vehicle Routine Maintenance Activities",
        formalTitle:
          "IMI Level 2 Award in Electric / Hybrid Vehicle Routine Maintenance Activities",
        ofqualId: "603/1466/7",
        summary:
          "Work safely around HEV, PHEV and BEV systems during routine maintenance.",
        category: "light",
        duration: "2 Months",
        fee: "PKR 105,000",
        image: "/images/courses/level-2.jpeg",
        detailImage: "/images/courses/l2-online-screens.jpg",
        workshopImage: "/images/courses/l2-workshop.png",
        overview:
          "This L2 Award provides experienced technicians with the skills and knowledge to work safely on and around Hybrid (HEV), Plug In Hybrid (PHEV) and Electric Vehicles (BEV). This L2 qualification is designed to train a technician to work safely and competently on vehicles with high voltage systems (e.g. Hybrid/ Electric Vehicles). In brief summary, a L2 trained technician will be able to safely de-energise a high voltage system (in line with following manufacturer guidance) and subsequently work safely on the none high voltage systems of the vehicle.",
        overviewExtra:
          "An IMI L2 Award is a formally recognised VRQ qualification (Vocationally Recognised Qualification). This VRQ provides recognition of the skills and competencies associated to the awarding body's standards, and will stay with the successful candidate for life.",
        objectives: [
          "Identify electric/hybrid vehicle system components and operation",
          "Recognise hazards surrounding electric and hybrid vehicles",
          "Reduce risk to yourself and others when working near EV systems",
          "Safely prepare vehicles for routine maintenance (non-HV work)",
          "Isolate/reinstate high-voltage systems following manufacturer guidance for safe routine work",
        ],
        curriculum: [
          {
            month: "Month 1",
            topics: [
              "Electric/hybrid vehicle system components and operation",
              "Hazards surrounding electric and hybrid vehicles",
              "High-voltage safety, isolation and reinstate procedures",
              "PPE, risk reduction and safe workshop practices",
            ],
          },
          {
            month: "Month 2",
            topics: [
              "Preparing vehicles for routine maintenance activities",
              "Working safely on non-high-voltage systems of EVs/hybrids",
              "Practical servicing tasks and Level 2 assessment review",
            ],
          },
        ],
        entryRequirements: [
          "Vehicle maintenance and repair knowledge/skills at Level 2 preferred",
          "Automotive workshop experience recommended",
          "Commitment to high-voltage safety standards",
        ],
        trainingMode:
          "Blended theory with on-campus practical workshops at OPF EV Academy, Islamabad.",
        trainingExperience: [
          "Once you have enrolled onto this course, you will get unlimited access to the online training, 24 hours a day, for 1 whole year, so you can learn when and where it suits you.",
          "Upon successful completion of the online element of this course you will attend a 1/2 day face to face assessment at OPF EV Academy, and this is all included within the course price.",
          "We advise completing the training within the first 1 to 2 months, then completing the assessment at that point. You will then have the remainder of the 12 month access period to re-learn on demand as and when it suits you.",
        ],
        assessment: [
          "Knowledge assessment aligned to IMI Level 2 outcomes",
          "Practical demonstration of safe isolation/prepare-for-maintenance procedures",
          "Safety procedure observations during workshop sessions",
        ],
        certification:
          "Pathway support toward the official IMI Level 2 Award in Electric/Hybrid Vehicle Routine Maintenance Activities (VRQ). Successful progression supports further study at Level 3 System Repair and Replacement.",
      },
      {
        slug: "preparing-heavy-ev-for-repair",
        title: "Preparing Heavy Electric/Hybrid Vehicles for Repair",
        summary:
          "Repair preparation and safety for heavy electric/hybrid vehicles.",
        category: "heavy",
        image: "/images/courses/level-2.jpeg",
        overview:
          "This IMI Level 2 qualification focuses on preparing heavy electric and hybrid vehicles for repair, including safety and workshop readiness procedures.",
        objectives: [
          "Prepare heavy EVs/hybrids safely for workshop repair",
          "Apply HV awareness specific to heavy vehicle systems",
          "Follow manufacturer and workshop preparation procedures",
        ],
        curriculum: [
          {
            month: "Programme modules",
            topics: [
              "Heavy EV/hybrid architecture overview",
              "Preparation and isolation workflows before repair",
              "Workshop readiness, documentation and safety checks",
            ],
          },
        ],
        entryRequirements: [
          "Automotive or heavy vehicle background preferred",
          "HV safety commitment",
        ],
        trainingMode:
          "Practical workshop delivery. OPF cohort dates to be announced.",
        assessment: [
          "Practical preparation tasks",
          "Safety and procedure assessments",
        ],
        certification:
          "Aligned to the official IMI Level 2 heavy vehicle preparation qualification.",
      },
    ],
  },
  {
    slug: "level-3",
    levelNumber: 3,
    name: "Level 3",
    role: "Professional Technician",
    description:
      "High-voltage repair, component replacement, and specialist technical skills.",
    image: "/images/courses/level-3.jpeg",
    courses: [
      {
        slug: "ev-system-repair-replacement",
        title: "Electric/Hybrid Vehicle System Repair and Replacement",
        summary:
          "High-voltage isolation, component repair and replacement for light EVs.",
        category: "light",
        duration: "3 Months",
        fee: "PKR 165,000",
        image: "/images/courses/level-3.jpeg",
        overview:
          "This IMI Level 3 qualification covers system repair and replacement for electric and hybrid light vehicles, including isolation procedures and component-level work.",
        objectives: [
          "Carry out high-voltage isolation and prove-dead procedures",
          "Diagnose common EV system faults at subsystem level",
          "Remove, replace and reinstate EV components safely",
          "Interpret wiring diagrams, DTCs and service data",
        ],
        curriculum: [
          {
            month: "Month 1",
            topics: [
              "Advanced high-voltage safety and isolation practice",
              "EV electrical architecture and control modules",
              "Diagnostic scan tools and fault code interpretation",
            ],
          },
          {
            month: "Month 2",
            topics: [
              "Inverter, motor and power electronics overview",
              "Component removal and replacement workflows",
              "Reconnect, reinstate and post-repair verification",
            ],
          },
          {
            month: "Month 3",
            topics: [
              "Integrated practical repair assignments",
              "Workshop quality control and documentation",
              "Level 3 assessment and progression guidance",
            ],
          },
        ],
        entryRequirements: [
          "Level 2 maintenance competence preferred",
          "Demonstrated high-voltage safety awareness",
        ],
        trainingMode:
          "Intensive on-campus practical training with supervised repair tasks.",
        assessment: [
          "Observed practical repair and replacement tasks",
          "Diagnostic scenario assessments",
          "Safety competency checks",
        ],
        certification:
          "OPF recognition with pathway support toward this IMI Level 3 qualification.",
      },
      {
        slug: "heavy-ev-system-repair-replacement",
        title:
          "Heavy Electric/Hybrid Vehicle System Repair and Replacement",
        summary:
          "Heavy EV/hybrid system repair, replacement, and specialist HV skills.",
        category: "heavy",
        image: "/images/courses/level-3.jpeg",
        overview:
          "This IMI Level 3 qualification focuses on repair and replacement of systems on heavy electric and hybrid vehicles.",
        objectives: [
          "Perform HV isolation on heavy EV/hybrid systems",
          "Repair and replace heavy vehicle EV components safely",
          "Apply specialist technical procedures for commercial EVs",
        ],
        curriculum: [
          {
            month: "Programme modules",
            topics: [
              "Heavy EV system architecture and HV safety",
              "Repair and replacement workflows for heavy vehicles",
              "Verification, documentation and assessment",
            ],
          },
        ],
        entryRequirements: [
          "Level 2 heavy vehicle preparation or equivalent experience",
          "Strong HV safety competence",
        ],
        trainingMode:
          "Specialist workshop delivery. OPF schedule to be announced.",
        assessment: [
          "Practical repair assessments",
          "Technical and safety competency review",
        ],
        certification:
          "Aligned to the official IMI Level 3 heavy vehicle repair qualification.",
      },
    ],
  },
  {
    slug: "level-4",
    levelNumber: 4,
    name: "Level 4",
    role: "Advanced Technician",
    description:
      "Advanced diagnostics, fault testing, and specialist work on high-voltage components.",
    image: "/images/courses/level-4.jpeg",
    courses: [
      {
        slug: "ev-fault-diagnosis-testing-repair",
        title:
          "Fault Diagnosis, Testing and Repair of Electric/Hybrid Vehicles and Components",
        summary:
          "Advanced EV fault diagnostics, testing and specialized repair procedures.",
        category: "light",
        duration: "TBD",
        fee: "TBD",
        feeNote: "Fee and duration to be confirmed",
        image: "/images/courses/level-4.jpeg",
        overview:
          "This IMI Level 4 qualification develops advanced diagnosis, testing and repair skills for electric and hybrid vehicles and components.",
        objectives: [
          "Perform advanced EV fault diagnosis using structured methods",
          "Carry out specialized testing on high-voltage systems",
          "Plan and execute advanced repair strategies",
        ],
        curriculum: [
          {
            month: "Programme structure — to be confirmed",
            topics: [
              "Advanced HV diagnostics and measurement techniques",
              "Complex battery, inverter and drivetrain fault analysis",
              "Specialized testing equipment and validation procedures",
              "Final competency assessment framework",
            ],
          },
        ],
        entryRequirements: [
          "Level 3 repair competence preferred",
          "Strong diagnostic foundation and HV safety skills",
        ],
        trainingMode:
          "Advanced practical laboratory delivery. Exact schedule to be published with cohort dates.",
        assessment: [
          "Advanced diagnostic and testing practicals",
          "Technical case reports and fault analysis",
        ],
        certification:
          "Aligned to the official IMI Level 4 light vehicle diagnosis qualification.",
      },
      {
        slug: "heavy-ev-fault-diagnosis-testing-repair",
        title:
          "Fault Diagnosis, Testing and Repair of Heavy Electric/Hybrid Vehicles and Components",
        summary:
          "Advanced diagnostics and specialist repair for heavy EV/hybrid systems.",
        category: "heavy",
        image: "/images/courses/level-4.jpeg",
        overview:
          "This IMI Level 4 qualification covers advanced fault diagnosis, testing and repair of heavy electric and hybrid vehicles and components.",
        objectives: [
          "Diagnose complex faults on heavy EV/hybrid systems",
          "Perform specialized HV testing on commercial vehicles",
          "Execute advanced repair decisions safely and accurately",
        ],
        curriculum: [
          {
            month: "Programme modules",
            topics: [
              "Heavy EV advanced diagnostics",
              "Specialist testing of HV components",
              "Complex repair case studies and assessment",
            ],
          },
        ],
        entryRequirements: [
          "Level 3 heavy vehicle repair competence preferred",
          "Advanced HV safety competence",
        ],
        trainingMode:
          "Specialist advanced workshop delivery. OPF dates to be announced.",
        assessment: [
          "Advanced practical diagnostics",
          "Technical reporting and competency review",
        ],
        certification:
          "Aligned to the official IMI Level 4 heavy vehicle diagnosis qualification.",
      },
    ],
  },
];

export function getLevelBySlug(slug: string) {
  return levels.find((level) => level.slug === slug);
}

export function getAllCourses() {
  return levels.flatMap((level) =>
    level.courses.map((course) => ({ course, level })),
  );
}

export function getCourseBySlug(slug: string) {
  for (const level of levels) {
    const course = level.courses.find((item) => item.slug === slug);
    if (course) return { course, level };
  }
  return null;
}

export function getLevelSlugs() {
  return levels.map((level) => level.slug);
}

export function getCourseSlugs() {
  return getAllCourses().map((item) => item.course.slug);
}

/** Initial OPF website focus: light electric/hybrid vehicle courses */
export function getFeaturedLightCourses() {
  return getAllCourses().filter((item) => item.course.category === "light");
}
