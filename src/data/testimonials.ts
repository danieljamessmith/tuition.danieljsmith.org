/**
 * Testimonials data for the About page
 */

export interface Testimonial {
  title: string;
  testimonial: string;
  name: string;
  job: string; // Used for date/context
  board?: string; // Exam board or institution
}

export const testimonials: Testimonial[] = [
  {
    title: 'A-Level Maths & Physics',
    board: 'Edexcel Maths / AQA Physics',
    testimonial: `Our son found himself in a position at senior school where he wanted — and needed — A level Maths in order to study Physics at university.

The school would not allow him to switch subjects, so he decided to take the A level as a private candidate. We felt he would benefit from some additional tuition, and after meeting Daniel online, we engaged him as a private tutor.

Daniel has been a fantastic tutor — always going the extra mile for our son. He even offered support with Physics from time to time and provided invaluable guidance on how to navigate the exam system as a private candidate.

Our son went on to achieve a Grade A in his Maths A level, which has enabled him to fulfil his dream of studying Physics at university.

We would wholeheartedly recommend Daniel as a tutor to anyone.`,
    name: 'Pete W.',
    job: 'October 2025',
  },
  {
    title: 'MSc Data Science and Machine Learning for Geo-Energy',
    board: 'Imperial College London',
    testimonial: `Daniel improved my confidence surrounding the maths content on my course almost immediately. He systematically identified and filled the many gaps in my knowledge with carefully thought-out, tailored lesson plans. While he guided the learning, he always gave me the freedom to choose the direction, regularly checking in on how I felt I was progressing and revisiting areas I found more difficult until they were firmly understood.

His teaching style is not only clear and highly effective but also grounded in the underlying theories and concepts. This meant I never left a session simply knowing how to get an answer — I also understood the crucial ‘why’ behind solutions we found together.

This approach suited my learning style perfectly. With Daniel’s support, I made rapid progress through advanced topics that had previously felt daunting and, at times, unapproachable. My questions were always met with well-considered answers and I was never made to feel a question I had asked was wrong or silly. I can confidently say that Daniel belongs to that rare group of teachers you remember long after their lessons end. His ability to explain complex ideas concisely and accessibly is exceptional, and our sessions have made a truly lasting difference to my education.`,
    name: 'Alex S.',
    job: 'October 2025',
  },
  {
    title: 'GCSE Physics',
    board: 'AQA',
    testimonial: `I struggled with physics for years until I started sessions with Daniel. He has a unique way of explaining difficult topics that makes everything so much easier to understand. Highly recommended!`,
    name: 'James M.',
    job: 'September 2024',
  },
  {
    title: 'A-Level Further Mathematics',
    board: 'OCR',
    testimonial: `The one-on-one attention and tailored lesson plans were exactly what I needed. Daniel identified my weak areas and helped me strengthen them systematically. I achieved the grades I needed for university.`,
    name: 'Emily C.',
    job: 'August 2024',
  },
  {
    title: 'GCSE Mathematics',
    board: 'Edexcel',
    testimonial: `Daniel is an excellent tutor who really cares about his students' progress. His interactive teaching style kept me engaged, and I saw real improvements in my understanding and confidence.`,
    name: 'Oliver D.',
    job: 'July 2024',
  },
  {
    title: 'A-Level Physics',
    board: 'AQA',
    testimonial: `The flexible scheduling and personalized approach made a huge difference for me. Daniel adapted his teaching to my learning style, and I felt fully prepared for my exams. Couldn't have done it without him.`,
    name: 'Sophie A.',
    job: 'June 2024',
  },
  {
    title: 'GCSE Mathematics & Physics',
    board: 'OCR',
    testimonial: `Having struggled with both subjects, I was worried about my GCSEs. Daniel's clear explanations and practical examples helped me grasp difficult concepts. I achieved grades well above my target!`,
    name: 'Thomas W.',
    job: 'May 2024',
  },
];

