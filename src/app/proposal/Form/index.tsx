import React from 'react'
import { useProposalStore } from '../../../stores/proposalStore'

const Form: React.FC = () => {
  const { setData, data } = useProposalStore()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Proposal Form</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-300">Company Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          value={data.businessName}
          onChange={(e) => setData('businessName', e.target.value)}
          placeholder="Insert Company Name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Tax Number</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          value={data.taxFileNumber}
          onChange={(e) => {
            const re = /^(?:[0-9]{1,11})?$/
            if (re.test(e.target.value)) {
              setData('taxFileNumber', e.target.value)
            }
          }}
          placeholder="Insert Tax Number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Agreement Period</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          value={data.agreementPeriod}
          onChange={(e) => {
            const re = /^(?:[0-9]{1,2})?$/
            if (re.test(e.target.value)) {
              setData('agreementPeriod', e.target.value)
            }
          }}
          placeholder="36"
        />
      </div>
    </div>
  )
}

export default Form