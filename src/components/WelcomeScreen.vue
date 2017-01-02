<template>
<div></div>
</template>

<script>
import { auth } from 'src/store'

export default {
  created() {
    if (auth.currentUser) {
      this.$router.push('/choose-project')
    } else {
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="sass">

</style>
