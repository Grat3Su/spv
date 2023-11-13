<template>
  <h1>BoardPage</h1>
  <input type="text" v-model="boardState.searchWord" />
  limit : {{ boardState.limit }} offset : {{ boardState.offset }} totalCount :{{ totlaCount }}
  <br />

  <button @click="search">검색</button>
  <button @click="nextPage">다음 페이지</button>
  <button @click="changeTotalCount">총 건수 바꾸기</button>

  <h4>목록</h4>
  <table>
    <tr
      v-for="board in boardState.boardListData"
      :key="board.boardId"
      @click="detailBoard(board.boardId)"
    >
      <td>{{ board.boardId }}</td>
      <td>{{ board.userseq }}</td>
      <td>{{ board.title }}</td>
      <td>{{ board.content }}</td>
    </tr>
  </table>
  <button @click="listBoard">목록 가져오기</button>

  <h4>상세</h4>
  <table>
    <tr>
      <td>{{ boardState.boardData.boardId }}</td>
      <td>{{ boardState.boardData.userSeq }}</td>
      <td>{{ boardState.boardData.title }}</td>
      <td>{{ boardState.boardData.content }}</td>
    </tr>
  </table>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useBoardStore } from '../stores/boardStore'
const store = useBoardStore()
console.log(store)

//destructuring
const { boardState, listBoard, detailBoard } = store
const { totlaCount } = storeToRefs(store) //ref로 만들어줬다.
const { limit, offset, searchWord, etc } = boardState

const search = () => {
  console.log(boardState)
}
const nextPage = () => {
  boardState.offset = boardState.offset + boardState.limit
}
const changeTotalCount = () => {
  totlaCount.value = 100
}
</script>
