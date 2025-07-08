import { entries } from "./entries"


const InfoField = ({ label, children }) => {
  if (!children) {
    return null
  }
  return <div class="flex">
    <span class="font-medium text-gray-600 inline-block w-20">{label}:</span>
    {children}
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
  <div class="p-3 hover:bg-white border border-gray-300 rounded-lg shadow">
    <div><span class="font-medium text-lg text-black">{entry.name}</span></div>
    <div class="my-2"><span class="font-medium text-sm text-gray-700">{entry.description}</span></div>
    <InfoField label='Phone'>{entry.phone}</InfoField>
    <InfoField label='Website'>
      <Weblink url={entry.website} />
    </InfoField>
    <InfoField label='Address'>{entry.address}</InfoField>
  </div>
)

export const EntryCards = () => {
  const cards = entries.map(e => Card(e))
  return <div class="space-y-2" >
    {cards}
  </div>
}
