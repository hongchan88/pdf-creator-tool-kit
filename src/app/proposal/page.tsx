'use client';
import useProposalStore from '@/stores/proposalStore';
import React from 'react';

const ProposalPage: React.FC = () => {
  const isDrawerOpen = useProposalStore((state) => state.isDrawerOpen);

  const termsAndConditions = [
    {
      title: 'TERMS AND CONDITIONS',
      sections: [
        {
          title: '1. INTERPRETATION',
          content:
            "In this Contract, unless the context requires otherwise: (a) References to this Contract or any other document include references to this Contract or such other document as varied, supplemented, or replaced from time to time; (b) References to any legislation or law include subordinate legislation and all amendments, consolidations, replacements, or re-enactments from time to time; (c) References to a natural person include any company, partnership, joint venture, association, corporation, or other body corporate and vice versa; (d) A reference to a party includes that party's executors, administrators, successors, and permitted assigns; (e) Words importing the singular include the plural and vice versa; (f) Headings are for convenience only and do not affect the interpretation of this Contract; (g) If a word or phrase is defined, its other grammatical forms have a corresponding meaning; (h) The meaning of general words is not limited by specific examples introduced by 'including', 'for example', or similar expressions.",
        },
        {
          title: '2. SERVICES',
          content:
            'The Service Provider agrees to provide the services described in the Service Scope to the Business. These services will be performed with due care and skill, in accordance with industry standards and best practices.',
        },
        {
          title: '3. PAYMENT',
          content:
            'The Business agrees to pay the Service Provider for the services rendered according to the agreed-upon payment schedule. Any disputes regarding payment must be raised within 14 days of the invoice date.',
        },
        {
          title: '4. INTELLECTUAL PROPERTY',
          content:
            'All intellectual property rights in the deliverables created by the Service Provider shall be transferred to the Business upon full payment, except for any pre-existing intellectual property of the Service Provider.',
        },
        {
          title: '5. CONFIDENTIALITY',
          content:
            'Both parties agree to keep confidential all information obtained from the other party during the course of this Contract, except as required by law or with the written consent of the other party.',
        },
        {
          title: '6. TERMINATION',
          content:
            'Either party may terminate this Contract with 30 days written notice. In the event of termination, the Business shall pay for all services rendered up to the date of termination.',
        },
        {
          title: '7. LIMITATION OF LIABILITY',
          content:
            "The Service Provider's liability under this Contract shall be limited to the total amount paid by the Business for the services.",
        },
        {
          title: '8. INDEMNIFICATION',
          content:
            'Each party agrees to indemnify and hold harmless the other party from any claims, damages, or expenses arising from their breach of this Contract.',
        },
        {
          title: '9. DISPUTE RESOLUTION',
          content:
            'Any disputes arising from this Contract shall first be subject to mediation before resorting to legal action.',
        },
        {
          title: '10. FORCE MAJEURE',
          content:
            'Neither party shall be liable for any failure or delay in performing their obligations under this Contract due to circumstances beyond their reasonable control.',
        },
        {
          title: '11. GOVERNING LAW',
          content:
            'This Contract shall be governed by and construed in accordance with the laws of [Jurisdiction].',
        },
        {
          title: '12. ENTIRE AGREEMENT',
          content:
            'This Contract constitutes the entire agreement between the parties and supersedes all prior agreements, understandings, or representations.',
        },
        {
          title: '13. AMENDMENTS',
          content:
            'Any amendments to this Contract must be made in writing and signed by both parties.',
        },
        {
          title: '14. SEVERABILITY',
          content:
            'If any provision of this Contract is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
        },
        {
          title: '15. WAIVER',
          content:
            'The failure of either party to enforce any right or provision under this Contract shall not constitute a waiver of such right or provision.',
        },
      ],
    },
  ];

  return (
    <div className='my-12 mx-auto h-full w-full flex flex-col justify-between max-w-[210mm] shadow-lg text-black'>
      <div className='overflow-auto'>
        {/* Cover Page */}
        <div className='p-16 min-h-[297mm] mb-16 page bg-white flex flex-col justify-between'>
          <div className='text-xl tracking-[0.2em] font-light'>Craftify</div>
          <div className='text-center'>
            <h1 className='text-5xl font-serif leading-tight mb-4'>
              CREATIVE <br /> SERVICES <br /> CONTRACT
            </h1>
          </div>
          <div className='flex justify-between items-end text-sm'>
            <div className='font-semibold'>PRIVATE</div>
            <div className='border border-black px-3 py-1 rounded'>
              PAGE 1 OF 10
            </div>
          </div>
        </div>

        {/* Page 1 - Creative Services Contract */}
        <div className='p-16 min-h-[297mm] mb-16 page bg-white flex flex-col justify-between'>
          <div>
            <table className='w-full border-collapse'>
              <thead>
                <tr>
                  <th className='text-left font-bold py-2 border-b'>ITEM</th>
                  <th className='text-left font-bold py-2 border-b'>
                    DESCRIPTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='py-2 pr-4 align-top font-bold'>ENTITIES</td>
                  <td className='py-2'>
                    [Creative Professional] ("Service Provider")
                    <br />
                    AND
                    <br />
                    [Business Name] ("Business")
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pr-4 align-top font-bold'>OBJECTIVE</td>
                  <td className='py-2'>
                    To establish terms for branding and digital design services.
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pr-4 align-top font-bold'>START DATE</td>
                  <td className='py-2'>15 Jan 2023</td>
                </tr>
                <tr>
                  <td className='py-2 pr-4 align-top font-bold'>
                    SERVICE SCOPE
                  </td>
                  <td className='py-2'>
                    (a) Brand identity services: strategy, visual identity,
                    guidelines.
                    <br />
                    (b) Digital design: new website design and implementation.
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pr-4 align-top font-bold'>OUTPUTS</td>
                  <td className='py-2'>
                    (a) Operational website. (b) All associated files and
                    assets.
                    <br />
                    (c) Agreed-upon brand identity materials.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex justify-between items-end text-sm mt-8'>
            <div className='font-semibold'>PRIVATE</div>
            <div className='border border-black px-3 py-1 rounded'>
              PAGE 2 OF 10
            </div>
          </div>
        </div>

        {/* Pages 2-9: Terms and Conditions */}
        {termsAndConditions.map((page, pageIndex) => (
          <div
            key={pageIndex}
            className='p-16 min-h-[297mm] mb-16 page bg-white flex flex-col justify-between'
          >
            <div>
              <h2 className='text-2xl font-bold mb-6'>{page.title}</h2>
              {page.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className='mb-4'>
                  <h3 className='font-bold mb-2'>{section.title}</h3>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
            <div className='flex justify-between items-end text-sm mt-8'>
              <div className='font-semibold'>PRIVATE</div>
              <div className='border border-black px-3 py-1 rounded'>
                PAGE {pageIndex + 3} OF 10
              </div>
            </div>
          </div>
        ))}

        {/* Final Page */}
        <div className='p-16 min-h-[297mm] mb-16 page bg-white flex flex-col justify-between'>
          <div>
            <h2 className='text-2xl font-bold mb-6'>EXECUTION</h2>
            <p className='mb-4'>
              By signing below, parties agree to the terms and conditions of
              this Contract.
            </p>
            <p className='mb-8'>
              IN WITNESS WHEREOF, the parties have executed this Contract as of
              the date first above written.
            </p>
            <div className='flex justify-between mt-16'>
              <div className='w-1/2 pr-8'>
                <div className='border-b border-black h-12 mb-2'></div>
                <p>Business</p>
                <p>[Business Name]</p>
                <p>Date: _________________</p>
              </div>
              <div className='w-1/2 pl-8'>
                <div className='border-b border-black h-12 mb-2'></div>
                <p>Service Provider</p>
                <p>[Creative Professional Name]</p>
                <p>Date: _________________</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-end text-sm mt-8'>
            <div className='font-semibold'>PRIVATE</div>
            <div className='border border-black px-3 py-1 rounded'>
              PAGE 10 OF 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
