<template>
  <div class="card no-padding">
    <div class="card-nav">
      <ul class="list">
        <li class="list-item" v-for="email in emails" v-bind:key="email.id">
          <router-link v-bind:to="`/mail/${email.id}`">
            {{email.theme}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <router-view v-bind:key="$route.path" v-bind:languageBase="language"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  inject: ['emails'],
  props: {
    language: String,
  },
  methods: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .card {
    display: flex;
  }

  .card.no-padding {
    padding: 0;
  }

  .card-nav {
    max-width: 300px;
    border-right: 1px solid #999999;
  }

  .card-body {
    padding: 0 1rem;
  }

  .list-item {
    padding: .5rem;
    cursor: pointer;
  }

  .list-item a {
    color: #2c3e50;
  }

  .list-item a.active {
    color: #3eaf7c;
    font-weight: bold;
  }
</style>