import { useState, createContext, useContext } from "react";

import { LayoutProvider } from "./LayoutProvider";
import Modal from "./Modal";

export const MainLayoutAction = ({ModalBody, modalAction, modalTitle}) => {
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <LayoutProvider className={'h-[100px] my-5'}>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-5">
                </div>
                <div className="col-span-1">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={(e) => {
                        e.stopPropagation();
                        setModalOpen(true);
                        }}>
                        Create
                    </button>
                    <Modal id="attribute-create-modal"  modalOpen={modalOpen} setModalOpen={setModalOpen} title={modalTitle} modalBody={<ModalBody />} showCancelBtn={modalAction?.showCancelBtn} showSaveBtn={modalAction?.showSaveBtn} />
                </div>
            </div>
        </LayoutProvider>
    );
}