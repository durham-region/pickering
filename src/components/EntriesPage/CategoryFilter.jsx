import { createSignal } from "solid-js"
import { Adjustment } from "../../icons/Adjustment"
import { categories } from "../EntryCards/entries"

const Filters = () =>
  Object.keys(categories).map(category => (
    <label class="label block p-1">
      <input type="checkbox" class="checkbox mr-2" value={category} name="categories" />
      {categories[category]}
    </label>
  ))

export const CategoryFilter = props => {
  /** @type {HTMLFormElement} */
  let formRef

  const [isOpen, setOpen] = createSignal(false)

  const handleOnClick = () => {
    const selected = Array.from(formRef.querySelectorAll("input:checked")).map(input => input.value)

    props.onChange(selected)
    setOpen(false)
  }

  return (
    <div classList={{ "collapse-open": isOpen() }} class="bg-base-100 border-base-300 collapse border collapse-arrow">
      <div class="collapse-title bg-base-100 flex gap-x-3 cursor-pointer" onClick={() => setOpen(o => !o)}>
        <Adjustment /> Filter categories
      </div>

      <div class="collapse-content">
        <form class="grid md:grid-cols-2 lg:grid-cols-3" ref={formRef}>
          <Filters />
        </form>

        <div class="flex justify-center">
          <button class="btn btn-primary px-8 mb-4" type="button" onClick={handleOnClick}>
            Filter
          </button>
        </div>
      </div>
    </div>
  )
}
