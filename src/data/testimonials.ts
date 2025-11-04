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
    title: 'MSc Data Science & Machine Learning for Geo-Energy',
    board: 'Imperial College London',
    testimonial: `Daniel improved my confidence surrounding the maths content on my course almost immediately. He systematically identified and filled the many gaps in my knowledge with carefully thought-out, tailored lesson plans. While he guided the learning, he always gave me the freedom to choose the direction, regularly checking in on how I felt I was progressing and revisiting areas I found more difficult until they were firmly understood.

His teaching style is not only clear and highly effective but also grounded in the underlying theories and concepts. This meant I never left a session simply knowing how to get an answer — I also understood the crucial ‘why’ behind solutions we found together.

This approach suited my learning style perfectly. With Daniel’s support, I made rapid progress through advanced topics that had previously felt daunting and, at times, unapproachable. My questions were always met with well-considered answers and I was never made to feel a question I had asked was wrong or silly. I can confidently say that Daniel belongs to that rare group of teachers you remember long after their lessons end. His ability to explain complex ideas concisely and accessibly is exceptional, and our sessions have made a truly lasting difference to my education.`,
    name: 'Alex S.',
    job: 'October 2025',
  },
  {
    title: 'BTEC Engineering',
    board: 'Edexcel',
    testimonial: `
    Daniel is an exceptional tutor. His knowledge and expertise in math is outstanding. 

    His skills to engage with my son was sensitive, thoughtful and enabled him to understand and problem solve complex mathematical problems. 

    Through Daniel's tutoring my son's grades significantly improved and he has achieved amazing grades and will be going on to study engineering at University!`,
    name: 'Sunita K.',
    job: 'August 2025',
  },
  {
    title: 'GCSE & A-Level Maths',
    board: 'AQA',
    testimonial: `Thank you Daniel, for your time spent with both my daughters on their GCSE and A Level’s- they have increased in interest, confidence and ability in maths and have secured their required grades, boosting beyond their predicted grades!! 
    
    They have really enjoyed your teaching style, flexibility and ability to build a rapport. 
    
    I will continue to recommend you and have already made two successful introductions- who are really happy with the progress their children are now making- a testament to you`,
    name: 'Nikki E. ',
    job: 'October 2025',
  },
  {
    title: 'GCSE Maths, Further Maths & Statistics',
    board: 'AQA',
    testimonial: `I personally think Daniel is a great tutor. Unlike what I expected, he isn't dead serious all the time.
    
    When I hear 'maths tutor', I think of some no nonsense, strict teacher. But Daniel isn't that, he can actually have a sense of humour and he doesn't come off as a strict teacher. His way of teaching has accelerated my grades, I used to be getting things like 60% on my Mathematics tests, but after tutoring, I am getting mostly 80%~100%! If i don't understand something, he isn't afraid to explain it to me. He is a fantastic tutor, and is willing to cover anything I want to learn or strengthen.
    
    With him, I managed to pass my Statistics GCSE (with a grade 5), which is a subject I am not very confident in.`,
    name: 'Lleyton P.',
    job: 'October 2025',
  },
  {
    title: 'A-Level Maths & Physics',
    board: 'Edexcel',
    testimonial: ` Hey Daniel,

My exams went quite well. I ended up getting an a* in maths and an a in physics which secured my place at [UNI]. I think majority of my marks were lost in p3 for both subjects. Thank you for all the help you have given me, will definitely be recommending friends who are doing a levels to you. Good luck in the future.

best regards,
Aidan `,
    name: 'Aidan L.',
    job: 'August 2025',
  },
  {
    title: 'A-Level Maths',
    board: 'Edexcel',
    testimonial: `Hi Daniel, 

Just to let you know I got an A for maths! Super happy and thank you so much for all your help it was so useful especially your marking of papers saved so much time and meant I got great feedback quickly. So thank you again and hope you have a great rest of the summer, 

Gina `,
    name: 'Gina C.',
    job: 'August 2025',
  },
];
