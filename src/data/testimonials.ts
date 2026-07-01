/**
 * Testimonials data for the Testimonials page
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
    title: 'TMUA',
    board: 'UAT Entrance Exam',
    testimonial: `When I first started practicing for my TMUA exam it was intimidating, the idea of being thrown into an unfamiliar style of exam. I faced many difficulties in digesting questions and approaching them in an efficient manner. However, once I began my lessons with Daniel he was able to break down questions, thoroughly explaining steps and introducing me to new methods or perspectives to view problems. He was a massive help and definitely boosted my confidence and performance. In addition to this, Daniel was kind and hospitable and I found our sessions both enjoyable and productive. I would really recommend his services to anyone else preparing for any similar exam.`,
    name: 'Noyen',
    job: 'February 2026',
  },
  {
    title: 'TMUA',
    board: 'UAT Entrance Exam',
    testimonial: `Thank you Daniel for your tutoring! Daniel helped me prepare for the TMUA exam over the course of the summer, teaching me to manage time pressure in an exam setting and completely removing my worries about running out of time. His approach to explaining questions helped me learned new methods of solving problems that ended up helping me a great amount in the exam. Thanks to his help, I ended up getting a score of 8.3/9.0 and got an interview at the University of Cambridge. I highly recommend his services to any students who feel like they are stuck with exam preparation.`,
    name: 'Adrian',
    job: 'November 2025',
  },
  {
    title: 'Engineering Mathematics 2 (SCQF Level 7)',
    board: 'SQA Higher National (HNC/HND Electrical Engineering route)',
    testimonial: `After failing my maths test twice, I started tutoring sessions with Daniel. Together, we completed all the practice and mock exams provided by my college, and after I ran out of papers, Daniel created custom-made mock exams with detailed workings and answers that targeted the areas where I lacked knowledge the most. He always replied quickly outside of regular teaching hours whenever I got stuck or needed answers to a question. 
    
    His positive attitude and constant encouragement gave me the confidence to ask many questions about topics I didn’t fully understand. Thanks to his flexible schedule and enjoyable way of teaching, he gave me the confidence I needed to keep trying. With his constant support right up until the last few hours before my exam, I finally passed my maths test and can now move on to the next step in completing my HND.`,
    name: 'Jay',
    job: 'November 2025',
  },
  {
    title: 'A-Level Maths & Physics',
    board: 'Edexcel Maths / AQA Physics',
    testimonial: `Our son found himself in a position at senior school where he wanted — and needed — A level Maths in order to study Physics at university. The school would not allow him to switch subjects, so he decided to take the A level as a private candidate. We felt he would benefit from some additional tuition, and after meeting Daniel online, we engaged him as a private tutor.

Daniel has been a fantastic tutor — always going the extra mile for our son. He even offered support with Physics from time to time and provided invaluable guidance on how to navigate the exam system as a private candidate.

Our son went on to achieve a Grade A in his Maths A level, which has enabled him to fulfil his dream of studying Physics at university. We would wholeheartedly recommend Daniel as a tutor to anyone.`,
    name: 'Pete',
    job: 'October 2025',
  },
  {
    title: 'MSc Data Science & Machine Learning for Geo-Energy',
    board: 'Imperial College London',
    testimonial: `Daniel improved my confidence surrounding the maths content on my course almost immediately. He systematically identified and filled the many gaps in my knowledge with carefully thought-out, tailored lesson plans. While he guided the learning, he always gave me the freedom to choose the direction, regularly checking in on how I felt I was progressing and revisiting areas I found more difficult until they were firmly understood.

His teaching style is not only clear and highly effective but also grounded in the underlying theories and concepts. This meant I never left a session simply knowing how to get an answer — I also understood the crucial 'why' behind solutions we found together.

This approach suited my learning style perfectly. With Daniel's support, I made rapid progress through advanced topics that had previously felt daunting and, at times, unapproachable. My questions were always met with well-considered answers and I was never made to feel a question I had asked was wrong or silly. I can confidently say that Daniel belongs to that rare group of teachers you remember long after their lessons end. His ability to explain complex ideas concisely and accessibly is exceptional, and our sessions have made a truly lasting difference to my education.`,
    name: 'Alex',
    job: 'October 2025',
  },
];
