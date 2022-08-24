# Launchcode Challenge

- [Challenge](#challenge)
- [Tools Used](#tools-used)
- [Installation](#installation)
- [Notes](#notes)

## Challenge

Launchcode is excited to create the first working prototype for Wet Bat. You've been asked to make a proof of concept to demonstrate a tangible product. This will involve building the minimal quoting functionality as shown in the included design document. As part of the minimal viable product (MVP), this prototype will require a database and frontend application. Additional layers or services can be added as necessary.

At a minimum, we would like to be able to view a list of quotes and view a detail screen for each quote. A quote should include at least the following information:

- Departure & destination location (ideally airports)
- Departure & return date
- Number of travellers
- Transportation during travels (rental car, etc)
- Contact information

## Tools Used

- NextJS
- PrismaORM (with SQLite)
- Axios
- React Icons

## Installation

0. Install it by running `yarn` in the project's root directory
1. Start DB (and seed) with `yarn db:dev`
2. Run the project with `yarn start` or `yarn dev`
3. Build the project with `yarn build`

## Notes

Since it was an MVP concept, I have focused on tools and implementations to quickly bring functionatilies that could be showcased to the client. Further development needs to be made, to ensure security, reliability and so on.
