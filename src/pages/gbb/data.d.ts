export interface GbbItemParams {
  stalzRe?: string;
  gbb?: string;
  wc?: string;
  wcContent?: string;
  activeProject?: string;
  bitProject?: string;
  draftProject?: string;
  completeProject?: string;
}

export const gbb = 'GBB';
export const wc = 'WC';
export const wcContent = ['Status', 'Delayed', 'DIY'];
export const stalzRe = 'stalzRE';
export const activeProject = '3 Active Projects';
export const bitProject = '1 Projects out for bid';
export const draftProject = '1 Projects draft';
export const completeProject = '5 Completed Projects ';
