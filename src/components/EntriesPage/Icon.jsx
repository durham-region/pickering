export const Icon = ({ footer = "", onClick = () => null, children }) => (
  <div
    class="flex flex-col items-center bg-white py-3 px-8 md:px-16 border rounded-md border-emerald-900 cursor-pointer hover:bg-emerald-50 hover:shadow-md"
    onclick={onClick}
  >
    <div>{children}</div>
    <span class="block">{footer}</span>
  </div>
)
