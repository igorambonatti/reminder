import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import AppProvider from '../context/index'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider>{children}</AppProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
