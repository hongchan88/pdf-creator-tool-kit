import { create } from 'zustand'

interface ProposalState {
  data: {
    businessName: string
    taxFileNumber: string
    agreementPeriod: string
    agreementCountry: {
      AU: boolean
      US: boolean
    }
  }
  setData: (key: string, value: any) => void
  exportPDF: () => void
}

export const useProposalStore = create<ProposalState>((set) => ({
  data: {
    businessName: '',
    taxFileNumber: '',
    agreementPeriod: '',
    agreementCountry: {
      AU: true,
      US: false,
    },
  },
  setData: (key, value) => set((state) => ({
    data: { ...state.data, [key]: value },
  })),
  exportPDF: () => {
    // Implement PDF export logic here
    console.log('Exporting PDF...')
  },
}))

export default useProposalStore;