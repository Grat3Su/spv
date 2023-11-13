import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('boardStore', () => {
  //state
  const boardState = reactive({
    limit: 10,
    offset: 0,
    searchWord: '검색어',
    boardData: {
      boardId: 0,
      userSeq: 0,
      title: '',
      content: ''
    },
    boardListData: []
  })
  const totlaCount = ref(3)
  const testBoardListData = [
    { boardId: 1, userSeq: 100, title: '111', content: '1111111' },
    { boardId: 2, userSeq: 100, title: '222', content: '2222222' },
    { boardId: 3, userSeq: 100, title: '333', content: '3333333' },
    { boardId: 4, userSeq: 100, title: '444', content: '4444444' },
    { boardId: 5, userSeq: 100, title: '555', content: '1414144' },
    { boardId: 6, userSeq: 100, title: '666', content: '1212122' },
    { boardId: 7, userSeq: 100, title: '777', content: '2131241' },
    { boardId: 8, userSeq: 100, title: '888', content: '5122131' }
  ]
  const testBoardData = { boardId: 2, userSeq: 100, title: '222', content: '2222222' }
  //getter(computed)

  //action (method)
  function listBoard() {
    boardState.boardListData = testBoardListData
  }

  function detailBoard(boardId) {
    console.log(boardId)
    boardState.boardData = testBoardData
  }

  return { boardState, listBoard, detailBoard, totlaCount }
})
