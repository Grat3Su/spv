<template>
  <h1>Student Detail</h1>

  <form>
    <table>
      <tbody>
        <tr>
          <td>studentNM</td>
          <td><input type="text" name="studentNm" v-model="student.studentNm" /></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type="text" name="email" v-model="student.email" /></td>
        </tr>
        <tr>
          <td>Phone</td>
          <td><input type="text" name="phone" v-model="student.phone" /></td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script setup>
const props = defineProps(['student'])
</script>
