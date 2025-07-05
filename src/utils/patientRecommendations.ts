type Recommendation = {
    product: string;
    code: string;
}

export type RecommendationSet = {
    priority1: Recommendation;
    priority2: Recommendation;
    priority3: Recommendation;
}

type CombinationKey = string;

export const recommendations: Record<CombinationKey, RecommendationSet> = {
  // ===== EMBRASURE CLASS 1 =====
  'E1:Mot': {
    priority1: { product: 'String Floss', code: '1815' },
    priority2: { product: 'Flossers: Pro Clean®', code: '891' },
    priority3: { product: 'Soft-Picks®', code: '650' }
  },
  'E1:Mot:Perio': {
    priority1: { product: 'String Floss', code: '2030' },
    priority2: { product: 'Proxabrush®', code: '1314' },
    priority3: { product: 'Sulcus Brush', code: '642' }
  },
  'E1:Mot:Impt': {
    // actual priority1 code is 2014 - same as 2010 but mint flavour
    priority1: { product: 'String Floss', code: '2010' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Proxabrush®', code: '1314' }
  },
  'E1:Mot:Ortho': {
    priority1: { product: 'Floss+Threader', code: '1815 + 840' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Proxabrush®', code: '1614' }
  },
  'E1:UnMot': {
    priority1: { product: 'Flossers', code: '891' },
    priority2: { product: 'Soft-Picks®', code: '670' },
    priority3: { product: 'Proxabrush®', code: '1314' }
  },
  'E1:UnMot:Perio': {
    priority1: { product: 'Proxabrush®', code: '1314' },
    priority2: { product: 'Sulcus Brush', code: '642' },
    priority3: { product: '', code: '' } 
  },
  'E1:UnMot:Impt': {
    priority1: { product: 'Soft-Picks®', code: '670' },
    priority2: { product: 'Proxabrush®', code: '1314' },
    priority3: { product: '', code: '' }
  },
  'E1:UnMot:Ortho': {
    priority1: { product: 'Soft-Picks®', code: '670' },
    priority2: { product: 'Proxabrush®', code: '1614' },
    priority3: { product: 'Easy Thread', code: '3210' }
  },

  // ===== EMBRASURE CLASS 2 =====
  'E2:Mot': {
    priority1: { product: 'String Floss', code: '2008' },
    priority2: { product: 'Flossers', code: '828' },
    priority3: { product: 'Soft-Picks®', code: '650' }
  },
  'E2:Mot:Perio': {
    priority1: { product: 'Proxabrush®', code: '1414' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Flossers', code: '831' }
  },
  'E2:Mot:Impt': {
    priority1: { product: 'String Floss', code: '2010' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Proxabrush®', code: '1414' }
  },
  'E2:Mot:Ortho': {
    priority1: { product: 'Floss+Threader', code: '1815 + 840' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Proxabrush®', code: '1614' }
  },
  'E2:UnMot': {
    priority1: { product: 'Soft-Picks®', code: '670' },
    priority2: { product: 'Flossers', code: '828' },
    priority3: { product: 'Proxabrush®', code: '1414' }
  },
  'E2:UnMot:Perio': {
    priority1: { product: 'Proxabrush®', code: '1414' },
    priority2: { product: 'Soft-Picks®', code: '670' },
    priority3: { product: 'Flossers', code: '828' }
  },
  'E2:UnMot:Impt': {
    priority1: { product: 'Soft-Picks®', code: '670' },
    priority2: { product: 'Proxabrush®', code: '1414' },
    priority3: { product: 'Flossers', code: '887' }
  },
  'E2:UnMot:Ortho': {
    priority1: { product: 'Soft-Picks®', code: '670' },
    priority2: { product: 'Proxabrush®', code: '1614' },
    priority3: { product: 'Easy Thread', code: '3210' }
  },

  // ===== EMBRASURE CLASS 3 =====
  'E3:Mot': {
    priority1: { product: 'Proxabrush®', code: '1614' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Sulcus Brush', code: '642' }
  },
  'E3:Mot:Perio': {
    priority1: { product: 'Proxabrush®', code: '1614' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Sulcus Brush', code: '642' }
  },
  'E3:Mot:Impt': {
    priority1: { product: 'Proxabrush®', code: '1614' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Sulcus Brush', code: '642' }
  },
  'E3:Mot:Ortho': {
    priority1: { product: 'Floss+Threader', code: '1815 + 840' },
    priority2: { product: 'Soft-Picks®', code: '650' },
    priority3: { product: 'Proxabrush®', code: '1614' }
  },
  'E3:UnMot': {
    priority1: { product: 'Soft-Picks®', code: '670' },
    priority2: { product: 'Proxabrush®', code: '1414' },
    priority3: { product: 'Proxabrush® Handle', code: '611' }
  },
  'E3:UnMot:Perio': {
    priority1: { product: 'Proxabrush®', code: '1614' },
    priority2: { product: 'Soft-Picks®', code: '670' },
    priority3: { product: 'Proxabrush® Handle', code: '611' }
  },
  'E3:UnMot:Impt': {
    priority1: { product: 'Soft-Picks®', code: '670' },
    priority2: { product: 'Proxabrush®', code: '1614' },
    priority3: { product: 'Proxabrush® Handle', code: '611' }
  },
  'E3:UnMot:Ortho': {
    priority1: { product: 'Soft-Picks®', code: '670' },
    priority2: { product: 'Proxabrush®', code: '1614' },
    priority3: { product: 'Easy Thread', code: '3210' }
  }
};
