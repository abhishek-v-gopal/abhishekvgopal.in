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
      "Add a short quote from your NavPath Academy contact here — what problem you solved for them and how it went.",
    name: "Client name",
    role: "NavPath Academy",
  },
  {
    id: 2,
    quote:
      "Add a quote from K&B Kottarathil Builders here — specific is better than generic praise.",
    name: "Client name",
    role: "K&B Kottarathil Builders",
  },
  {
    id: 3,
    quote:
      "Add a quote from a Devmorphix workshop host or college coordinator here.",
    name: "Contact name",
    role: "Devmorphix workshop host",
  },
];