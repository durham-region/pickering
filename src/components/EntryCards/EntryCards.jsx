import { categories, entries } from "./entries"
import {Card} from "./Card"

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
