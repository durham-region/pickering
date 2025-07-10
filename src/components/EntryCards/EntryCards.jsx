import { Badge } from "../../ui/Badge"
import { categories, entries } from "./entries"

const Categories = ({ categories = [] }) => categories.map(c => <Badge text={c} />)

const InfoField = ({ label, children }) => {
  if (!children) {
    return null
  }
  return <div class="flex">
    <span class="inline-block font-medium text-gray-600 w-20 shrink-0">{label}:</span>
    <span class="inline-block">{children}</span>
  </div>
}

const Weblink = ({ url = '' }) => {
  const shortUrl = url
    .replace('https://', '')
    .replace('www.', '')
    .substring(0, 60)

  return <a
    // class="inline-block max-w-xs truncate"
    // class="block truncate text-ellipsis"
          class="block truncate text-ellipsis whitespace-nowrap overflow-hidden"

    href={url}>
    {shortUrl}
  </a>
}

const Card = (entry) => (
  <div class="p-3 bg-white border border-gray-300 rounded-lg shadow">
    <div><span class="font-medium text-lg text-emerald-950">{entry.name}</span></div>
    <div class="my-2"><span class="font-medium text-sm text-gray-700">{entry.description}</span></div>
    <InfoField label='Phone'>{entry.phone}</InfoField>
    <InfoField label='Website'>
      <Weblink url={entry.website} />
    </InfoField>
    <InfoField label='Address'>{entry.address}</InfoField>
    <div class="pt-2">
      <Categories categories={entry.categories} />
    </div>
  </div>
)

const CardsGroup = ({ category }) => {
  const cards = entries
    .filter(e => e.categories.includes(category))
    .map(e => Card(e))
  return <div class="space-y-2 py-3" >
    <h2 class="text-2xl text-emerald-950 font-semibold">{category}</h2>
    {cards}
  </div>
}


export const EntryCards = () =>
  <div>
    <CardsGroup category={categories.walkInClinics} />
    <CardsGroup category={categories.durhamRegionProgram} />
    <CardsGroup category={categories.cityOfPickeringProgram} />
    <CardsGroup category={categories.townOfAjax} />
    <CardsGroup category={categories.cityOfToronto} />
    <CardsGroup category={categories.indoorPlayground} />
    <CardsGroup category={categories.otherActivities} />
    <CardsGroup category={categories.retailStorePrograms} />
    <CardsGroup category={categories.secondHandStores} />
    <CardsGroup category={categories.farms} />
    <CardsGroup category={categories.localServices} />
    <CardsGroup category={categories.childCare} />
  </div>
