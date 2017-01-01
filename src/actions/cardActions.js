import { database } from 'store'
import { emptyCard } from 'util'

export const updateCard = ({ dispatch }, cardKey, card) => {
  database
  .ref('cards')
  .child(cardKey)
  .set(card)
}

export const moveCard = ({ dispatch }, event) => {
  database
  .ref(`cards/${event.cardId}/`)
  .update({ listId: event.targetListId })
}

export const changeCurrentCard = ({ dispatch }, cardKey) => {
  dispatch('CHANGE_CURRENT_CARD', cardKey)
}

export const addNewCard = ({ dispatch }, listKey, projectId) => {
  database
  .ref('cards/')
  .push()
  .set({ ...emptyCard, listId: listKey, projectId })
}

export const deleteCard = ({ dispatch }, cardKey) => {
  if (confirm('Are you sure you want to delete?')) {
    this.changeCurrentCard({ dispatch }, null)
    database
    .ref(`cards/${cardKey}/`)
    .remove()
  }
}

export const addComment = ({ dispatch, state }, comment) => {
  database
  .ref(`cards/${state.currentCardId}/comments/`)
  .push()
  .set(comment)
}

export const logWork = ({ dispatch, state }, workLog) => {
  database
  .ref(`cards/${state.currentCardId}/workLogged/`)
  .push()
  .set(workLog)
}

export const deleteWorkLog = ({ dispatch, state }, workLogId) => {
  database
  .ref(`cards/${state.currentCardId}/workLogged/${workLogId}/`)
  .remove()
}
