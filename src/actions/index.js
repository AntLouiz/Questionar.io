import shortid from 'shortid'

export const addQuestion = () => ({
  type: 'ADD_QUESTION',
  id: shortid.generate(),
  description: undefined,
  answers: []
})

export const editQuestion = (id, description) => ({
  type: 'EDIT_QUESTION',
  id: id,
  description: description,
})

export const removeQuestion = (id) => ({
  type: 'REMOVE_QUESTION',
  id: id,
})


export const addAnswer = (id, answer_type, question_id) => ({
  type: 'ADD_ANSWER',
  id: id,
  description: undefined,
  answer_type: answer_type,
  question_id: question_id,
  value: undefined
})

export const saveAnswer = (id, description, question_id) => ({
  type: 'SAVE_ANSWER',
  id: id,
  description: description,
  question_id: question_id,
})

export const removeAnswer = (id, question_id) => ({
  type: 'REMOVE_ANSWER',
  id: id,
  question_id: question_id,
})