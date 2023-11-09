<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/cafe" class="nav-link">Cafe</router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mail/:from/:content" class="nav-link">Mail</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tellme" class="nav-link">TellMe</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchWord"
          />
          <button class="btn btn-outline-success" @click="search">Search</button>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- 로그인 상태인지 로그아웃 상태인지 이미지 보여줌: noProfile.png, userProfileImageUrl-->
          <!-- 로그아웃, 로그인 중 한 개가 배타적으로 보이도록-->
          <li class="nav-item mt-2">
            <img
              v-bind:src="userData.userProfileImageUrl"
              alt=""
              style="width: 24px; border-radius: 50% height=24px"
            />
          </li>
          <!-- v-show를 이용하고 조건이 isLogin-->
          <li class="nav-item" v-show="isLogin">
            <a class="nav-link" href="#"> {{ userData.userName }} Logout</a>
          </li>
          <li class="nav-item" v-show="!isLogin">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, reactive } from 'vue'
const searchWord = ref('')
const search = (e) => {
  // 이벤트 객체 받아와서 default action 방지
  e.preventDefault()
  alert(searchWord.value)
}

//로그인여부
//로그인했을 경우 사용자 data (username, userprofileImgUrl)
const isLogin = ref(false)
const userData = reactive({
  userName: '',
  userProfileImageUrl: '/src/assets/noProfile.png'
})
</script>
