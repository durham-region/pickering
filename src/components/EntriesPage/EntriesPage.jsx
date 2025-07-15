import { EntryCards } from "../EntryCards/EntryCards"
import pdfUrl from "../../assets/pickering-toddler-guide.pdf"
import { Printer } from "../../icons/Printer"
import { DownloadFile } from "../../icons/DownloadFile"
import { Adjustment } from "../../icons/Adjustment"

const Icon = ({ footer = '', onClick = () => null, children }) =>
  <div class="flex flex-col items-center bg-white py-3 px-8 md:px-16 border rounded-md border-emerald-900 cursor-pointer hover:bg-emerald-50 hover:shadow-md"
  onclick={onClick}>
    <div>
      {children}
    </div>
    <span class="block">{footer}</span>
  </div>

export const EntriesPage = () => {
  return <div class="space-y-2 my-5">
    <article class="prose max-w-none">
    <p>Everything Pickering parents need to keep their toddlers happy, active, and entertained. Activities are located within a 25min drive.</p>
    <p>Would you like to add an entry to this list or send feedback? Send and email to <a href="mailto:ontario.durham.region@gmail.com">ontario.durham.region@gmail.com</a> </p>
    </article>

    <div class="mt-8 mb-6 flex space-x-5 justify-center">
      <div class="flex gap-2">
        <Icon footer="Print" onClick={() => window.print()}><Printer /></Icon>
        <Icon footer="PDF" onClick={() => window.open(pdfUrl, '_blank')}><DownloadFile /></Icon>
        <Icon footer="Filter"><Adjustment /></Icon>
      </div>
    </div>

    <div class="my-5">
      <EntryCards />
    </div>
  </div>
}