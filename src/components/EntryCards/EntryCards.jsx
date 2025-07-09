import { Badge } from "../../ui/Badge"
import { entries } from "./entries"

const Categories = ({categories = []}) => categories.map(c => <Badge text={c}/>)

const InfoField = ({ label, children }) => {
  if (!children) {
    return null
  }
  return <div class="flex">
    <span class="font-medium text-gray-600 block w-20 shrink-0">{label}:</span>
    <span class="block">{children}</span>
  </div>
}

const Weblink = ({ url = '' }) => {
  const shortUrl = url
    .replace('https://', '')
    .replace('www.', '')
    .substring(0, 60)

  return <a
    class="inline-block max-w-xs truncate"
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
    <Categories categories={entry.categories} />
  </div>
)

export const EntryCards = () => {
  const cards = entries.map(e => Card(e))
  return <div class="space-y-2" >
    {cards}
  </div>
}
