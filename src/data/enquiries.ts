import type { Enquiry } from '~/types';

const PLEASE_SELECT = { value: '', label: 'Please select...' };

/**
 * The kinds of enquiry the contact form takes, in the order the picker shows
 * them. The first is the form's default.
 *
 * A link can open the form on one of them, with its topic chosen:
 * `/contact/?enquiry=<id>&topic=<value>`, where the value is an option of the
 * enquiry's `topicField`. An id or value the form doesn't know is ignored, so
 * a link never breaks the form.
 */
export const enquiries: Enquiry[] = [
  {
    id: 'tuition',
    label: 'Tuition',
    subtitle: 'Share the subject, level and goals you would like support with.',
    subject: 'Tuition enquiry',
    topicField: 'tuition_subject',
    selects: [
      {
        name: 'tuition_subject',
        label: 'Subject',
        options: [
          PLEASE_SELECT,
          { value: 'further-mathematics', label: 'Further Mathematics' },
          { value: 'mathematics', label: 'Mathematics' },
          { value: 'physics', label: 'Physics' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        name: 'level',
        label: 'Level',
        options: [
          PLEASE_SELECT,
          { value: 'a-level', label: 'A-Level' },
          { value: 'university-admissions', label: 'University Admissions' },
          { value: 'undergraduate', label: 'Undergraduate' },
          { value: 'graduate', label: 'Graduate' },
          { value: 'gcse', label: 'GCSE' },
          { value: 'other', label: 'Other' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    subtitle: 'Say which resources you would like, who they are for and when you need them.',
    subject: 'Resources enquiry',
    topicField: 'resource_topic',
    selects: [
      {
        name: 'resource_topic',
        label: 'Resources for',
        options: [
          PLEASE_SELECT,
          { value: 'tmua', label: 'TMUA' },
          { value: 'esat', label: 'ESAT' },
          { value: 'further-maths', label: 'A-Level Further Mathematics' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        name: 'resource_for',
        label: 'Who are they for?',
        options: [
          PLEASE_SELECT,
          { value: 'individual', label: 'An individual student' },
          { value: 'school', label: 'A school or college' },
          { value: 'organisation', label: 'A tutoring company or other organisation' },
        ],
      },
    ],
    messagePlaceholder: 'For example: the topics, the number of questions or papers, and the level of difficulty.',
  },
  {
    id: 'other',
    label: 'Something else',
    subtitle: 'Send a message about anything else.',
    subject: 'General enquiry',
  },
];
