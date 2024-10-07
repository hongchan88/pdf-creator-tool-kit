import React from 'react'

const ProposalPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Proposal</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Confidentiality and Non-Circumvention Agreement</h2>
        <p className="mb-4">
          This Confidentiality and Non-Circumvention Agreement (the "Agreement") is entered into on [DATE] by and between:
        </p>
        <p className="mb-4">
          [COMPANY NAME], a company registered in [COUNTRY] with its principal place of business at [ADDRESS] (the "Disclosing Party"),
        </p>
        <p className="mb-4">
          and
        </p>
        <p className="mb-4">
          [RECIPIENT NAME], a [INDIVIDUAL/COMPANY] with its principal place of business at [ADDRESS] (the "Recipient").
        </p>
        <h3 className="text-xl font-semibold mb-2">1. Purpose</h3>
        <p className="mb-4">
          The parties wish to explore a potential business relationship (the "Purpose"). In connection with the Purpose, the Disclosing Party may disclose certain confidential and proprietary information to the Recipient.
        </p>
        <h3 className="text-xl font-semibold mb-2">2. Confidential Information</h3>
        <p className="mb-4">
          "Confidential Information" means any information disclosed by the Disclosing Party to the Recipient, either directly or indirectly, in writing, orally or by inspection of tangible objects, which is designated as "Confidential," "Proprietary" or some similar designation, or that should reasonably be understood to be confidential given the nature of the information and the circumstances of disclosure.
        </p>
        {/* Add more placeholder text for the agreement as needed */}
      </div>
    </div>
  )
}

export default ProposalPage
