import React from 'react'

const Address = ({ value, onChange }) => {
    const handleStreet = e => {
        const newValue = { ...value }
        newValue.street = e.target.value
        onChange(newValue)
    }
    const handleCity = e => onChange({ ...value, city: e.target.value })
    const handleZipcode = e => onChange({ ...value, zipcode: e.target.value })
    return (
        <div className="address">
            <input name="street" value={value.street || ''} onChange={handleStreet} placeholder="Street..." />
            <input name="city" value={value.city || ''} onChange={handleCity} placeholder="City..." />
            <input name="zipcode" value={value.zipcode || ''} onChange={handleZipcode} placeholder="ZIP code..." />
        </div>
    )
}

export default Address
