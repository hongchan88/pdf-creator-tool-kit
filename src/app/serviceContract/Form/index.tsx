import React, { useState } from 'react';
import { useProposalStore } from '../../../stores/proposalStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Form: React.FC = () => {
  const { setData, data } = useProposalStore();
  const [isAUAgreement, setIsAUAgreement] = useState(true);

  return (
    <div className='space-y-6 max-w-md mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-8 text-black'>
        CREATIVE SERVICES CONTRACT
      </h1>

      <div className='flex justify-center space-x-4 mb-8'>
        <Button
          variant={isAUAgreement ? 'default' : 'outline'}
          onClick={() => setIsAUAgreement(true)}
          className={cn(
            'rounded-full',
            isAUAgreement ? 'bg-blue-500 text-white' : 'bg-white text-black'
          )}
        >
          AU AGREEMENT
        </Button>
        <Button
          variant={!isAUAgreement ? 'default' : 'outline'}
          onClick={() => setIsAUAgreement(false)}
          className={cn(
            'rounded-full',
            !isAUAgreement ? 'bg-blue-500 text-white' : 'bg-white text-black'
          )}
        >
          US AGREEMENT
        </Button>
      </div>

      <div className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            COMPANY NAME (PAGE 2 & 10)
          </label>
          <input
            type='text'
            className='w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-black placeholder:text-gray-500'
            value={data.businessName}
            onChange={(e) => setData('businessName', e.target.value)}
            placeholder='Insert Company Name'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            TAX NUMBER (PAGE 2 & 10)
          </label>
          <input
            type='text'
            className='w-full p-3 border border-gray-300 rounded-md bg-gray-100'
            value={data.taxFileNumber}
            onChange={(e) => {
              const re = /^(?:[0-9]{1,11})?$/;
              if (re.test(e.target.value)) {
                setData('taxFileNumber', e.target.value);
              }
            }}
            placeholder='Insert Tax Number'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            AGREEMENT PERIOD (PAGE 6)
          </label>
          <input
            type='text'
            className='w-full p-3 border border-gray-300 rounded-md bg-gray-100'
            value={data.agreementPeriod}
            onChange={(e) => {
              const re = /^(?:[0-9]{1,2})?$/;
              if (re.test(e.target.value)) {
                setData('agreementPeriod', e.target.value);
              }
            }}
            placeholder='36'
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
