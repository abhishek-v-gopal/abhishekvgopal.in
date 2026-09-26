// Replace each quote/name/role with a real testimonial once you have one.
// Keeping the shape stable means the section below never needs to change.
export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Its a great pleasure to work with you guys and have a great time with your service and community throughout the journey of my online business,with your support and dedication towards the project and timing of the completion Thank you so much to the whole team",
    name: "Anandh",
    role: "Founder, Alleppeytours",
  },
  {
    id: 2,
    quote:
      "We, the Association for the Intellectually Challenged ( AID ) Kerala work  in connection with the All kerala special school kalolsavam ie, Chilamboli 2026. The teams work is well appreciated... and the team members were working with friedl approach...and we got correct result in each competition...",
    name: "Sr. Flower Jose",
    role: "Vice Chairperson AID",
  },
  {
    id: 3,
    quote:
      "I've often seen people who believes that the toughest way to do something is usually the best way. Abhishek is one among them. Whatever he do, he'll put his mind and body into it.I'll surely recommend him for any sort of technical, mentoring and management activities.",
    name: "Nikhil T Das",
    role: "Senior mentor, STEM Educator, and Entrepreneur",
  },
];