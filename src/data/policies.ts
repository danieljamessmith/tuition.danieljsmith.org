export interface PolicyItem {
  number: string;
  id: string;
  text: string;
}

export interface PolicySection {
  number: string;
  id: string;
  title: string;
  policies: PolicyItem[];
}

const policyId = (number: string) => `policy-${number.replaceAll('.', '-')}`;

export const policyTitle = 'Policies & Terms of Service for Private Clients';

export const policyIntro =
  'By booking tuition, the client agrees that tuition will be provided in accordance with these policies and terms.';

export const policySections: PolicySection[] = [
  {
    number: '1',
    id: 'section-1',
    title: 'Tuition and Student Expectations',
    policies: [
      {
        number: '1.1',
        id: policyId('1.1'),
        text: 'Specific grades, results, or outcomes are not guaranteed. Tuition supports the student’s preparation, but does not promise a particular grade, mark, offer, or result.',
      },
      {
        number: '1.2',
        id: policyId('1.2'),
        text: 'Tuition is most effective when used alongside consistent independent study. Students are expected to consolidate lesson work, practise independently, and take responsibility for their own learning between sessions.',
      },
      {
        number: '1.3',
        id: policyId('1.3'),
        text: 'Students are expected to have a practical way to show their work during online lessons. This could include writing on the shared whiteboard using a mouse, graphics tablet, touchscreen, iPad, or similar device, or clearly sharing written work by camera or upload.',
      },
      {
        number: '1.4',
        id: policyId('1.4'),
        text: 'Students are expected to arrive ready to engage with the lesson. This includes attempting questions, explaining their thinking where possible, asking questions when unsure, responding to corrections or prompts, and having any necessary equipment available for the topics being covered, such as a calculator where appropriate.',
      },
      {
        number: '1.5',
        id: policyId('1.5'),
        text: 'Students should give reasonable advance notice, at least 48 hours, if they would like a lesson to cover a substantially different topic, module, exam paper, or qualification from the one previously discussed. This helps ensure that the lesson can be prepared appropriately. Where no advance notice is given, it may not be possible to cover the requested material in the next lesson.',
      },
      {
        number: '1.6',
        id: policyId('1.6'),
        text: 'Tuition must not be used to complete work dishonestly or to engage in academic misconduct. The tutor will not complete homework, coursework, assessments, applications, entrance test submissions, or any other work that is required to be the student’s own, and may decline requests that appear to involve academic misconduct. The tutor may, however, support the student in understanding the relevant content, reviewing methods, discussing mistakes, and working through similar or related questions for study and practice.',
      },
    ],
  },
  {
    number: '2',
    id: 'section-2',
    title: 'Lesson Scheduling, Payments and Cancellation',
    policies: [
      {
        number: '2.1',
        id: policyId('2.1'),
        text: 'Lessons are booked for a minimum of 1 hour and a maximum of 2 hours, unless otherwise agreed. Lesson duration is agreed at the time of booking and is billed to the nearest 15 minutes. Once confirmed, the booked lesson duration will normally be treated as fixed for billing and cancellation purposes.',
      },
      {
        number: '2.2',
        id: policyId('2.2'),
        text: 'Hourly rates are agreed before lessons begin. Quoted rates may vary depending on availability, subject, level, lesson format, and when tuition is arranged. A rate quoted to one student does not guarantee the same rate for another student. Any change to the lesson rate will be confirmed in writing before it applies.',
      },
      {
        number: '2.3',
        id: policyId('2.3'),
        text: 'A minimum number of lessons is not required. Lessons may be arranged individually or on an ongoing basis, subject to availability.',
      },
      {
        number: '2.4',
        id: policyId('2.4'),
        text: 'Lessons are only confirmed once the lesson time has been explicitly agreed in writing. Suggested or proposed lesson times are not guaranteed until confirmed.',
      },
      {
        number: '2.5',
        id: policyId('2.5'),
        text: 'Lessons may be cancelled or rescheduled without charge with at least 24 hours’ notice before the scheduled start time. Lessons cancelled, missed, or rearranged with less than 24 hours’ notice are charged at the full lesson fee.',
      },
      {
        number: '2.6',
        id: policyId('2.6'),
        text: 'If the tutor needs to cancel or rearrange a confirmed lesson, the client will not be charged for that lesson unless it is rearranged and takes place. Where possible, reasonable notice will be given and an alternative time will be offered, but a replacement lesson cannot always be guaranteed.',
      },
      {
        number: '2.7',
        id: policyId('2.7'),
        text: 'Students are expected to join lessons at the scheduled start time. If a student arrives late, the lesson will still usually finish at the scheduled end time and the full lesson fee remains payable. Late arrival does not entitle the student to an extended lesson, partial refund, or reduced fee. If the student is more than 15 minutes late without having contacted the tutor in advance, the lesson will be treated as a late cancellation and charged in full.',
      },
      {
        number: '2.8',
        id: policyId('2.8'),
        text: 'Regular weekly slots are intended for students attending consistently. If a regular slot is repeatedly cancelled, rearranged, or used only occasionally, future lessons will be offered on an ad hoc basis rather than continuing to hold a fixed weekly time. This applies even where notice is given in line with the cancellation policy.',
      },
      {
        number: '2.9',
        id: policyId('2.9'),
        text: 'Payment is due within 48 hours of the lesson or invoice date, unless otherwise agreed. Further lessons will not be booked or confirmed while any payment remains outstanding. This includes unpaid lesson fees, cancellation fees, or agreed additional work. If payments are repeatedly late, payment will be required in advance before any further lessons are arranged.',
      },
      {
        number: '2.10',
        id: policyId('2.10'),
        text: 'Prepaid lesson credit may be used towards future lessons, subject to the usual cancellation policy. Lessons cancelled or rearranged with less than 24 hours’ notice will be deducted from prepaid credit as though the lesson had taken place. Unused prepaid credit is refundable, less any fees already due for completed lessons, late cancellations, or agreed additional work. Prepaid credit does not guarantee a regular lesson slot indefinitely.',
      },
      {
        number: '2.11',
        id: policyId('2.11'),
        text: 'Fees already due for completed lessons, late cancellations, or agreed additional work are not refundable, including where the student does not achieve a desired grade, result, or outcome.',
      },
    ],
  },
  {
    number: '3',
    id: 'section-3',
    title: 'Preparation Work and Marking',
    policies: [
      {
        number: '3.1',
        id: policyId('3.1'),
        text: 'The lesson fee includes ordinary preparation required to deliver the lesson effectively. This may include reviewing the agreed topic, selecting suitable questions, preparing lesson structure, and making reasonable use of existing resources.',
      },
      {
        number: '3.2',
        id: policyId('3.2'),
        text: 'Additional preparation work, marking, or written feedback outside lessons is available as an optional service by agreement. This may include worksheets, written solutions, detailed marking, extended written feedback, revision plans, or application review.',
      },
      {
        number: '3.3',
        id: policyId('3.3'),
        text: 'Where additional preparation work or marking is agreed it is charged at 50% of the student’s usual hourly lesson rate. Preparation costs will never be incurred without explicit initial consent from the billpayer.',
      },
      {
        number: '3.4',
        id: policyId('3.4'),
        text: 'Work outside the lesson is not automatically included in the lesson fee. Follow-up work or resources may sometimes be provided complimentary and at the tutor’s discretion. This does not create an entitlement to regular worksheets, marking, written solutions, or feedback outside lesson time.',
      },
      {
        number: '3.5',
        id: policyId('3.5'),
        text: 'Additional work will only be undertaken where there is sufficient notice and availability. It may not always be possible to complete requested preparation or marking before the next lesson, particularly where materials are sent at short notice.',
      },
    ],
  },
  {
    number: '4',
    id: 'section-4',
    title: 'Safeguarding, Data Protection and Compliance',
    policies: [
      {
        number: '4.1',
        id: policyId('4.1'),
        text: 'Safeguarding is taken seriously in all tuition arrangements. This policy applies to all students, with particular care taken where the student is under 18 or may otherwise be vulnerable.',
      },
      {
        number: '4.2',
        id: policyId('4.2'),
        text: 'The tutor holds an Enhanced DBS certificate, is subscribed to the DBS Update Service and has completed safeguarding training.',
      },
      {
        number: '4.3',
        id: policyId('4.3'),
        text: 'Where the student is under 18, the parent or guardian will normally be treated as the main administrative contact. This includes arrangements relating to lesson scheduling, payments, cancellations, ongoing tuition arrangements, and any wider concerns about the tuition relationship.',
      },
      {
        number: '4.4',
        id: policyId('4.4'),
        text: 'Direct communication with students under 18 may take place where appropriate, particularly where the student is older and communication is necessary for practical tuition purposes. For students below sixth-form age, including most GCSE students, communication will normally take place through the parent or guardian. Direct communication with any student under 18 must remain professional, proportionate, and tuition-related.',
      },
      {
        number: '4.5',
        id: policyId('4.5'),
        text: 'Parents or guardians may be contacted or included in communication where appropriate. This may include matters relating to attendance, engagement, missed work, repeated cancellations, payment or administrative issues, safeguarding concerns, or any matter which reasonably requires parent or guardian involvement.',
      },
      {
        number: '4.6',
        id: policyId('4.6'),
        text: 'Lessons should take place in an appropriate environment and students are expected to behave respectfully during online tuition. The tutor reserves the right to end or decline lessons where the lesson environment, behaviour, or communication is inappropriate.',
      },
      {
        number: '4.7',
        id: policyId('4.7'),
        text: 'Private lessons are not routinely recorded. If recording a lesson were ever proposed, this would be discussed and agreed in advance. Online whiteboards, submitted work, uploaded files, lesson materials, and related tuition resources may be saved or retained where reasonably necessary for continuity of tuition, administration, safeguarding, or dispute resolution.',
      },
      {
        number: '4.8',
        id: policyId('4.8'),
        text: 'Personal information is handled only where reasonably necessary for arranging, delivering, administering, and evidencing tuition. This may include names, contact details, parent or guardian details, student details, lesson arrangements, correspondence, payment records, whiteboards, submitted work, and relevant academic information such as subject, qualification, exam board, target areas, or application requirements.',
      },
      {
        number: '4.9',
        id: policyId('4.9'),
        text: 'Personal information may be stored or processed using appropriate third-party services, such as email, messaging, online whiteboard, video call, calendar, payment, cloud storage, accounting, or administration services. These services are used only where reasonably necessary for the provision and administration of tuition.',
      },
      {
        number: '4.10',
        id: policyId('4.10'),
        text: 'Personal information is not sold or shared for unrelated purposes. Information may be shared where reasonably necessary for tuition administration, payment processing, accounting, safeguarding, legal compliance, professional advice, or the protection of the tutor’s legitimate interests.',
      },
      {
        number: '4.11',
        id: policyId('4.11'),
        text: 'Tuition is treated as confidential where appropriate. However, confidentiality cannot be guaranteed where there is a safeguarding concern, a risk of harm, a legal obligation, a payment or administrative issue, or another serious concern which reasonably requires information to be shared with a parent or guardian, safeguarding body, emergency service, professional adviser, or other appropriate person or authority.',
      },
      {
        number: '4.12',
        id: policyId('4.12'),
        text: 'Where a safeguarding concern arises, the tutor will not investigate the matter personally. Information may be recorded and, where appropriate, shared with a parent or guardian, school, local authority safeguarding team, police, NSPCC, emergency services, or another appropriate body.',
      },
      {
        number: '4.13',
        id: policyId('4.13'),
        text: 'The usual reasons for handling personal information are to arrange and deliver tuition, communicate about lessons, administer payments and records, support continuity of tuition, comply with legal or accounting obligations, respond to safeguarding concerns, and protect legitimate interests such as payment administration, record-keeping, and dispute resolution.',
      },
      {
        number: '4.14',
        id: policyId('4.14'),
        text: 'Reasonable steps are taken to keep personal information secure. This may include the use of password-protected accounts, reputable third-party services, appropriate device security, and limiting access to information to what is reasonably necessary.',
      },
      {
        number: '4.15',
        id: policyId('4.15'),
        text: 'Students, parents, or guardians may request access to personal information held about them, or ask for information to be corrected, deleted, restricted, or no longer used where applicable. These rights are subject to any legal, safeguarding, accounting, administrative, or dispute-resolution reasons for retaining information.',
      },
      {
        number: '4.16',
        id: policyId('4.16'),
        text: 'Where the student is under 18, requests relating to personal information will normally be handled through the parent or guardian where appropriate. The student’s age, maturity, circumstances, safeguarding considerations, and the nature of the request may be taken into account.',
      },
      {
        number: '4.17',
        id: policyId('4.17'),
        text: 'Personal data and tuition records will not be kept for longer than reasonably necessary. Some records may be retained after tuition ends where reasonably required for tuition administration, accounting, safeguarding, legal, administrative, or dispute-resolution purposes.',
      },
      {
        number: '4.18',
        id: policyId('4.18'),
        text: 'Questions, concerns, or requests relating to safeguarding, privacy, or data handling should be raised with the tutor using the usual contact details. Individuals also have the right to complain to the Information Commissioner’s Office if they are unhappy with how their personal information has been handled.',
      },
      {
        number: '4.19',
        id: policyId('4.19'),
        text: 'These policies and terms are governed by the law of England and Wales, unless otherwise required by applicable law.',
      },
      {
        number: '4.20',
        id: policyId('4.20'),
        text: 'Private tuition is provided from the United Kingdom. Where a student or client is based outside the United Kingdom, the client is responsible for ensuring that tuition is suitable for their own circumstances, including any local school, examination, regulatory, or administrative requirements.',
      },
      {
        number: '4.21',
        id: policyId('4.21'),
        text: 'Safeguarding, communication, data handling, payment, cancellation, and tuition expectations will normally be applied according to these policies, regardless of the student’s location, unless otherwise agreed in writing or required by applicable law.',
      },
    ],
  },
];
