/**
 * Testimonials data for the Testimonials page
 */

export interface Testimonial {
  title: string;
  testimonial: string;
  name: string;
  job: string; // Used for date/context
  board?: string; // Exam board or institution
  category: 'Admissions' | 'A-level' | 'University' | 'GCSE & other';
}

export const testimonials: Testimonial[] = [
  {
    title: 'GCSE Mathematics (Foundation)',
    board: 'AQA',
    category: 'GCSE & other',
    testimonial: `We can't recommend Daniel highly enough. My son is dyslexic and has always found academic work a struggle. We found a tutor who is patient, understanding and endlessly encouraging — someone who took the time to understand how my son learns best, rather than expecting him to fit a standard approach.

Daniel built my son's confidence session by session. Over 18 months, we saw a genuine transformation — not just in his maths ability, but in how he saw himself as a learner.

Honestly, I don't believe my son would have passed his maths exam without Daniel's support. If you're looking for a tutor who combines expertise with genuine care, especially for a child who learns differently, Daniel is exceptional.`,
    name: 'Ali',
    job: 'August 2026',
  },
  {
    title: 'A-level Further Mathematics',
    board: 'OCR B (MEI)',
    category: 'A-level',
    testimonial: `Daniel was amazing! There wasn’t a single question that he couldn’t answer whether it was about exams, entrance exams, how to optimise the use of a calculator, exam board specifications. He always showed me multiple ways of approaching problems — ways I was never even taught at school — which gave me a lot more confidence going into all of my exams. He’s very organised and designs his own questions tailored to each exam board so you can approach ones you’ve never seen before which is really helpful when you run out of past papers. I couldn’t recommend him more for anyone taking Further Maths at A-Level in any exam board.`,
    name: 'D.',
    job: 'August 2026',
  },
  {
    title: 'A-level Mathematics',
    board: 'Pearson Edexcel',
    category: 'A-level',
    testimonial: `Daniel got me from an E to a B in one year. He created many worksheets and helped me with anything I needed help with from past paper questions to content. He was incredibly helpful and was always patient and guided me through all working. I could not recommend a better tutor!`,
    name: 'Sophie',
    job: 'August 2026',
  },
  {
    title: 'BEng Engineering',
    board: 'The Open University',
    category: 'University',
    testimonial: `Daniel helped me with my first year modules for university level Engineering. I found lessons to be beneficial, enjoyable and confidence building. As someone who has low confidence in exams, I ended up exceeding my expectations with what grade I was able to achieve. I would recommend Daniel any day of the week and will be returning to him for my second year of university.`,
    name: 'Emily',
    job: 'July 2026',
  },
  {
    title: 'TMUA',
    board: 'UAT Entrance Exam',
    category: 'Admissions',
    testimonial: `When I first started practicing for my TMUA exam it was intimidating, the idea of being thrown into an unfamiliar style of exam. I faced many difficulties in digesting questions and approaching them in an efficient manner. However, once I began my lessons with Daniel he was able to break down questions, thoroughly explaining steps and introducing me to new methods or perspectives to view problems. He was a massive help and definitely boosted my confidence and performance. In addition to this, Daniel was kind and hospitable and I found our sessions both enjoyable and productive. I would really recommend his services to anyone else preparing for any similar exam.`,
    name: 'Noyen',
    job: 'February 2026',
  },
  {
    title: 'TMUA',
    board: 'UAT Entrance Exam',
    category: 'Admissions',
    testimonial: `Thank you Daniel for your tutoring! Daniel helped me prepare for the TMUA exam over the course of the summer, teaching me to manage time pressure in an exam setting and completely removing my worries about running out of time. His approach to explaining questions helped me learned new methods of solving problems that ended up helping me a great amount in the exam. Thanks to his help, I ended up getting a score of 8.3/9.0 and got an interview at the University of Cambridge. I highly recommend his services to any students who feel like they are stuck with exam preparation.`,
    name: 'Adrian',
    job: 'November 2025',
  },
  {
    title: 'HND Electrical Engineering',
    category: 'GCSE & other',
    testimonial: `After failing my maths test twice, I started tutoring sessions with Daniel. Together, we completed all the practice and mock exams provided by my college, and after I ran out of papers, Daniel created custom-made mock exams with detailed workings and answers that targeted the areas where I lacked knowledge the most. He always replied quickly outside of regular teaching hours whenever I got stuck or needed answers to a question. 
    
    His positive attitude and constant encouragement gave me the confidence to ask many questions about topics I didn’t fully understand. Thanks to his flexible schedule and enjoyable way of teaching, he gave me the confidence I needed to keep trying. With his constant support right up until the last few hours before my exam, I finally passed my maths test and can now move on to the next step in completing my HND.`,
    name: 'Jay',
    job: 'November 2025',
  },
  {
    title: 'A-level Mathematics & Physics',
    board: 'Pearson Edexcel (Mathematics) / AQA (Physics)',
    category: 'A-level',
    testimonial: `Our son found himself in a position at senior school where he wanted — and needed — A level Maths in order to study Physics at university. The school would not allow him to switch subjects, so he decided to take the A level as a private candidate. We felt he would benefit from some additional tuition, and after meeting Daniel online, we engaged him as a private tutor.

Daniel has been a fantastic tutor — always going the extra mile for our son. He even offered support with Physics from time to time and provided invaluable guidance on how to navigate the exam system as a private candidate.

Our son went on to achieve a Grade A in his Maths A level, which has enabled him to fulfil his dream of studying Physics at university. We would wholeheartedly recommend Daniel as a tutor to anyone.`,
    name: 'Pete',
    job: 'October 2025',
  },
  {
    title: 'Postgraduate Mathematics Modules',
    board: 'Imperial College London',
    category: 'University',
    testimonial: `Daniel improved my confidence surrounding the maths content on my course almost immediately. He systematically identified and filled the many gaps in my knowledge with carefully thought-out, tailored lesson plans. While he guided the learning, he always gave me the freedom to choose the direction, regularly checking in on how I felt I was progressing and revisiting areas I found more difficult until they were firmly understood.

His teaching style is not only clear and highly effective but also grounded in the underlying theories and concepts. This meant I never left a session simply knowing how to get an answer — I also understood the crucial 'why' behind solutions we found together.

This approach suited my learning style perfectly. With Daniel's support, I made rapid progress through advanced topics that had previously felt daunting and, at times, unapproachable. My questions were always met with well-considered answers and I was never made to feel a question I had asked was wrong or silly. I can confidently say that Daniel belongs to that rare group of teachers you remember long after their lessons end. His ability to explain complex ideas concisely and accessibly is exceptional, and our sessions have made a truly lasting difference to my education.`,
    name: 'Alex',
    job: 'October 2025',
  },
];
