import { Badge } from "../../ui/Badge"
import { categories, entries } from "./entries"

const cleanHref = (href = '') => href
  .replace('http://', '')
  .replace('https://', '')
  .replace('www.', '')

const AutoHideField = ({ condition, children }) => condition ? children : null

const InfoField = ({ label, text }) =>
  <AutoHideField condition={text}>
    <div class="flex max-w-full">
      <span class="block font-medium text-gray-600 w-20 shrink-0">{label}:</span>
      <span class="block">{text}</span>
    </div>
  </AutoHideField>

const LinkField = ({ label, href }) =>
  <AutoHideField condition={href}>
    <div class="flex max-w-full">
      <span class="block font-medium text-gray-600 w-20 shrink-0">{label}:</span>
      <div class="flex-1 overflow-hidden">
        <a
          class="block truncate text-ellipsis whitespace-nowrap max-w-sm"
          href={href}>
          {cleanHref(href)}
        </a>
      </div>
    </div>
  </AutoHideField>

const Badges = ({ text = [] }) => text.map(c => <Badge text={c} />)

const Card = (entry) => (
  <div class="p-3 bg-white border border-gray-300 rounded-lg shadow">
    <span class="block font-medium text-lg text-emerald-950">{entry.name}</span>
    <span class="block my-2 font-medium text-sm text-gray-700">{entry.description}</span>
    <InfoField label='Phone' text={entry.phone} />
    <LinkField label="Website" href={entry.website} />
    <InfoField label='Address' text={entry.address} />
    <div class="pt-2">
      <Badges text={entry.categories} />
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
