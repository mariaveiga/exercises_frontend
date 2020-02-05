import React from 'react'
import { useSelector } from 'react-redux'
import ErrorModal from './ErrorModal'
import LataModal from './LataModal'
import './Modals.css'

const Modals = () => {
    const currentModal = useSelector(s => s.modal)
    if (!currentModal) return false
    
    let TheModal
    if (currentModal.type === 'error') TheModal = ErrorModal
    if (currentModal.type === 'lata') TheModal = LataModal

    return (
        <div className="modal-background">
            <div className="modal-foreground">
                <TheModal />
            </div>
        </div>
    )
}

export default Modals
