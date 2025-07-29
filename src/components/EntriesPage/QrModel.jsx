import qrCodeUrl from "../../assets/qr-code.svg"

export const createQrModal = () => {
  let modalRef

  const showModal = () => modalRef.showModal()

  const view = (
    <dialog ref={modalRef} class="modal">
      <div class="modal-box flex flex-col items-center">
        <img src={qrCodeUrl} class="w-full" />
        <p class="py-4 text-sm">https://durham-region.github.io/pickering</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )

  return [view, showModal]
}
