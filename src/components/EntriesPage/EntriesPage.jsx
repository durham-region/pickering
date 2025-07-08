import { EntryCards } from "../EntryCards/EntryCards"

export const EntriesPage = () => {
  return <div class="space-y-2 my-5">
    <p>Everything Pickering parents need to keep their toddlers happy, active, and entertained. Activities are located within a 25min drive.</p>
    <p>Would you like to add an entry to this list or send feedback? Send and email to <a href="mailto:ontario.durham.region@gmail.com">ontario.durham.region@gmail.com</a> </p>

    <div class="my-5 flex space-x-5 justify-center">
      <a class="block bg-emerald-600 py-1 px-3 border rounded-md border-emerald-800 text-white no-underline font-medium" onclick={() => window.print()} href="">Print</a>
      <a class="block bg-emerald-600 py-1 px-3 border rounded-md border-emerald-800 text-white no-underline font-medium" target="_blank" href="/src/assets/pickering-toddler-guide.pdf">View as PDF</a>
    </div>

    <div class="my-5">
      <EntryCards />
    </div>
  </div>
}