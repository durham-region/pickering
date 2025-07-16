/**
 * @typedef {Object.<string, string>} Category
 */

/**
 * @type {Category[]}
 */
export const categories = {
  walkInClinics: 'Walk-in Clinics',
  childCare: 'Child Care',
  durhamRegionProgram: 'Durham Region Program',
  cityOfPickeringProgram: 'City of Pickering Program',
  townOfAjax: 'Town of Ajax',
  cityOfToronto: 'City of Toronto',
  indoorPlayground: 'Indoor Playground',
  otherActivities: 'Other Activities',
  retailStorePrograms: 'Retail Store Programs',
  farms: 'Farms',
  secondHandStores: 'Second Hand Stores',
  localServices: 'Local Services'
}

/**
 * @typedef {Object} Entry
 * @property {string} name
 * @property {string|null} description
 * @property {string} phone
 * @property {string} website
 * @property {string} address
 * @property {string[]} categories
 */

/**
 * @type {Entry[]}
 */
export const entries = [{
  name: 'Amberlea Medical Center',
  description: null,
  phone: '905-492-8222',
  website: 'https://www.amberleamedicalcenter.com',
  address: '1822 Whites Road - Unit 2A, Pickering Ontario, L1V 4M1',
  categories: [categories.walkInClinics]
}, {
  name: 'Urgent Care Pickering',
  description: null,
  phone: '905-831-8333',
  website: 'https://urgentcarepickering.com/walk-in-clinic',
  address: '1450 Kingston Rd, Pickering, ON',
  categories: [categories.walkInClinics]
}, {
  name: 'Super Seven Clinic',
  description: null,
  phone: '905-427-7577',
  website: 'https://superseven.ca/contact-us-1',
  address: '2200 Brock Road, Pickering, Ontario L1X 2R2, Canada',
  categories: [categories.walkInClinics]
}, {
  name: 'Durham Region - Finding Quality Child Care',
  description: null,
  phone: null,
  website: 'https://www.durham.ca/en/living-here/finding-quality-child-care.aspx',
  address: null,
  categories: [categories.childCare]
}, {
  name: 'Facebook Group - Unlicensed Home Daycare',
  description: 'Unlicensed only! Pickering/Ajax Only Home Daycare, Seeking and Providing',
  phone: null,
  website: 'https://www.facebook.com/groups/580329807270608',
  address: null,
  categories: [categories.childCare]
}, {
  name: 'Early On',
  description: null,
  phone: '905-839-3007',
  website: 'https://www.keyon.ca/calendar',
  address: null,
  categories: [categories.durhamRegionProgram]
}, {
  name: 'Public Swimming',
  description: null,
  phone: null,
  website: 'https://www.pickering.ca/parks-recreation-culture/pools-swimming-and-splash-pads/public-swimming',
  address: null,
  categories: [categories.cityOfPickeringProgram]
}, {
  name: 'Splash Pads',
  description: null,
  phone: null,
  website: 'https://www.pickering.ca/parks-recreation-culture/pools-swimming-and-splash-pads/splash-pads',
  address: 'Amberlea Park & Beachfront Park & Millennium Square & Foxtail Green',
  categories: [categories.cityOfPickeringProgram]
}, {
  name: 'Activities Search Page',
  description: 'This page contains most activities coordinated by the City of Pickering, it is an excelente resource. You can search for activities for: toddler and parents, swimming, gardening, sports, etc',
  phone: null,
  website: 'https://anc.ca.apm.activecommunities.com/cityofpickering/activity/search?activity_other_category_ids=9',
  address: null,
  categories: [categories.cityOfPickeringProgram]
}, {
  name: 'Library Events',
  description: null,
  phone: null,
  website: 'https://cal.pickeringlibrary.ca/events',
  address: null,
  categories: [categories.cityOfPickeringProgram],
}, {
  name: 'Actibities Search Page',
  description: 'This page contains activities coordinated by the Town of Ajax. Highlighs: Sportball, Swim Parent & Tot',
  phone: null,
  website: 'https://anc.ca.apm.activecommunities.com/ajax/activity/search',
  address: null,
  categories: [categories.townOfAjax],
}, {
  name: 'Library Events',
  description: null,
  phone: null,
  website: 'https://ajaxlibrary.ca/events',
  address: null,
  categories: [categories.townOfAjax],
}, {
  name: 'Splash Pads',
  description: null,
  phone: null,
  website: 'https://facilities.ajax.ca/?CategoryIds=&FacilityTypeIds=20423',
  address: 'Audley Recreation Centre & Horne Park & McLean Community Centre & Rotary Park',
  categories: [categories.townOfAjax],
}, {
  name: 'Zoo',
  description: null,
  phone: '416-392-5900',
  website: 'https://www.torontozoo.com',
  address: '2000 Meadowvale Road, Toronto, Ontario, M1B 5K7',
  categories: [categories.cityOfToronto],
}, {
  name: 'Fun Factory',
  description: null,
  phone: '905-839-1386',
  website: 'https://funfactoryplay.ca',
  address: '15-1420 Bayly St, Pickering, ON, Canada, Ontario',
  categories: [categories.indoorPlayground]
},{
  name: 'Tree House Club',
  description: null,
  phone: '905-420-7529',
  website: 'https://www.treehouseclubhouse.com',
  address: '1095 Kingston Rd, Unit #1, Pickering, ON L1V 1B5',
  categories: [categories.indoorPlayground]
},{
  name: 'S-Town (Step by Step Club)',
  description: null,
  phone: '647-998-8074',
  website: 'https://stepbystepclub.ca',
  address: '1400 Bayly St. Unit 13B, Pickering, ON, L1W 3R2',
  categories: [categories.indoorPlayground]
},{
  name: 'Playtopia',
  description: null,
  phone: '905-744-4545',
  website: 'https://pickering.playtopia.ca/',
  address: 'Pickering Smart Center, 1899 Brock Road, Pickering, ON L1V 4H7',
  categories: [categories.indoorPlayground]
},
{
  name: 'Endless Fun',
  description: null,
  phone: '905-239-9992',
  website: 'https://www.endlessfun.ca',
  address: '400 Monarch Ave. Unit #14, Ajax, ON, L1S-3W6',
  categories: [categories.indoorPlayground]
},
{
  name: 'Plae House',
  description: null,
  phone: '289-314-8634',
  website: 'https://www.instagram.com/theplaehouse',
  address: '334 Rossland Rd E Unit 303, Ajax, ON',
  categories: [categories.indoorPlayground]
},
{
  name: 'Kira Kira Cafe',
  description: null,
  phone: '647-888-0789',
  website: 'https://kirakidscafe.com',
  address: '7501 Woodbine Avenue, Unit 5, Markham, ON L3R 2E1',
  categories: [categories.indoorPlayground]
},{
  name: 'Snooze Room',
  description: null,
  phone: '905-622-0977',
  website: 'https://snoozeroom.ca',
  address: '1101 Kingston Road, Unit 320, Pickering, ON L1V 1B5',
  categories: [categories.otherActivities]
},
{
  name: 'AIM Gymnastics',
  description: null,
  phone: '905-839-5260',
  website: 'https://aimgymnastics.ca',
  address: '1503 Sandy Beach Road, Pickering, ON',
  categories: [categories.otherActivities]
},
{
  name: 'Crock A Doodle Pickering',
  description: 'Paint-your-own pottery studio',
  phone: '905-492-4822',
  website: 'https://crockadoodle.com/pickering/baby-toddler',
  address: '1822 Whites Road, Pickering, ON, L1V 4M1',
  categories: [categories.otherActivities]
},
{
  name: 'Pickering Farmers Market',
  description: 'Tuesdays from June 10 to October 7 (closed July 1, 2025), 9:00am – 2:00pm.',
  phone: null,
  website: 'https://www.pickering.ca/parks-recreation-culture/festivals-and-events/farmers-market/',
  address: '1867 Valley Farm Road, Pickering, ON - North West parking lot of Chestnut Hill Developments Rec Complex',
  categories: [categories.otherActivities]
}



  , {
  name: 'Home Depot',
  description: 'Workshop for kids',
  phone: null,
  website: 'https://www.homedepot.ca/en/home/ideas-how-to/workshops.html',
  address: null,
  categories: [categories.retailStorePrograms]
},
{
  name: 'Indigo',
  description: null,
  phone: null,
  website: 'https://www.indigo.ca/en-ca/events/kids-summer-of-fun',
  address: null,
  categories: [categories.retailStorePrograms]
},
{
  name: 'Michael’s',
  description: null,
  phone: null,
  website: 'https://canada.michaels.com/classes/search',
  address: null,
  categories: [categories.retailStorePrograms]
},
{
  name: 'Rona',
  description: null,
  phone: null,
  website: 'https://www.rona.ca/en/kid-workshop',
  address: null,
  categories: [categories.retailStorePrograms]
}
  ,


{
  name: 'Brooks Farms',
  description: null,
  phone: null,
  website: 'https://www.brooksfarms.com/playland',
  address: null,
  categories: [categories.farms]
},
{
  name: "Pingle's Farm Market",
  description: null,
  phone: null,
  website: 'https://pinglesfarmmarket.com/pingles-playland',
  address: null,
  categories: [categories.farms]
},
{
  name: 'Forsythe Family Farms',
  description: null,
  phone: null,
  website: 'https://forsythefamilyfarms.com',
  address: null,
  categories: [categories.farms]
},
{
  name: 'Willowtree Farm',
  description: null,
  phone: null,
  website: 'https://willowtreefarm.ca/animal-experience-playground',
  address: null,
  categories: [categories.farms]
},
{
  name: 'Carma Farms',
  description: null,
  phone: null,
  website: 'https://www.carmafarms.com',
  address: null,
  categories: [categories.farms]
}
  ,
{
  name: 'Pamela Yool',
  description: 'Professional photographer based in Pickering specializing in newborn, toddler (6 months & 1 year), and family fine art portraits.',
  phone: null,
  website: 'https://www.pamelayool.com',
  address: null,
  categories: [categories.localServices]
},
{
  name: 'HERFit',
  description: 'Women’s fitness program with a postpartum support program.',
  phone: null,
  website: 'https://www.herfitcamp.com',
  address: '351 Frankcom St, Ajax, ON L1S 1R4',
  categories: [categories.localServices]
},


{
  name: 'Once Upon a Child',
  description: 'Second-hand store offering gently used kids clothing, toys, and gear.',
  phone: '905-427-4194',
  website: 'https://onceuponachild.com/locations/ajax-on',
  address: '18 Harwood Ave. S, Ajax, ON L1S 7L8',
  categories: [categories.secondHandStores]
}]

