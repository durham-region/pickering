import { EntriesPage } from "../EntriesPage/EntriesPage";

export const Layout = () => (
  <div class="flex flex-col h-screen w-full">
    <div class="flex h-14 px-1 justify-center bg-emerald-800">
      <div class="flex h-14 justify-center items-center w-full max-w-4xl text-white font-bold">
        <h1 class="text-2xl">Pickering Toddler Guide</h1>
      </div>
    </div>

    <div class="flex grow px-1 justify-center bg-slate-50">
      <div class="w-full max-w-4xl">
        <EntriesPage />
      </div>
    </div>

    <div class="flex h-14 px-1 justify-center bg-emerald-800">
      <div class="flex flex-col gap-1 h-14 justify-center items-center w-full max-w-4xl text-white font-bold">
        <a class="block text-white" href="mailto:ontario.durham.region@gmail.com">ontario.durham.region@gmail.com</a>
        <img class="block" src="https://hits.sh/github.com/durham-region/pickering/hits.svg?label=Views&color=00bc7d&labelColor=006045"/>
      </div>
    </div>
  </div>
)