import { Badge } from "../../ui/Badge"
/**
 * @typedef {import('./entries').Entry} Entry
 */

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

/**
 * 
 * @param {Entry} entry 
 */
export const Card = (entry) =>
  <div className="card bg-base-100 card-md shadow-sm">
    <div className="card-body">
      <h2 className="card-title">{entry.name}</h2>
      <p>{entry.description}</p>
      <InfoField label='Phone' text={entry.phone} />
      <LinkField label="Website" href={entry.website} />
      <InfoField label='Address' text={entry.address} />
      <div class="pt-2">
        <Badges text={entry.categories} />
      </div>
    </div>
  </div>