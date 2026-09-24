// S&G Garden Rooms - Centralized Project Gallery Data
// The owner can easily swap or update project images, titles, and specifications here.

import officeImg from '../assets/images/gallery_office_bifold_1790237836370.jpg';
import barImg from '../assets/images/gallery_mancave_bar_1790237848582.jpg';
import sunroomImg from '../assets/images/gallery_sunroom_living_1790237859700.jpg';
import workshopImg from '../assets/images/gallery_workshop_shed_1790237872607.jpg';
import cabinImg from '../assets/images/gallery_expandable_cabin_1790237885034.jpg';
import loungeImg from '../assets/images/gallery_lounge_interior_1790237896747.jpg';

export const galleryItems = [
  {
    id: 'office-bifold',
    title: 'Modern Clad Garden Office',
    subtitle: 'Bi-fold glass doors, full insulation & executive workspace',
    category: 'Log Cabins & Garden Offices',
    imageUrl: officeImg,
    location: 'Peterlee, County Durham',
    dimensions: '4.5m x 3.0m',
    features: ['Double-glazed bi-fold doors', 'Acoustic thermal insulation', 'Integrated data & power trunking', 'Anthracite exterior cladding'],
  },
  {
    id: 'mancave-bar',
    title: 'Cozy Timber Man-Cave & Fitted Bar',
    subtitle: 'Custom bar counter, spirit optics rack & media layout',
    category: 'Man-Caves & Home Bars',
    imageUrl: barImg,
    location: 'Seaham & Coast Road area',
    dimensions: '5.0m x 3.5m',
    features: ['Custom timber bar with optics unit', 'Multi-point ambient LED lighting', 'Sub-floor thermal insulation', 'Heavy-duty timber flooring'],
  },
  {
    id: 'sunroom-extension',
    title: 'Insulated Suburban Sun-Room',
    subtitle: 'Bright panoramic garden extension for year-round living',
    category: 'Sun-Rooms & Living Extensions',
    imageUrl: sunroomImg,
    location: 'Easington Colliery',
    dimensions: '4.0m x 3.2m',
    features: ['Floor-to-ceiling panoramic glass', 'Year-round climate insulation', 'Maintenance-free composite finish', 'Flush threshold step'],
  },
  {
    id: 'workshop-shed',
    title: 'Heavy-Duty Timber Workshop & Storage',
    subtitle: 'Bespoke secure garden workshop for tools, hobbies & storage',
    category: 'Sheds, Workshops & Storage',
    imageUrl: workshopImg,
    location: 'Peterlee, United Kingdom',
    dimensions: '4.0m x 2.4m',
    features: ['Pressure-treated tongue & groove', 'Reinforced workbench substructure', 'High-security multi-lock door', 'Vapour barrier wrap'],
  },
  {
    id: 'expandable-cabin',
    title: 'Expandable Compact Living Cabin',
    subtitle: 'Delivered compact and expanded on-site for holiday living',
    category: 'Expandable Buildings',
    imageUrl: cabinImg,
    location: 'County Durham Coastal Area',
    dimensions: '6.0m x 3.0m (Expanded)',
    features: ['Delivered compact / rapid site expansion', 'Modular partitioned bedroom/living', 'Turnkey electrical pre-wire', 'High-grade roof membrane'],
  },
  {
    id: 'lounge-interior',
    title: 'Luxury Garden Lounge Interior',
    subtitle: 'Plastered finish with acoustic wooden slat feature wall',
    category: 'Sun-Rooms & Living Extensions',
    imageUrl: loungeImg,
    location: 'Peterlee Residential Build',
    dimensions: '5.2m x 3.6m',
    features: ['Plasterboard skim interior walls', 'Acoustic timber slat wall panelling', 'Dimmable flush ceiling downlights', 'Premium laminate floor'],
  },
];
