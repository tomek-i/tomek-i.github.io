interface ModalProps extends React.PropsWithChildren {
  // header?: ReactNode;
  // content?: ReactNode;
  // footer?: ReactNode;
  title?: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
//TODO: use react portals to render the modal as per documentation here https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal and https://blog.logrocket.com/build-modal-with-react-portals/ and https://medium.com/@janevalencia/creating-modal-with-react-portals-a55c57bba1eb and https://react.school/ui/modal

export const Modal: React.FC<ModalProps> = ({
  show = false,
  setShow,
  title,
  children,
}) => {
  if (!show) return null;

  // TODO: extract components out like the timeline etc. or the job card, do this for content, header, and footer

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none text-slate-500 focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                onClick={() => setShow(false)}
              >
                <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-20 focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}

            {children}

            {/* TODO: extract out as footer component that can be used for the modal */}

            {/*footer*/}
            {/* <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
                onClick={() => setShow(false)}
              >
                Close
              </button>
              <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() => setShow(false)}
              >
                Save Changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* TODO: extract out as Overlay component */}
      <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
    </>
  );
};
