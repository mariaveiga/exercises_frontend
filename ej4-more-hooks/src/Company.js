import React from 'react'

const Company = ({ value, onChange }) => {
    const handleName = e => onChange({ ...value, name: e.target.value })
    const handleBs = e => onChange({ ...value, bs: e.target.value })
    return (
        <div className="company">
            <input name="companyname" value={value.name || ''} onChange={handleName} placeholder="C.Name..." />
            <input name="bs" value={value.bs || ''} onChange={handleBs} placeholder="BS..." />
        </div>
    )
}

export default Company
