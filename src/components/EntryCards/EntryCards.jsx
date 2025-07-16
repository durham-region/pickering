import { For } from "solid-js"

import { categories, entries } from "./entries"
import { Card } from "./Card"

const CardsGroup = ({ category }) => {
  const cards = entries
    .filter(e => e.categories.includes(category))
    .map(e => Card(e))
  return <div class="space-y-3 py-3" >
    <article class="prose">
      <h2>{category}</h2>
    </article>
    {cards}
  </div>
}

export const EntryCards = (props) =>
  <For each={props.filters()}>
    {(c) => <CardsGroup category={categories[c]} />}
  </For>
