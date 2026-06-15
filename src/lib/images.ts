/**
 * Shared stock image library for the public site. Real Vijana field photos can
 * be dropped in later by swapping the IDs (or replacing `uns` with local paths).
 * All IDs verified against images.unsplash.com.
 */
const BASE = 'https://images.unsplash.com/photo-';

export function uns(id: string, w = 1200, q = 80): string {
  return `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const IMG = {
  portrait: '1531123897727-8f129e1688ce', // young woman in Kenyan print (hero — kept)
  duoTech: '1531482615713-2afd69097998', // two young people at a computer
  sewing: '1558769132-cb1aea458c5e', // tailoring / sewing machine
  salon: '1560066984-138dadb4c035', // salon / beauty therapy
  engine: '1486754735734-325b5831c3ad', // engine maintenance
  coding: '1498050108023-c5249f4df085', // writing code on a laptop
  seedling: '1542601906990-b4d3fb778b09', // hands cupping a seedling (growth)
  handsClasp: '1600880292203-757bb62b4baf', // two hands clasped (mentorship)
  womanPro: '1573497019940-1c28c88b4f3e', // professional woman portrait
  manPro: '1607990281513-2c110a25bd8c', // man portrait
  groupLaptop: '1531545514256-b1400bc00f31', // group around a laptop (workshop)
  womanLaptop: '1573496359142-b8d87734a5a2', // woman with laptop
  instr1: '1494790108377-be9c29b29330', // portrait
  instr2: '1438761681033-6461ffad8d80', // portrait
  instr3: '1500648767791-00dcc994a43e', // portrait
  instr4: '1472099645785-5658abf4ff4e', // portrait
  collab: '1522202176988-66273c2fd55f', // young people collaborating, laptops
  handshake: '1521791136064-7986c2920216', // handshake (partnership)
  meeting: '1517245386807-bb43f82c33c4', // planning at a table
  handsStack: '1582213782179-e0d53f98f2ca', // many hands stacked (community)
} as const;
