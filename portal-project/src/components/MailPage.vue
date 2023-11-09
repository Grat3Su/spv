<template>
  <div>
    <div class="card mt-2">
      <img
        src="https://t1.daumcdn.net/cfile/tistory/2248E23655ADCFE30F"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Mail</h5>
        <p class="card-text">
          form:{{ from }}
          <br />
          content:{{ content }}
        </p>
        <a href="#" class="btn btn-primary" @click="checkMail">checkMail</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const from = ref('')
const content = ref('')

const checkMail = () => {
  from.value = route.params.from
  content.value = route.params.content
}
</script>
