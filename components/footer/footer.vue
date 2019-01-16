<template>
  <v-footer class="pa-3">
    <v-spacer />
    <div>&copy; KnD, {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['all_out']
  })
}
</script>
