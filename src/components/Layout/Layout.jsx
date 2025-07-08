import { EntriesPage } from "../EntriesPage/EntriesPage";

export const Layout = () => (
  <div class="flex flex-col h-screen w-full">
    <div class="flex h-14 px-1 justify-center bg-emerald-800">
      <div class="flex h-14 justify-center items-center w-full max-w-4xl text-white font-bold">
        <span class="inline-block text-2xl">Pickering Toddler Guide</span>
      </div>
    </div>

    <div class="flex grow px-1 justify-center bg-slate-50">
      <div class="w-full max-w-4xl">
        <EntriesPage/>
      </div>
    </div>

    <div class="flex h-14 px-1 justify-center bg-emerald-800">
      <div class="flex justify-center items-center h-14 w-full max-w-4xl text-white font-bold">
        <a class="text-white block" href="mailto:ontario.durham.region@gmail.com">ontario.durham.region@gmail.com</a>
      </div>
    </div>
  </div>
)