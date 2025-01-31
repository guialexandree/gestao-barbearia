import { atom, selector } from 'recoil'

export const isLoadingCreateUpdateState = atom({
  key: 'isLoadingCreateUpdateState',
  default: false,
})

export const isOpenFormServiceState = atom({
  key: 'isOpenFormServiceState',
  default: false,
})

export const idNewServiceState = atom({
  key: 'idNewServiceState',
  default: ''
})

export const nameNewServiceState = atom({
  key: 'nameNewServiceState',
  default: ''
})

export const descriptionNewServiceState = atom({
  key: 'descriptionNewServiceState',
  default: ''
})

export const statusNewServiceState = atom<'ativo' | 'inativo'>({
  key: 'statusNewServiceState',
  default: 'ativo'
})

export const priceNewServiceState = atom({
  key: 'priceNewServiceState',
  default: 0
})

export const timeExecutionNewServiceState = atom({
  key: 'timeExecutionNewServiceState',
  default: 20
})

export const newServiceState = selector({
  key: 'newServiceState',
  get: ({ get }) => {
    return {
      id: get(idNewServiceState),
      name: get(nameNewServiceState),
      description: get(descriptionNewServiceState),
      status: get(statusNewServiceState),
      price: get(priceNewServiceState),
      timeExecution: get(timeExecutionNewServiceState)
    }
  }
})
