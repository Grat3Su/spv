<template>
  <div>
    <div class="card mt-2">
      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAyMzA3MDZfMTU2/MDAxNjg4NjQzNDM3ODc3._phXGzhiAIoEU5MM7wxg_9YSNhLb-SpWtG3EfM6Jl2Ag.ybI5rpsf89ykR76auVavK9ZJF17yp2iMKFjj2N6jMrUg.JPEG.kdh633/4T4KX2WM6JG2VH6BA3IN3IUYAU.jpeg.jpg?type=w800"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Cafe</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href="#" class="btn btn-primary" @click="sendMail">SendMail</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const sendMail = () => {
  let data = {
    from: 'ghong@gmail.com',
    content: '안냐세요 홍길동이엥요.'
  }

  // router.push() 를 통해서 dynamic routing으로 컴포넌트를 변경(이동)
  // data를 포함해서 처리할 수 있따.

  //   router.push({
  //     name: 'Mail',
  //     query: data
  //   })

  //   router.push({
  //     name: 'Mail',
  //     params: data
  //   })

  router.push({
    path: `/mail/${data.from}/${data.content}`,
    query: data
  })
}
</script>
