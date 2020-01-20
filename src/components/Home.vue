<template>
  <div>Home
    <div>
      Board List
      <div v-if="loading">로딩중</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">
          {{b}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {board} from '../api'

    export default {
        name: "Home",
        data() {
            return {
                loading: false,
                boards: [],
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.loading = true
                board.fetch()
                    .then(data => {
                        this.boards = data
                    })
                    .finally(_ => {
                        this.loading = false
                    })
            }
        }
    }
</script>

<style scoped>

</style>
