export enum Subject {
  CSE = 'CSE',
  IT = 'IT',
  EE = 'EE',
  EIE = 'EIE',
  MECH = 'MECH',
  CIVIL = 'CIVIL',
  BIO = 'BIO',
  FAT = 'FAT',
  TE = 'TE',
  BPLAN = 'B.PLAN',
}

const subjects = [
  { id: 1, title: Subject.CSE, href: '/learn/cse' },
  { id: 2, title: Subject.IT, href: '/learn/it' },
  { id: 3, title: Subject.EE, href: '/learn/ee' },
  { id: 4, title: Subject.EIE, href: '/learn/eie' },
  { id: 5, title: Subject.MECH, href: '/learn/mech' },
  { id: 6, title: Subject.CIVIL, href: '/learn/civil' },
  { id: 7, title: Subject.BIO, href: '/learn/bio' },
  { id: 8, title: Subject.FAT, href: '/learn/fat' },
  { id: 9, title: Subject.TE, href: '/learn/te' },
  { id: 10, title: Subject.BPLAN, href: '/learn/bplan' },
];

export default subjects;
