<template>
   <div class="container">
      <h4 class="text-center">게시판 - Main</h4>

      <div class="input-group mb-3">
         <!-- store 사용 -->
         <input v-model="boardStore.searchWord" @keydown.enter="boardList" type="text" class="form-control" />
         <button @click="boardList" class="btn btn-success" type="button">Search</button>
      </div>

      <!-- <table class="table table-hover">
         <thead>
            <tr>
               <th>#</th>
               <th>제목</th>
               <th>작성자</th>
               <th>작성일시</th>
               <th>조회수</th>
            </tr>
         </thead>
         <tbody> -->
            <!-- store 사용 -->
            <!-- 직접 store 에 접근해도 된다. -->
            <!-- <tr v-for="(board) in boardStore.list" @click="boardDetail(board.boardId)" v-bind:key="board.boardId">
               <td>{{ board.boardId }}</td>
               <td>{{ board.title }}</td>
               <td>{{ board.userName }}</td>
               <td>{{ util.makeDateStr(board.regDt.date, '.') }}</td>
               <td>{{ board.readCount }}</td>
            </tr>
         </tbody>
      </table> -->
      
      <!-- <board-list :detailModal="detailModal"></board-list> --> <!-- props X -->
      <board-list @call-parent-show-detail="showDetailModal"></board-list>

      <PaginationUI v-on:call-parent="movePage"></PaginationUI>

      <button class="btn btn-sm btn-primary" @click="showInsertModal">글쓰기</button>

      <insert-modal v-on:call-parent-insert="closeAfterInsert"></insert-modal>
      <!-- props 제거 -->
      <detail-modal v-on:call-parent-change-to-update="changeToUpdate" v-on:call-parent-change-to-delete="changeToDelete"></detail-modal>
      <update-modal v-on:call-parent-update="closeAfterUpdate"></update-modal>
   </div>
</template>

<script setup>
   // basic
   import {ref, onMounted } from 'vue'
   // common
   import http from "@/common/axios.js";
   import util from "@/common/util.js";

   // 3rd party
   import { Modal } from "bootstrap";

   // component
   import InsertModal from "@/components/modals/InsertModal.vue";
   import DetailModal from "@/components/modals/DetailModal.vue";
   import UpdateModal from "@/components/modals/UpdateModal.vue";
   import PaginationUI from "@/components/PaginationUI.vue";

   import BoardList from '../components/BoardList.vue';

   // router
   import { useRouter } from 'vue-router'

   // store
   import {useBoardStore} from '@/stores/boardStore'
   import {useAuthStore} from '@/stores/authStore'


   const router = useRouter()

   const {boardStore, boardList, setBoardMovePage, setBoardDetail } = useBoardStore();
   const {authStore} = useAuthStore()

   // data
   let insertModal = null
   let detailModal = ref(null)
   let updateModal = null

   // lifecycle
   onMounted(() => {
      insertModal = new Modal(document.getElementById("insertModal"));
      detailModal = new Modal(document.getElementById("detailModal"));
      updateModal = new Modal(document.getElementById("updateModal"));
   })

   // 초기 작업
   boardList();


   // pagination
   const movePage= (pageIndex) => {
      console.log("BoardMainVue : movePage : pageIndex : " + pageIndex);
      setBoardMovePage(pageIndex);
      boardList();
   }

      // insert
   const showInsertModal = () => insertModal.show()
   const closeAfterInsert = () => {
      insertModal.hide();
      boardList();
   }

      // detail
      // BoardList Component 를 사용할 경우 comment 하고 showDetailModal() 추가

   // const boardDetail = async (boardId) => {
   //    try {
   //       let { data } = await http.get("/boards/" + boardId);
   //       console.log(data);

   //       if (data.result == "login") {
   //          doLogout();
   //       } else {
   //          let { dto } = data;
   //          setBoardDetail(dto);
   //          detailModal.show();
   //       }
   //    } catch (error) {
   //       console.log("BoardMainVue: error : ");
   //       console.log(error);
   //    }

   // }

   const showDetailModal = () => {
      detailModal.show();
   }

   
   const changeToUpdate = () => {
      detailModal.hide();
      updateModal.show();
   }

   const closeAfterUpdate = () => {
      updateModal.hide();
      boardList();
   }

      // delete
      // $emit board 사용 X
      // changeToDelete(board){
   const changeToDelete = () => {
      detailModal.hide();

      if(confirm('이 글을 삭제하시겠습니까?')){
         boardDelete(); 
      }
   }

   const boardDelete = async () => {

      try {
         let { data } = await http.delete("/boards/" + boardStore.boardId);
         console.log(data);

         if (data.result == "login") {
            doLogout();
         } else {
            alert("글이 삭제되었습니다.");
            boardList();
         }
      } catch (error) {
         console.log("BoardMainVue: error : ");
         console.log(error);
      }
   }
      // logout 처리 별도 method
   const doLogout = () => {
      authStore.setLogout({ isLogin: false, userName: "", userProfileImageUrl: "" })
      router.push("/login");
   }


</script>

<style scoped></style>
