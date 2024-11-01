import { create } from 'zustand';
import { MutableRefObject, RefObject } from 'react';

interface ProposalState {
  data: {
    creativeProfessionalName: string;
    clientBusinessName: string;
    startDate: string;
    agreementCountry: {
      AU: boolean;
      US: boolean;
    };
  };
  setData: (key: string, value: any) => void;
  setAgreementCountry: (country: string, value: boolean) => void;
  exportPDF: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  setContentRef: (ref: RefObject<Element | Text> | undefined) => void;
  contentRef: RefObject<Element | Text> | undefined;
}

export const useProposalStore = create<ProposalState>((set) => ({
  data: {
    creativeProfessionalName: '',
    clientBusinessName: '',
    startDate: '',

    agreementCountry: {
      AU: true,
      US: false,
    },
  },
  isDrawerOpen: false,
  contentRef: undefined,

  setIsDrawerOpen: (isOpen) => set({ isDrawerOpen: isOpen }),
  setAgreementCountry: (country: string, value: boolean) =>
    set((state) => ({
      data: {
        ...state.data,
        agreementCountry: {
          AU: country === 'AU' ? value : false,
          US: country === 'US' ? value : false,
        },
      },
    })),
  setData: (key, value) =>
    set((state) => ({
      data: { ...state.data, [key]: value },
    })),
  exportPDF: () => {
    // Implement PDF export logic here
    console.log('Exporting PDF...');
  },
  setContentRef: (ref) => set({ contentRef: ref }),
}));

export default useProposalStore;
