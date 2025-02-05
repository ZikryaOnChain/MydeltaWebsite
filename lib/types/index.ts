export interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
}

export interface QuoteFormData {
  name: string
  phone: string
  address: string
  notes?: string
} 