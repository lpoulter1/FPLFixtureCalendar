
// import badges
import ARSbadge from '../badges/ARSbadge.png'
import AVLbadge from '../badges/AVLbadge.png'
import BOUbadge from '../badges/BOUbadge.png'
import BREbadge from '../badges/BREbadge.png'
import BHAbadge from '../badges/BHAbadge.png'
import CHEbadge from '../badges/CHEbadge.png'
import CRYbadge from '../badges/CRYbadge.png'
import EVEbadge from '../badges/EVEbadge.png'
import FULbadge from '../badges/FULbadge.png'
import LEIbadge from '../badges/LEIbadge.png'
import LEEbadge from '../badges/LEEbadge.png'
import LIVbadge from '../badges/LIVbadge.png'
import MCIbadge from '../badges/MCIbadge.png'
import MUNbadge from '../badges/MUNbadge.png'
import NEWbadge from '../badges/NEWbadge.png'
import NFObadge from '../badges/NFObadge.png'
import SOUbadge from '../badges/SOUbadge.png'
import TOTbadge from '../badges/TOTbadge.png'
import WHUbadge from '../badges/WHUbadge.png'
import WOLbadge from '../badges/WOLbadge.png'

// array of teams
export const teams = [
  { name: "Arsenal", initial: "ARS", badge: ARSbadge },
  { name: "Aston Villa", initial: "AVL", badge: AVLbadge },
  { name: "Bournemouth", initial: "BOU", badge: BOUbadge },
  { name: "Brentford", initial: "BRE", badge: BREbadge },
  { name: "Brighton & Hove Albion", initial: "BHA", badge: BHAbadge },
  { name: "Chelsea", initial: "CHE", badge: CHEbadge },
  { name: "Crystal Palace", initial: "CRY", badge: CRYbadge },
  { name: "Everton", initial: "EVE", badge: EVEbadge },
  { name: "Fulham", initial: "FUL", badge: FULbadge },
  { name: "Leicester City", initial: "LEI", badge: LEIbadge },
  { name: "Leeds United", initial: "LEE", badge: LEEbadge },
  { name: "Liverpool", initial: "LIV", badge: LIVbadge },
  { name: "Manchester City", initial: "MCI", badge: MCIbadge },
  { name: "Manchester United", initial: "MUN", badge: MUNbadge },
  { name: "Newcastle United", initial: "NEW", badge: NEWbadge },
  { name: "Nottingham Forest", initial: "NFO", badge: NFObadge },
  { name: "Southampton", initial: "SOU", badge: SOUbadge },
  { name: "Tottenham Hotspur", initial: "TOT", badge: TOTbadge },
  { name: "West Ham United", initial: "WHU", badge: WHUbadge },
  { name: "Wolverhampton Wanderers", initial: "WOL", badge: WOLbadge }
];

// dummy gw arrays
export const gw1 = [
  { name: "Bournemouth", initial: "BOU", badge: BOUbadge, location: '(H)' },
  { name: "Tottenham Hotspur", initial: "TOT", badge: TOTbadge, location: '(a)' },
  { name: "Nottingham Forest", initial: "NFO", badge: NFObadge, location: '(H)' },
  { name: "Manchester City", initial: "MCI", badge: MCIbadge, location: '(H)' },
  { name: "Fulham", initial: "FUL", badge: FULbadge, location: '(a)' },
  { name: "Wolverhampton Wanderers", initial: "WOL", badge: WOLbadge, location: '(a)' },
  { name: "Leeds United", initial: "LEE", badge: LEEbadge, location: '(H)' },
  { name: "West Ham United", initial: "WHU", badge: WHUbadge, location: '(a)' },
  { name: "Leicester City", initial: "LEI", badge: LEIbadge, location: '(a)' },
  { name: "Newcastle United", initial: "NEW", badge: NEWbadge, location: '(H)' },
  { name: "Chelsea", initial: "CHE", badge: CHEbadge, location: '(H)' },
  { name: "Southampton", initial: "SOU", badge: SOUbadge, location: '(a)' },
  { name: "Liverpool", initial: "LIV", badge: LIVbadge, location: '(H)' },
  { name: "Brighton & Hove Albion", initial: "BHA", badge: BHAbadge, location: '(H)' },
  { name: "Crystal Palace", initial: "CRY", badge: CRYbadge, location: '(a)' },
  { name: "Aston Villa", initial: "AVL", badge: AVLbadge, location: '(a)' },
  { name: "Manchester United", initial: "MUN", badge: MUNbadge, location: '(H)' },
  { name: "Arsenal", initial: "ARS", badge: ARSbadge, location: '(H)' },
  { name: "Everton", initial: "EVE", badge: EVEbadge, location: '(a)' },
  { name: "Brentford", initial: "BRE", badge: BREbadge, location: '(a)' }
];

export const gw2 = [
    { name: 'Tottenham Hotspur', initial: 'TOT', badge: TOTbadge, location: '(H)' },
    { name: 'Leicester City', initial: 'LEI', badge: LEIbadge, location: '(a)' },
    { name: 'Brentford', initial: 'BRE', badge: BREbadge, location: '(a)' },
    { name: 'Aston Villa', initial: 'AVL', badge: AVLbadge, location: '(H)' },
    { name: 'Southampton', initial: 'SOU', badge: SOUbadge, location: '(a)' },
    { name: 'Bournemouth', initial: 'BOU', badge: BOUbadge, location: '(H)' },
    { name: 'Liverpool', initial: 'LIV', badge: LIVbadge, location: '(H)' },
    { name: 'Brighton & Hove Albion', initial: 'BHA', badge: BHAbadge, location: '(H)' },
    { name: 'West Ham United', initial: 'WHU', badge: WHUbadge, location: '(a)' },
    { name: 'Everton', initial: 'EVE', badge: EVEbadge, location: '(a)' },
    { name: 'Fulham', initial: 'FUL', badge: FULbadge, location: '(a)' },
    { name: 'Crystal Palace', initial: 'CRY', badge: CRYbadge, location: '(a)' },
    { name: 'Nottingham Forest', initial: 'NFO', badge: NFObadge, location: '(H)' },
    { name: 'Chelsea', initial: 'CHE', badge: CHEbadge, location: '(H)' },
    { name: 'Manchester City', initial: 'MCI', badge: MCIbadge, location: '(H)' },
    { name: 'Newcastle United', initial: 'NEW', badge: NEWbadge, location: '(H)' },
    { name: 'Leeds United', initial: 'LEE', badge: LEEbadge, location: '(H)' },
    { name: 'Wolverhampton Wanderers', initial: 'WOL', badge: WOLbadge, location: '(a)' },
    { name: 'Manchester United', initial: 'MUN', badge: MUNbadge, location: '(H)' },
    { name: 'Arsenal', initial: 'ARS', badge: ARSbadge, location: '(H)' }
];

export const gw3 = [
    { name: 'Manchester United', initial: 'MUN', badge: MUNbadge, location: '(H)' },
    { name: 'Manchester City', initial: 'MCI', badge: MCIbadge, location: '(H)' },
    { name: 'Liverpool', initial: 'LIV', badge: LIVbadge, location: '(H)' },
    { name: 'Chelsea', initial: 'CHE', badge: CHEbadge, location: '(H)' },
    { name: 'Arsenal', initial: 'ARS', badge: ARSbadge, location: '(H)' },
    { name: 'Tottenham Hotspur', initial: 'TOT', badge: TOTbadge, location: '(a)' },
    { name: 'Leicester City', initial: 'LEI', badge: LEIbadge, location: '(a)' },
    { name: 'West Ham United', initial: 'WHU', badge: WHUbadge, location: '(a)' },
    { name: 'Everton', initial: 'EVE', badge: EVEbadge, location: '(a)' },
    { name: 'Leeds United', initial: 'LEE', badge: LEEbadge, location: '(H)' },
    { name: 'Aston Villa', initial: 'AVL', badge: AVLbadge, location: '(a)' },
    { name: 'Wolverhampton Wanderers', initial: 'WOL', badge: WOLbadge, location: '(a)' },
    { name: 'Newcastle United', initial: 'NEW', badge: NEWbadge, location: '(H)' },
    { name: 'Crystal Palace', initial: 'CRY', badge: CRYbadge, location: '(a)' },
    { name: 'Southampton', initial: 'SOU', badge: SOUbadge, location: '(a)' },
    { name: 'Brighton & Hove Albion', initial: 'BHA', badge: BHAbadge, location: '(H)' },
    { name: 'Fulham', initial: 'FUL', badge: FULbadge, location: '(a)' },
    { name: 'Brentford', initial: 'BRE', badge: BREbadge, location: '(a)' },
    { name: 'Bournemouth', initial: 'BOU', badge: BOUbadge, location: '(H)' },
    { name: 'Nottingham Forest', initial: 'NFO', badge: NFObadge, location: '(H)' }
];