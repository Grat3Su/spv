<script setup>
import StudentList from './components/StudentList.vue'
import StudentDetail from './components/StudentDetail.vue'

import { ref } from 'vue'
import axios from 'axios'

const student = ref({}) //상세
const studentList = ref([]) //목록

const clearStudent = () => {
  student.value = {
    studentId: 0,
    studentNm: '',
    email: '',
    phone: ''
  }
}

const listStudent = async () => {
  try {
    //let response = await fetch("http://localhost:8080/students");
    let response = await axios.get('http://localhost:8080/axios/students')
    //let data = await response.json();
    console.log(response)
    let { data } = response
    console.log(data)
    studentList.value = data
  } catch (error) {
    console.error(error)
  }
}

const detailStudent = async (studentId) => {
  try {
    console.log(studentId)
    //let response = await fetch("http://localhost:8080/students/"+studentId);
    let { data } = await axios.get('http://localhost:8080/axios/students/' + studentId) //이미 자바스크립트 객체

    //let data = await response.json();
    console.log(data)
    student.value = data
  } catch (error) {
    console.error(error)
  }
}
const insertStudent = async () => {
  let urlParams = new URLSearchParams(student.value) // www- urlencoded
  let fetchOptions = {
    method: 'POST',
    body: urlParams
  }

  try {
    let { data } = await axios.post('http://localhost:8080/axios/students', student.value)
    //let data = await response.json();
    //data 로 이후 비동기 처리 결과
    console.log(data)
    listStudent()
    clearStudent()
  } catch (error) {
    console.error(error)
  }
}
const updateStudent = async () => {
  let urlParams = new URLSearchParams(student.value) // www- urlencoded
  let fetchOptions = {
    method: 'PUT',
    body: urlParams
  }

  try {
    let { data } = await axios.put(
      'http://localhost:8080/axios/students/' + student.value.studentId,
      student.value
    )

    console.log(data)
    listStudent()
    clearStudent()
  } catch (error) {
    console.error(error)
  }
}
const deleteStudent = async () => {
  let fetchOptions = {
    method: 'DELETE'
  }

  try {
    let { data } = await axios.delete(
      'http://localhost:8080/axios/students/' + student.value.studentId
    )

    //data 로 이후 비동기 처리 결과
    console.log(data)
    listStudent()
    clearStudent()
  } catch (error) {
    console.error(error)
  }
}
//detail();
listStudent()
</script>

<template>
  <h1>학생 관리</h1>
  <student-list
    v-bind:student-list="studentList"
    v-on:call-parent-detail="detailStudent"
  ></student-list>
  <hr />

  <student-detail v-bind:student="student"></student-detail>
  <hr />

  <div style="border: 1px; margin: auto; text-align: center">
    <button @click="insertStudent" id="btnInsert">등록</button>
    <button @click="updateStudent">수정</button>
    <button @click="deleteStudent">삭제</button>
    <button @click="clearStudent">초기화</button>
  </div>
</template>

<style scoped></style>
