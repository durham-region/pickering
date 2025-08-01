import { EntryCards } from "../EntryCards/EntryCards"
import pdfUrl from "../../assets/pickering-toddler-guide.pdf"
import { Printer } from "../../icons/Printer"
import { QrCode } from "../../icons/QrCode"
import { DownloadFile } from "../../icons/DownloadFile"
import { CategoryFilter } from "./CategoryFilter"
import { createSignal } from "solid-js"
import { categories } from "../EntryCards/entries"
import { createQrModal } from "./QrModel"
import { Icon } from "./Icon"

export const EntriesPage = () => {
  const [filters, setFilters] = createSignal(Object.keys(categories))
  const [qrModal, showModal] = createQrModal()

  return (
    <div class="space-y-2 my-5">
      <article class="prose max-w-none">
        <p>
          Everything Pickering parents need to keep their toddlers happy, active, and entertained. Activities are
          located within a 25min drive.
        </p>
        <p>
          Would you like to add an entry to this list or send feedback? Send and email to{" "}
          <a href="mailto:ontario.durham.region@gmail.com">ontario.durham.region@gmail.com</a>{" "}
        </p>
      </article>

      <div class="mt-8 mb-6 flex space-x-5 justify-center">
        <div class="flex gap-2">
          <Icon footer="Print" onClick={() => window.print()}>
            <Printer />
          </Icon>
          <Icon footer="pdf" onClick={() => window.open(pdfUrl, "_blank")}>
            <DownloadFile />
          </Icon>
          <Icon footer="qr" onClick={() => showModal()}>
            <QrCode />
          </Icon>
        </div>
      </div>

      {qrModal}

      <CategoryFilter onChange={setFilters} />

      <div class="my-5">
        <EntryCards filters={filters} />
      </div>
    </div>
  )
}
